<div align="center">

  <img src="public/logo.png" alt="شعار عدسة" width="100" />

  # 📸 منصة عدسة | عالم التصوير الفوتوغرافي
  ### Adasa - Photography Blog & Learning Platform

  <p align="center">
    منصة تدوين عربية متخصصة في فن التصوير الفوتوغرافي، تقدم مقالات تعليمية، نصائح احترافية، وأسرار وتقنيات التصوير بتصميم عصري وتجربة مستخدم استثنائية.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-v4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  </p>

</div>

---

## 🌟 مميزات المشروع (Key Features)

- **🎨 تصميم عصري وداكن (Modern Dark Aesthetic):** واجهة مستخدم داكنة مستوحاة من أحدث معايير الويب مع تأثيرات Glassmorphism وتدرجات لونية برتقالية دافئة.
- **🌐 دعم كامل للغة العربية (RTL First):** تخطيط مخصص بالكامل لاتجاه اليمين لليسار مع خطوط عربية أنيقة ومتناسقة.
- **🔍 نظام فلترة وبحث متقدم (Filter & Search System):**
  - تصفية المقالات حسب التصنيفات الفنية (إضاءة، بورتريه، مناظر طبيعية، معدات، إلخ).
  - بحث فوري وسلس في عناوين ومقتطفات المقالات (Search in Title & Excerpt).
  - زر إعادة تعيين الفلاتر بنقرة واحدة.
- **📄 باجنيشن ذكي ومخصص (Custom Pagination):**
  - تقسيم ديناميكي للمقالات (6 مقالات لكل صفحة).
  - حساب تلقائي لعدد الصفحات مع أزرار التنقل (السابق / التالي / أرقام الصفحات).
- **🔀 تبديل وضع العرض (Grid / List View Modes):** إمكانية التبديل الفوري بين العرض الشبكي (Grid) والعرض الطولي (List).
- **🔗 نظام توجيه ذكي باستخدام الـ Slug (Slug-based Dynamic Routing):**
  - روابط مقالات نظيفة ومحسنة لمحركات البحث (SEO-Friendly URLs) مثل `/blog/mastering-golden-hour-photography`.
  - معالجة حالات عدم وجود المقال وعرض صفحة بديلة أنيقة.
- **🔝 استعادة موضع التمرير (Scroll Restoration):** العودة التلقائية لأعلى الصفحة عند الانتقال بين المسارات والمقالات.
- **🧩 بنية مكونات معيارية ونظيفة (Modular Architecture):** تقسيم مكونات الصفحة إلى أجزاء صغيرة يسهل صيانتها وإعادة استخدامها (`FilterBar`, `BlogCard`, `Pagination`, `EmptyPosts`).

---

## 🧭 صفحات ومسارات الموقع (Pages & Routes)

| المسار (Path) | الصفحة (Page) | الوصف |
| :--- | :--- | :--- |
| `/` | **الرئيسية (Home)** | الهيرو، المقالات المميزة، استكشاف التصنيفات، أحدث المقالات، والنشرة البريدية |
| `/blog` | **المدونة (Blog)** | استعراض كافة المقالات مع شريط البحث والفلترة والباجنيشن |
| `/blog/:slug` | **تفاصيل المقال (Blog Details)** | قراءة المقال بالكامل، معلومات الكاتب، فهرس المحتويات، والمقالات المقترحة |
| `/about` | **من نحن (About)** | رسالة المنصة، قيمنا، فريق المصورين، وقنوات التواصل |
| `*` | **صفحة 404 (Not Found)** | صفحة خطأ مخصصة تفاعلية لإعادة توجيه المستخدم للمسار الصحيح |

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Icons:** [FontAwesome 6 / Free](https://fontawesome.com/)
- **Data Source:** ملف بيانات محلي منظم بصيغة JSON

---

## 📁 هيكل المشروع (Project Structure)

```text
myApp/
├── public/
│   ├── logo.png
│   └── favicon.svg
├── src/
│   ├── assets/              # الصور والملفات الثابتة
│   ├── data/
│   │   ├── posts.json       # قاعدة بيانات المقالات والتصنيفات
│   │   └── postsService.js  # دوال جلب، فلترة، وتقسيم المقالات
│   ├── features/
│   │   ├── about/           # مكونات صفحة من نحن
│   │   ├── blog/            # مكونات المدونة (Filter, FilterBar, BlogCard, Pagination, EmptyPosts)
│   │   ├── home/            # مكونات الصفحة الرئيسية (Hero, Articles, Explore, New, Subscribe)
│   │   └── Post/            # مكون قراءة تفاصيل المقال
│   ├── layout/
│   │   ├── Navbar.jsx       # القائمة العلوية
│   │   ├── Footer.jsx       # التذييل وروابط التواصل
│   │   └── Layout.jsx       # الهيكل العام ومزود ScrollRestoration
│   ├── pages/               # الصفحات الرئيسية للموقع
│   ├── App.jsx              # إعدادات المسارات (BrowserRouter)
│   ├── main.jsx             # نقطة الدخول للتطبيق
│   └── index.css            # إعدادات Tailwind والتنسيقات الأساسية
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 تشغيل المشروع محلياً (Getting Started)

### 1. المتطلبات الأساسية
تأكد من تثبيت [Node.js](https://nodejs.org/) على جهازك.

### 2. تثبيت الحزم (Install Dependencies)
```bash
npm install
```

### 3. تشغيل خادم التطوير (Run Dev Server)
```bash
npm run dev
```

### 4. بناء المشروع للإنتاج (Build for Production)
```bash
npm run build
```

---

## 👤 بيانات الطالب والتسليم (Student Info)

- **الاسم:** محمد أحمد عبد الفتاح (Mohamed Ahmed Abdelfattah)
- **المجموعة:** Route - Mon & Thu 7:30 PM (Online)
- **التكليف:** Assignment 14
- **رقم التواصل:** 01222306014
