# Title

Horoscope Animation UI สร้างจาก Next.js 16 + React 19

## Tools

- Next.js 16 + React 19
- Framer Motion (แอนิเมชั่น)
- Tailwind CSS (ออกแบบ)
- TypeScript

## Install

ต้องมี Node.js 18+

```bash
git clone <repository-url>
cd horoscope
npm install
npm run dev
```

เข้าไปที่ http://localhost:3000

## Command

- `npm run dev` - เปิดโหมดพัฒนา
- `npm run build` - เตรียมใช้จริง
- `npm start` - ใช้จริง
- `npm run lint` - ตรวจสอบโค้ด

## Folder

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   └── Background.tsx
│   ├── section/
│   │   ├── FormSection.tsx
│   │   └── HeroSection.tsx
│   └── ui/
│       ├── Candle.tsx
│       └── MagicOrbStand.tsx
├── lib/
│   ├── motion.ts
│   └── utils.ts
└── styles/
    └── globals.css
```

## ส่วนหลัก

**HeroSection** - ส่วนแนะนำพร้อมแอนิเมชั่น

**FormSection** - ฟอร์มดูดวง

**Background** - พื้นหลังเคลื่อนไหว

**Candle** - เทียน

**MagicOrbStand** - ลูกแก้วประดับ

## ปรับแต่ง

แก้ไข `src/lib/motion.ts` เพื่อเปลี่ยนแอนิเมชั่น

แก้ไข `src/styles/globals.css` หรือ components เพื่อเปลี่ยนสี
