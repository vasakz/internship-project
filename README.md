# Full-Stack PDF Report Generator

Bu proje, staj değerlendirme süreci kapsamında geliştirilmiş; kullanıcıdan alınan rapor başlığı ve içeriğini (düz metin veya HTML), kurumsal bir antetli kağıt şablonu içerisinde PDF'e dönüştüren uçtan uca (full-stack) bir web uygulamasıdır.

## 🚀 Temel Özellikler

* **Esnek İçerik Desteği:** Kullanıcılar raporlarını hem "Düz Metin" olarak yazabilir hem de hazır "HTML Dosyası" yükleyerek zengin içerikli PDF'ler oluşturabilir.
* **Antetli Kağıt Yapısı:** Şirket logosu ve güncel tarih bilgisi, rapor kaç sayfa olursa olsun her sayfanın başında (Header) otomatik olarak yer alır.
* **Otomatik Sayfalama:** Rapor içeriği bir sayfayı aştığında, içerik düzeni bozulmadan otomatik olarak yeni sayfalar oluşturulur.
* **Sayfa Numaralandırma:** Her sayfanın altında (Footer) dinamik olarak sayfa numarası ve toplam sayfa sayısı gösterilir.
* **Gelişmiş Kenar Boşlukları:** İçeriğin antet (header/footer) alanlarıyla çakışmaması için Puppeteer üzerinden akıllı margin yönetimi yapılmıştır.

## 🛠 Kullanılan Teknolojiler

### Frontend
* **React (Vite):** Modern ve hızlı SPA mimarisi.
* **Glassmorphism UI:** Modern ve şık bir kullanıcı arayüzü tasarımı.
* **Fetch API:** Backend servisi ile asenkron iletişim.

### Backend
* **Node.js & Express:** Hızlı ve modüler sunucu altyapısı.
* **Puppeteer:** Headless Chrome kullanarak yüksek kalitede HTML render ve PDF üretimi.
* **CORS:** Çapraz kaynaklı istek yönetimi.

## 📦 Kurulum ve Çalıştırma

### 1. Backend Kurulumu

cd backend
npm install
node index.js

### 1. Frontend Kurulumu

cd frontend
npm install
npm run dev