# Yeni Rapor Frontend

Bu proje, kullanıcıların rapor başlığı ve açıklamasını girerek PDF olarak kaydedebilecekleri modern bir React frontend uygulamasıdır. Kullanıcılar metin girebileceği gibi HTML dosyası da yükleyebilir. Tasarım **glassmorphism**, **blur efektleri** ve **beyaz grid arka plan** ile modern bir UX/UI sunar.

---

## Özellikler

* Rapor başlığı ve açıklama girişi
* Açıklama türü seçimi: metin veya HTML dosyası
* Beyaz grid arka plan ile modern görünüm
* Blur ve glassmorphism efektleri
* PDF olarak kaydetme butonu (simülasyon)
* Yüklenen HTML dosyasını okuyup içerik alanına ekleme

---

## Teknolojiler

* React (Functional Components & Hooks)
* HTML / CSS-in-JS (inline styles)

---

## Kurulum

1. Proje dosyalarını klonlayın veya indirin:

```bash
git clone <repository-url>
```

2. Proje dizinine gidin:

```bash
cd internship-project
```

3. Gerekli bağımlılıkları yükleyin:

```bash
npm install
```

---

## Çalıştırma

Projeyi geliştirme modunda çalıştırmak için:

```bash
npm start
```

Tarayıcı otomatik olarak `http://localhost:3000` adresinde açılacaktır.

---

## Kullanım

1. Rapor başlığı alanına bir isim girin.
2. Açıklama türünü seçin:

   * **Metin:** Doğrudan textarea'ya metin yazabilirsiniz.
   * **HTML Dosyası:** `.html` uzantılı bir dosya seçin ve içerik otomatik yüklensin.
3. **PDF Olarak Kaydet** butonuna tıklayın. (Şu an simülasyon, backend ile entegre edilebilir.)
4. Yüklenen içerik ve başlık konsola loglanır (test amaçlı).

---

## Tasarım Detayları

* **Glassmorphism**: İçerik alanı yarı saydam, blur efektli.
* **Blob efektleri**: Arka planda büyük, renkli blurlu daireler.
* **Beyaz Grid**: Arka plan üzerinde ızgara efekti, modern UX görünümü.
* Responsive tasarım: Mobil ve masaüstü uyumlu.

---




