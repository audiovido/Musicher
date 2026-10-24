# MUSICHER — پلتفرم یادگیری گام‌به‌گام موسیقی

## English

### What is MUSICHER?
**MUSICHER** is a mobile-first, bilingual (Persian + English) music-learning web application prototype designed to help beginners build a daily music practice habit in just a few minutes a day. It includes a guided onboarding flow, a 12-lesson structured piano curriculum across 3 chapters, a daily streak tracker with weekly free-day protection, a keyword-driven Practice Advisor, and a Library with a Teachers preview section.

### How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server on port `3000`:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

### How to Add a Lesson or Illustration
- **Add a lesson**: Create a new JSON file in `content/lessons/` (for example `content/lessons/lesson-13.json`) following the bilingual `{ en, fa }` schema (`id`, `chapter`, `title`, `minutes`, `goal`, `see`, `imageUrl`, `audioUrl`, `steps`, `selfCheck`, `quiz`, `summary`, `tomorrow`, `source`).
- **Drop in custom illustrations**: Place your image files in `public/assets/` matching the configured paths (`assets/hero.png`, `assets/teachers-1.png`, `assets/teachers-2.png`, `assets/lesson-01.png`, etc.). The Persian ogee arch placeholders automatically display them.

---

## فارسی (Persian)

### معرفی MUSICHER
**MUSICHER** یک وب‌اپلیکیشن دوزبانه (فارسی و انگلیسی) و موبایل‌محور برای آموزش گام‌به‌گام موسیقی از صفر است. این برنامه شامل مراحل معارفه‌ی اولیه، مسیر یادگیری ۱۲ درسه در ۳ فصل، سیستم استریک روزانه با ۱ روز آزاد هفتگی، مشاور تمرینی هوشمند و کتابخانه‌ی درس‌ها و بخش «استادها، به‌زودی» است.

### روش اجرا
۱. نصب وابستگی‌ها:
```bash
npm install
```
۲. اجرای سرور توسعه روی پورت `3000`:
```bash
npm run dev
```
۳. ساخت نسخه‌ی نهایی:
```bash
npm run build
```

### افزودن درس جدید یا تصویر
- **افزودن درس**: یک فایل JSON جدید در مسیر `content/lessons/` با ساختار دوزبانه (`en` و `fa`) اضافه کنید.
- **افزودن تصاویر**: فایل‌های تصویری خود را در مسیر `public/assets/` (مانند `assets/hero.png`، `assets/teachers-1.png`، `assets/teachers-2.png` و `assets/lesson-01.png`) قرار دهید تا درون قاب‌های طاقی ایرانی نمایش داده شوند.
