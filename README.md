# React + TypeScript + Tailwind İlan Uygulaması

Bu proje, **React (Vite + React+ TypeScript)** kullanılarak geliştirilmiş bir ilan yönetim uygulamasıdır.  
Veriler **json-server** üzerinde tutulur ve **Axios** aracılığıyla yönetilir.  

Uygulama, **ev ilanlarını listeleme, detay görüntüleme, yeni ilan ekleme, düzenleme ve silme** özelliklerini içerir.

---

## Özellikler

-  Listeleme (GET) – Tüm ilanları grid yapısında kartlar hâlinde gösterir  
-  Detay Sayfası (GET /:id) – Seçilen ilanın bilgilerini detaylı gösterir  
-  Yeni İlan Ekleme (POST) – Form aracılığıyla yeni ilan oluşturur  
-  İlan Düzenleme (PUT) – Var olan ilanı günceller  
-  İlan Silme (DELETE) – Seçili ilanı kaldırır  
-  TypeScript tipi ayrı dosyada tanımlanmıştır  
-  TailwindCSS ile modern tasarım  
-  Axios ile RESTful CRUD işlemleri

---

## Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|------------|-----------|
| **Vite + React** | Hızlı geliştirme ortamı |
| **TypeScript** | Tip güvenliği |
| **React Router DOM** | Sayfa yönlendirme |
| **Axios** | API istekleri |
| **TailwindCSS** | Stil sistemi |
| **json-server** | Sahte REST API |
| **concurrently** | Vite + JSON Server’ı tek komutla çalıştırma |

---

## Proje Yapısı
src/
├─ api/
│  └─ axios.ts
├─ components/
│  └─ HomeCard.tsx
├─ pages/
│  ├─ HomeList.tsx       → Ana listeleme sayfası (GET)
│  ├─ HomeDetail.tsx     → Detay sayfası (GET /:id)
│  ├─ AddHome.tsx        → Yeni ilan ekleme formu (POST)
│  └─ EditHome.tsx       → İlan düzenleme formu (PUT)
├─ types/
│  └─ home.ts            → TypeScript tipi
├─ main.tsx              → Router tanımları
└─ index.css             → Tailwind stilleri

---


## db.json Örneği
{
  "homes": [
    {
      "id": 1,
      "title": "Modern Sea View Apartment",
      "description": "Spacious apartment with balcony and ocean view.",
      "pricePerNight": 150,
      "location": "Antalya, Türkiye",
      "imageUrl": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "guests": 4,
      "bedrooms": 2,
      "bathrooms": 2,
      "amenities": ["WiFi", "Air Conditioning", "Balcony", "Pool"]
    },
    {
      "id": 2,
      "title": "Mountain Cabin Retreat",
      "description": "Cozy wooden cabin surrounded by nature.",
      "pricePerNight": 110,
      "location": "Uludağ, Türkiye",
      "imageUrl": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "guests": 3,
      "bedrooms": 1,
      "bathrooms": 1,
      "amenities": ["Fireplace", "WiFi", "Kitchen"]
    },
    {
      "id": 3,
      "title": "Istanbul Downtown Loft",
      "description": "Modern loft in the heart of Istanbul with great city views.",
      "pricePerNight": 200,
      "location": "Istanbul, Türkiye",
      "imageUrl": "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "guests": 2,
      "bedrooms": 1,
      "bathrooms": 1,
      "amenities": ["WiFi", "Kitchen", "Air Conditioning", "Workspace"]
    }
  ]
} 
---
## Bağımlılıkları yükleme ve çalıştırma
```bash
npm install
npm run dev
---


