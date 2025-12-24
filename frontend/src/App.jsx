import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [contentType, setContentType] = useState("text"); // text veya html

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/html") {
      const reader = new FileReader();
      reader.onload = (event) => {
        setContent(event.target.result);
      };
      reader.readAsText(file);
    } else {
      alert("Lütfen geçerli bir HTML dosyası seçin.");
      e.target.value = null;
    }
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Lütfen alanları doldurun.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    alert("Rapor başarıyla oluşturuldu!");
    console.log({ title, contentType, content }); // test için
  };

  return (
    <div style={styles.background}>
      <div style={{ ...styles.blob, background: "#674F99", top: "-10%", left: "-5%" }}></div>
      <div style={{ ...styles.blob, background: "#B2A6CC", bottom: "10%", right: "-5%" }}></div>

      <div style={styles.glassContainer}>
        <header style={styles.header}>
          <div style={styles.iconCircle}>
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#674F99" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <circle cx="9" cy="9" r="0.5" fill="#674F99"></circle>
            </svg>
          </div>
          <h1 style={styles.title}>Yeni Rapor</h1>
          <p style={styles.subtitle}>İçeriğinizi girip PDF'e dönüştürün</p>
        </header>

        <div style={styles.inputGroup}>
          <div style={styles.bubbleInputWrapper}>
            <label style={styles.label}>RAPOR ADI</label>
            <input
              type="text"
              placeholder="Örn: Proje Detayları"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.bubbleInputWrapper}>
            <label style={styles.label}>AÇIKLAMA TÜRÜ</label>
            <select
              value={contentType}
              onChange={(e) => {
                setContentType(e.target.value);
                setContent(""); // önceki içeriği sıfırla
              }}
              style={{ ...styles.input, cursor: "pointer" }}
            >
              <option value="text">Metin</option>
              <option value="html">HTML Dosyası</option>
            </select>
          </div>

          {contentType === "text" ? (
            <div style={styles.bubbleInputWrapper}>
              <textarea
                placeholder="Metninizi buraya yazın..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                style={styles.textarea}
              />
            </div>
          ) : (
            <div style={styles.bubbleInputWrapper}>
              <input
                type="file"
                accept=".html"
                onChange={handleFileChange}
                style={styles.input}
              />
              {content && <p style={{ marginTop: "8px", fontSize: "12px", color: "#718096" }}>Dosya yüklendi!</p>}
            </div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          onMouseEnter={(e) => !loading && (e.target.style.opacity = "0.9")}
          onMouseLeave={(e) => !loading && (e.target.style.opacity = "1")}
          style={{
            ...styles.button,
            backgroundColor: loading ? "#94a3b8" : "#674F99",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Hazırlanıyor..." : "PDF Olarak Kaydet"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  background: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#F4F7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'SF Pro Display', -apple-system, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  blob: {
    position: "absolute",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    filter: "blur(100px)",
    opacity: 0.15,
    zIndex: 0,
  },
  glassContainer: {
    width: "90%",
    maxWidth: "480px",
    background: "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
    borderRadius: "40px",
    padding: "50px 40px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: "0 25px 50px -12px rgba(103, 79, 153, 0.15)",
    zIndex: 1,
  },
  header: { textAlign: "center", marginBottom: "35px" },
  iconCircle: {
    width: "70px",
    height: "70px",
    background: "white",
    borderRadius: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px auto",
    boxShadow: "0 10px 20px rgba(0,0,0,0.04)",
  },
  title: { fontSize: "30px", fontWeight: "800", color: "#2D3748", margin: "0 0 5px 0", letterSpacing: "-0.8px" },
  subtitle: { fontSize: "15px", color: "#718096", margin: 0 },
  inputGroup: { display: "flex", flexDirection: "column", gap: "18px", marginBottom: "30px" },
  bubbleInputWrapper: {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "15px 20px",
    borderRadius: "24px",
    border: "1px solid rgba(226, 232, 240, 0.8)",
  },
  label: { display: "block", fontSize: "11px", fontWeight: "700", color: "#674F99", marginBottom: "6px", letterSpacing: "0.5px" },
  input: { width: "100%", border: "none", background: "transparent", fontSize: "16px", outline: "none", color: "#1A202C" },
  textarea: { width: "100%", border: "none", background: "transparent", fontSize: "16px", outline: "none", color: "#1A202C", resize: "none", fontFamily: "inherit" },
  button: {
    width: "100%",
    padding: "20px",
    borderRadius: "24px",
    border: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "700",
    boxShadow: "0 12px 24px rgba(103, 79, 153, 0.3)",
    transition: "all 0.3s ease",
  },
};

export default App;
