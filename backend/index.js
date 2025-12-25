const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-pdf", async (req, res) => {
  const { title, content, contentType } = req.body;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // PDF içeriği için HTML şablonu
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { 
            font-family: 'Helvetica', sans-serif; 
            margin: 0; 
            padding: 20px;
            color: #333;
          }
          .report-title { 
            color: #674F99; 
            font-size: 24px; 
            border-bottom: 2px solid #674F99; 
            padding-bottom: 10px;
            margin-bottom: 20px;
          }
          .main-content { 
            line-height: 1.6; 
            font-size: 14px; 
            word-wrap: break-word; 
          }
          /* Kullanıcıdan gelen HTML'in düzgün görünmesi için temel stiller */
          img { max-width: 100%; height: auto; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        </style>
      </head>
      <body>
        <div class="report-title">${title}</div>
        <div class="main-content">
          ${contentType === "html" ? content : `<p style="white-space: pre-wrap;">${content}</p>`}
        </div>
      </body>
      </html>
    `;

    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "120px",    // Antet alanı için üstten boşluk
        bottom: "80px",  // Footer alanı için alttan boşluk
        left: "50px",
        right: "50px"
      },
      displayHeaderFooter: true,
      // ANTETLİ YAPI BURADA KURULUR:
      headerTemplate: `
        <div style="font-family: Helvetica; font-size: 10px; width: 100%; padding: 20px 50px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
          <div style="color: #674F99; font-weight: bold; font-size: 16px;">ŞİRKET LOGOSU</div>
          <div style="text-align: right;">
            <div>Resmi Rapor Dökümanı</div>
            <div style="color: #888;">Tarih: ${new Date().toLocaleDateString('tr-TR')}</div>
          </div>
        </div>
      `,
      footerTemplate: `
        <div style="font-family: Helvetica; font-size: 9px; width: 100%; text-align: center; border-top: 1px solid #eee; padding-top: 5px; color: #888;">
          Sayfa <span class="pageNumber"></span> / <span class="totalPages"></span>
        </div>
      `
    });

    await browser.close();

    res.contentType("application/pdf");
    res.send(pdfBuffer);

  } catch (error) {
    console.error("PDF Hatası:", error);
    res.status(500).send("PDF oluşturulamadı.");
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend http://localhost:${PORT} üzerinde çalışıyor`));