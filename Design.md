# DESIGN.md

# Landing Page — Jasa Pembuatan Website & Aplikasi Custom

> **Design Specification — Prototype Version**
>
> Stack prototype: **HTML5 + CSS3 + Vanilla JavaScript**
>
> Status: **Draft / Demo**
>
> Production stack akan ditentukan setelah desain dan UX final.

---

# 1. Project Overview

Landing page ini merupakan website marketing untuk menawarkan jasa:

* Pembuatan Website
* Website Company Profile
* Landing Page
* E-Commerce
* Custom Web Application
* Sistem Informasi
* Dashboard & Admin Panel
* API Integration
* Website Maintenance
* Custom Software Development

Landing page harus mampu mengubah visitor menjadi calon client melalui:

* Visual yang profesional
* Portfolio yang meyakinkan
* Penjelasan layanan yang jelas
* Proses kerja yang transparan
* Pricing yang mudah dipahami
* Testimonial
* FAQ
* CTA konsultasi
* WhatsApp conversion

---

# 2. Design Objective

Tujuan utama desain:

### 01 — Build Trust

Visitor harus merasa bahwa jasa ini dikerjakan oleh developer/professional agency yang serius.

### 02 — Explain Services

Visitor harus memahami layanan tanpa harus membaca terlalu banyak.

### 03 — Showcase Capability

Portfolio harus menjadi bukti bahwa developer mampu mengerjakan berbagai jenis project.

### 04 — Increase Conversion

Setiap section harus mengarahkan visitor secara natural menuju konsultasi.

### 05 — Establish Brand

Website tidak boleh terlihat seperti template jasa website murah.

Positioning yang diinginkan:

> **Modern Custom Software Development Agency**

---

# 3. Core Brand Message

## Primary Message

> **Kami Bangun Website & Aplikasi Custom untuk Mengembangkan Bisnis Anda.**

## Supporting Message

> Dari website sederhana hingga aplikasi bisnis kompleks, kami membangun solusi digital yang disesuaikan dengan kebutuhan dan workflow bisnis Anda.

## Short Brand Message

> **Build Digital. Grow Business.**

## Core Principle

> **Don't sell websites. Sell solutions.**

---

# 4. Target Audience

## 4.1 UMKM

Kebutuhan:

* Company profile
* Landing page
* Online catalog
* Online store
* Booking system

Pain point:

* Bisnis terlihat kurang profesional
* Masih mengandalkan WhatsApp
* Tidak memiliki website
* Sulit menjangkau customer baru

---

## 4.2 Perusahaan

Kebutuhan:

* Corporate website
* Internal system
* Dashboard
* CRM
* Management system

Pain point:

* Banyak proses manual
* Data tidak terorganisir
* Sistem lama sulit dikembangkan

---

## 4.3 Sekolah

Kebutuhan:

* Website sekolah
* PPDB
* Sistem informasi
* Dashboard admin
* Portal siswa
* Portal guru

---

## 4.4 Startup

Kebutuhan:

* MVP
* SaaS
* Web application
* API
* Dashboard

---

## 4.5 Personal / Professional

Kebutuhan:

* Portfolio
* Personal website
* Landing page
* Personal branding

---

# 5. Design Direction

## Visual Style

Gunakan gaya:

* Modern
* Minimal
* Premium
* Professional
* Technical
* Clean
* Trustworthy
* Conversion-oriented

Referensi visual:

**Modern SaaS + Digital Agency**

---

# 6. Design Principles

### Principle 01

**Clarity over decoration**

Desain harus mudah dipahami.

### Principle 02

**Content over animation**

Animasi membantu UX, bukan menjadi fokus utama.

### Principle 03

**Proof over promises**

Portfolio dan hasil project lebih penting daripada klaim.

### Principle 04

**Business language over technical language**

Gunakan bahasa yang mudah dipahami client.

### Principle 05

**One primary action**

CTA utama:

> Konsultasi Gratis

---

# 7. Color System

## Primary

```css
--primary: #2563EB;
--primary-dark: #1D4ED8;
--primary-light: #EFF6FF;
```

## Background

```css
--background: #FFFFFF;
--background-soft: #F8FAFC;
```

## Surface

```css
--surface: #FFFFFF;
--surface-muted: #F1F5F9;
```

## Text

```css
--text-primary: #0F172A;
--text-secondary: #475569;
--text-muted: #94A3B8;
```

## Border

```css
--border: #E2E8F0;
```

## Status

```css
--success: #16A34A;
--warning: #F59E0B;
--danger: #DC2626;
```

---

# 8. Color Usage

## Blue

Gunakan untuk:

* Primary CTA
* Links
* Active navigation
* Important highlights
* Icons
* Interactive elements

## Dark

Gunakan untuk:

* Heading
* Footer
* Final CTA
* Strong visual section

## Gray

Gunakan untuk:

* Secondary text
* Description
* Metadata

## White

Gunakan untuk:

* Main background
* Cards
* Navigation

---

# 9. Typography

Recommended font:

**Inter**

Alternative:

**Plus Jakarta Sans**

Google Fonts dapat digunakan untuk prototype.

---

## Typography Scale

### H1

Desktop:

```css
font-size: clamp(3rem, 6vw, 5rem);
line-height: 1.05;
font-weight: 700;
letter-spacing: -0.04em;
```

Mobile:

```css
font-size: 40px;
line-height: 1.1;
```

### H2

```text
40–48px
```

### H3

```text
24–32px
```

### Body

```text
16–18px
```

### Small

```text
14px
```

---

# 10. Layout System

## Container

```css
.container {
    width: min(1200px, calc(100% - 48px));
    margin-inline: auto;
}
```

Large screen:

```text
max-width: 1280px
```

---

# 11. Section Spacing

Desktop:

```text
100–140px
```

Tablet:

```text
80px
```

Mobile:

```text
64px
```

---

# 12. Border Radius

Small:

```text
8px
```

Medium:

```text
12px
```

Large:

```text
20px
```

Extra large:

```text
24px
```

Buttons:

```text
12px
```

---

# 13. Shadow

Gunakan shadow secara minimal.

Small:

```css
0 4px 12px rgba(15, 23, 42, 0.06);
```

Medium:

```css
0 12px 32px rgba(15, 23, 42, 0.08);
```

Large:

```css
0 24px 60px rgba(15, 23, 42, 0.12);
```

---

# 14. Responsive Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

# 15. Navbar

## Desktop

```text
┌──────────────────────────────────────────────────────────────┐
│ LOGO     Layanan Portfolio Proses Harga FAQ   [Konsultasi] │
└──────────────────────────────────────────────────────────────┘
```

## Requirements

* Sticky
* Height 72px
* Transparent ketika di bagian atas
* Background solid ketika scroll
* Backdrop blur
* Border bottom
* Smooth transition

---

# 16. Navbar Behavior

Initial:

```text
background: transparent;
```

Scrolled:

```text
background: rgba(255,255,255,.90);
backdrop-filter: blur(16px);
border-bottom: 1px solid var(--border);
```

JavaScript digunakan untuk mendeteksi scroll.

---

# 17. Mobile Navbar

```text
┌──────────────────────────────┐
│ LOGO                    ☰   │
└──────────────────────────────┘
```

Menu:

```text
Home
Layanan
Portfolio
Proses
Harga
FAQ
Konsultasi
```

Menu menggunakan animated drawer/dropdown.

---

# 18. Hero Section

Hero merupakan section paling penting.

## Objective

Dalam 5 detik visitor harus mengetahui:

1. Apa yang ditawarkan.
2. Siapa targetnya.
3. Apa keuntungan.
4. Bagaimana cara menghubungi.

---

# 19. Hero Content

Eyebrow:

> DIGITAL DEVELOPMENT PARTNER

Headline:

> **Kami Bangun Website & Aplikasi Custom untuk Mengembangkan Bisnis Anda.**

Description:

> Kami membantu bisnis, perusahaan, sekolah, dan startup membangun website serta aplikasi custom yang modern, scalable, dan sesuai kebutuhan.

CTA Primary:

> **Konsultasi Gratis**

CTA Secondary:

> **Lihat Portfolio**

---

# 20. Hero Trust Stats

Contoh:

```text
50+
Projects

30+
Clients

3+
Years Experience
```

Jika data asli belum tersedia, gunakan placeholder.

Jangan menampilkan angka palsu pada production website.

---

# 21. Hero Visual

Gunakan browser mockup.

```text
┌─────────────────────────────────┐
│ ● ● ●                           │
├─────────────────────────────────┤
│                                 │
│        Dashboard Preview        │
│                                 │
│ ┌──────┐ ┌──────┐ ┌──────┐     │
│ │ 120  │ │ 350  │ │ 98%  │     │
│ └──────┘ └──────┘ └──────┘     │
│                                 │
│        Analytics Chart          │
│                                 │
└─────────────────────────────────┘
```

Tambahkan floating elements:

```text
+ 24 New Orders
+ 98% Performance
+ Secure
```

---

# 22. Hero Background

Gunakan:

* subtle gradient
* grid pattern
* soft glow
* abstract geometric elements

Contoh:

```css
background:
radial-gradient(
    circle at 70% 30%,
    rgba(37,99,235,.15),
    transparent 35%
),
#FFFFFF;
```

Jangan menggunakan background yang terlalu ramai.

---

# 23. Trust Section

Background:

```text
#F8FAFC
```

Heading:

> Dipercaya untuk Berbagai Kebutuhan Digital

Tampilkan:

```text
[Client Logo]
[Client Logo]
[Client Logo]
[Client Logo]
[Client Logo]
```

Jika belum memiliki client:

> Selected Projects

---

# 24. Problem Section

Heading:

> **Punya Ide Digital Tapi Bingung Mulai Dari Mana?**

Description:

> Tidak semua bisnis membutuhkan software yang sama. Kami membantu menerjemahkan kebutuhan bisnis menjadi solusi digital yang tepat.

---

# 25. Problem Cards

## Problem 01

### Website Tidak Profesional

Website lama atau template tidak mencerminkan kualitas bisnis.

## Problem 02

### Proses Masih Manual

Data masih dikelola melalui Excel, WhatsApp, atau pencatatan manual.

## Problem 03

### Sistem Tidak Sesuai

Software siap pakai tidak selalu mengikuti workflow bisnis.

## Problem 04

### Tidak Punya Tim IT

Bisnis membutuhkan partner teknologi tanpa harus membangun tim sendiri.

---

# 26. Service Section

Heading:

> **Solusi Digital untuk Berbagai Kebutuhan**

Subheading:

> Dari website sederhana hingga aplikasi bisnis yang kompleks.

---

# 27. Service Cards

## Company Profile

Website profesional untuk meningkatkan kredibilitas perusahaan.

Features:

* About
* Services
* Portfolio
* Team
* Contact
* Blog

---

## Landing Page

Landing page conversion-oriented untuk:

* Product
* Service
* Campaign
* Personal brand

---

## E-Commerce

Fitur:

* Product
* Cart
* Checkout
* Payment
* Order
* Customer

---

## Custom Web Application

Untuk:

* Management system
* Rental
* Booking
* Inventory
* CRM
* School system
* POS

---

## Dashboard & Admin Panel

Fitur:

* Analytics
* Data management
* User management
* Reports
* Content management

---

## API & Integration

Integrasi:

* Payment gateway
* WhatsApp
* Shipping
* Google services
* Third-party API

---

# 28. Service Card Design

```css
.service-card {
    padding: 32px;
    border: 1px solid var(--border);
    border-radius: 24px;
    background: var(--surface);
}
```

Hover:

```text
translateY(-4px)
shadow increase
border primary
```

---

# 29. Service Layout

Desktop:

```text
┌─────────────────────┬─────────────────────────────┐
│ Company Profile     │ Custom Web Application      │
│                     │                             │
├─────────────────────┤                             │
│ Landing Page        │                             │
├─────────────────────┴─────────────────────────────┤
│ E-Commerce          │ Dashboard                   │
└─────────────────────┴─────────────────────────────┘
```

Custom Web Application menjadi featured card.

---

# 30. Why Choose Us

Heading:

> **Kenapa Memilih Kami?**

Grid 2 × 2.

---

## 01 — Custom Development

Dibangun sesuai kebutuhan, bukan sekadar template.

## 02 — Modern Design

Interface modern, responsive, dan mudah digunakan.

## 03 — Secure

Authentication, authorization, validation, dan keamanan data diperhatikan sejak awal.

## 04 — Scalable

Sistem dirancang agar dapat dikembangkan di masa depan.

## 05 — Transparent

Scope, progress, dan development process dapat dikomunikasikan secara jelas.

## 06 — Support

Tersedia support dan maintenance setelah project selesai.

---

# 31. Portfolio Section

Portfolio merupakan social proof utama.

Heading:

> **Project yang Telah Kami Kerjakan**

Subheading:

> Beberapa website dan aplikasi yang kami bangun untuk berbagai kebutuhan.

---

# 32. Portfolio Categories

Filter:

```text
All
Website
Landing Page
E-Commerce
Dashboard
Custom Application
```

---

# 33. Portfolio Card

```text
┌─────────────────────────────────────────┐
│                                         │
│           PROJECT IMAGE                 │
│                                         │
├─────────────────────────────────────────┤
│ Custom School Management System         │
│                                         │
│ Laravel · MySQL · Bootstrap             │
│                                         │
│ View Project →                          │
└─────────────────────────────────────────┘
```

Image ratio:

```text
16:10
```

---

# 34. Portfolio Hover

Ketika hover:

```text
image scale(1.03)
overlay muncul
arrow muncul
```

Transition:

```css
transition: all .3s ease;
```

---

# 35. Portfolio Detail Modal

Prototype dapat menggunakan modal JavaScript.

Ketika portfolio diklik:

```text
┌─────────────────────────────────────────────┐
│ ×                                           │
│                                             │
│ PROJECT IMAGE                               │
│                                             │
│ Project Name                                │
│ Category                                    │
│                                             │
│ Description                                 │
│                                             │
│ Features                                    │
│ • Feature 1                                 │
│ • Feature 2                                 │
│ • Feature 3                                 │
│                                             │
│ Technology                                  │
│ Laravel · MySQL · Bootstrap                 │
│                                             │
│ [Visit Project]                             │
└─────────────────────────────────────────────┘
```

---

# 36. Technology Section

Heading:

> **Teknologi yang Kami Gunakan**

Technology badges:

```text
HTML
CSS
JavaScript
Laravel
PHP
React
MySQL
PostgreSQL
Git
GitHub
Docker
```

Untuk prototype, gunakan badge sederhana.

---

# 37. Technology Design

Jangan membuat technology section terlihat seperti katalog logo.

Gunakan:

```text
┌────────────┐ ┌────────────┐ ┌────────────┐
│ Laravel    │ │ JavaScript │ │ React      │
└────────────┘ └────────────┘ └────────────┘
```

Hover:

```text
border primary
background primary-light
```

---

# 38. Process Section

Heading:

> **Bagaimana Project Anda Dikerjakan?**

---

# 39. Development Process

## 01 — Consultation

Client menjelaskan kebutuhan dan masalah.

## 02 — Analysis

Kebutuhan, user, workflow, dan fitur dianalisis.

## 03 — UI/UX Design

Struktur halaman dan interface dirancang.

## 04 — Development

Frontend, backend, database, dan API dikembangkan.

## 05 — Testing

Fitur, responsive, performance, dan security diuji.

## 06 — Launch

Project dideploy dan siap digunakan.

## 07 — Maintenance

Support dan pengembangan lanjutan tersedia.

---

# 40. Process Desktop

```text
01              02              03              04

●───────────────●───────────────●───────────────●

Consult         Analysis        Design          Development


05              06              07

●───────────────●───────────────●

Testing         Launch          Maintenance
```

---

# 41. Process Mobile

```text
01
●
│
Consultation
│
02
●
│
Analysis
│
03
●
│
Design
│
04
●
│
Development
│
05
●
│
Testing
│
06
●
│
Launch
```

---

# 42. Pricing Section

Heading:

> **Paket yang Dapat Disesuaikan dengan Kebutuhan**

Pricing bukan menjadi fokus utama.

---

# 43. Pricing Cards

## STARTER

> Mulai Rp X

Cocok untuk:

* Portfolio
* Landing page
* Personal website

Includes:

* Responsive
* Basic SEO
* Contact
* Deployment

CTA:

> Konsultasi

---

## BUSINESS

> Mulai Rp X

Badge:

> MOST POPULAR

Cocok untuk:

* Company profile
* Business website
* CMS
* Catalog

Includes:

* CMS
* SEO
* Analytics
* Admin panel
* Support

CTA:

> Konsultasi

---

## CUSTOM

> Custom Pricing

Cocok untuk:

* E-Commerce
* Web application
* Dashboard
* Internal system
* API

CTA:

> Diskusikan Project

---

# 44. Pricing Rules

Jangan:

* Menampilkan terlalu banyak fitur
* Menggunakan harga palsu
* Membuat custom development terlihat seperti paket template

Gunakan:

> Mulai dari...

atau:

> Custom Pricing

---

# 45. Testimonial Section

Heading:

> **Apa Kata Client Kami?**

Card:

```text
★★★★★

"Komunikasinya mudah dan hasil akhirnya
sesuai dengan kebutuhan kami."

Avatar

Nama Client
Company
```

Untuk prototype boleh menggunakan dummy content.

Untuk production wajib menggunakan testimonial nyata.

---

# 46. FAQ Section

Heading:

> **Pertanyaan yang Sering Ditanyakan**

FAQ:

### Apakah bisa membuat aplikasi custom?

Ya. Aplikasi dapat dibuat berdasarkan kebutuhan, workflow, user, dan fitur yang diperlukan.

### Apakah saya harus sudah memiliki desain?

Tidak. Desain dapat dibuat dari awal berdasarkan kebutuhan project.

### Apakah bisa membuat dashboard admin?

Bisa.

### Apakah bisa integrasi payment gateway?

Bisa selama tersedia API/integrasi yang sesuai.

### Apakah website responsive?

Ya. Website dirancang agar dapat digunakan pada desktop, tablet, dan mobile.

### Berapa lama pengerjaan?

Tergantung kompleksitas project.

### Apakah ada maintenance?

Tersedia maintenance dan support setelah project selesai.

---

# 47. FAQ Interaction

Prototype menggunakan JavaScript.

Default:

```text
Semua FAQ closed
```

Ketika diklik:

```text
Question
       ↓
Answer muncul
       ↓
Icon + berubah menjadi −
```

Gunakan smooth height animation.

---

# 48. Final CTA

Gunakan background dark.

```text
#0F172A
```

Heading:

> **Punya Ide Website atau Aplikasi?**

Supporting:

> Ceritakan kebutuhan Anda. Kami bantu menentukan solusi, fitur, dan estimasi pengembangan.

Primary CTA:

> **Konsultasi Gratis via WhatsApp**

Secondary:

> **Lihat Portfolio**

---

# 49. WhatsApp CTA

Prototype menggunakan link WhatsApp.

Format:

```text
https://wa.me/[PHONE]?text=[MESSAGE]
```

Contoh message:

```text
Halo, saya tertarik dengan jasa pembuatan website/aplikasi custom. Saya ingin berkonsultasi mengenai project saya.
```

Nomor WhatsApp production harus diganti dengan nomor asli.

---

# 50. Mobile Sticky CTA

Pada mobile setelah user melakukan scroll:

```text
┌──────────────────────────────────┐
│ 💬  Konsultasi Gratis            │
└──────────────────────────────────┘
```

Position:

```css
position: fixed;
bottom: 16px;
left: 16px;
right: 16px;
```

Desktop tidak perlu menggunakan sticky bottom CTA.

---

# 51. Footer

Footer menggunakan dark background.

```text
┌────────────────────────────────────────────────────────┐
│                                                        │
│ BRAND                 SERVICES          COMPANY        │
│                                                        │
│ Digital development   Website           About          │
│ partner...            E-Commerce        Portfolio      │
│                       Custom App        Process        │
│                       Dashboard         FAQ            │
│                                                        │
│ CONTACT                                                │
│ WhatsApp · Email · Instagram · GitHub · LinkedIn      │
│                                                        │
├────────────────────────────────────────────────────────┤
│ © 2026 [Brand]                    Privacy · Terms      │
└────────────────────────────────────────────────────────┘
```

---

# 52. Button System

## Primary Button

```css
.btn-primary {
    background: #2563EB;
    color: #FFFFFF;
    padding: 14px 22px;
    border-radius: 12px;
    font-weight: 600;
}
```

Hover:

```text
background → #1D4ED8
translateY(-1px)
```

---

## Secondary Button

```css
.btn-secondary {
    background: transparent;
    color: #0F172A;
    border: 1px solid #CBD5E1;
}
```

---

# 53. Icon System

Untuk prototype gunakan:

**Lucide Icons** atau **Bootstrap Icons** melalui CDN.

Icon yang dibutuhkan:

```text
Globe
Code
Shopping Cart
Layout Dashboard
Database
Plug
Arrow Right
Check
Chevron Down
Menu
X
Message Circle
Shield
Zap
Layers
```

---

# 54. Image Guidelines

Gunakan screenshot project asli jika tersedia.

Jika belum:

Gunakan placeholder yang menyerupai:

* dashboard
* website
* e-commerce
* admin panel
* mobile application

Hindari:

* stock photo developer
* orang sedang coding
* laptop dengan kode random
* gambar yang tidak berkaitan dengan produk

---

# 55. Image Treatment

Portfolio:

```css
border-radius: 20px;
overflow: hidden;
```

Image:

```css
width: 100%;
display: block;
object-fit: cover;
```

Hover:

```css
transform: scale(1.03);
```

---

# 56. Animation Guidelines

Animation harus subtle.

## Page Load

Hero:

```text
opacity: 0 → 1
translateY(20px) → 0
```

Duration:

```text
500–700ms
```

---

## Scroll Reveal

Gunakan:

```text
fade-up
```

Elements:

* Section heading
* Cards
* Portfolio
* Process
* Pricing

---

# 57. JavaScript Animation

Prototype dapat menggunakan:

```text
IntersectionObserver
```

Contoh behavior:

```text
Element masuk viewport
       ↓
class .reveal-visible
       ↓
opacity 1
translateY 0
```

---

# 58. Hover Animation

Card:

```text
translateY(-4px)
```

Button:

```text
translateY(-1px)
```

Image:

```text
scale(1.03)
```

Icon:

```text
translateX(3px)
```

---

# 59. Animation Restrictions

Hindari:

* Excessive parallax
* Infinite spinning
* Excessive floating
* Text flying
* Animation lebih dari 1 detik
* Background terlalu bergerak
* Animasi yang mengganggu CTA

---

# 60. Accessibility

Prototype tetap harus memperhatikan accessibility.

Requirements:

* Semantic HTML
* Alt image
* Button bukan div
* Proper heading hierarchy
* Keyboard navigation
* Focus state
* Color contrast
* ARIA untuk menu/accordion jika diperlukan

---

# 61. SEO Prototype

HTML harus memiliki:

```html
<title>
Jasa Pembuatan Website & Aplikasi Custom | [Brand]
</title>
```

Meta description:

```text
Jasa pembuatan website dan aplikasi custom untuk bisnis, perusahaan, sekolah, UMKM, dan startup.
```

Keywords target:

```text
jasa pembuatan website
jasa pembuatan aplikasi
jasa pembuatan website profesional
jasa pembuatan aplikasi custom
jasa web development
jasa custom website
jasa software development
```

---

# 62. HTML Semantic Structure

Gunakan:

```html
<header>
<nav>

<main>

<section>
<article>

<footer>
```

Jangan membuat seluruh halaman menggunakan `<div>`.

---

# 63. Recommended HTML Structure

```text
<body>

<header>
    Navbar
</header>

<main>

    <section id="hero">
    </section>

    <section id="trust">
    </section>

    <section id="problems">
    </section>

    <section id="services">
    </section>

    <section id="why-us">
    </section>

    <section id="portfolio">
    </section>

    <section id="technology">
    </section>

    <section id="process">
    </section>

    <section id="pricing">
    </section>

    <section id="testimonials">
    </section>

    <section id="faq">
    </section>

    <section id="cta">
    </section>

</main>

<footer>
</footer>

</body>
```

---

# 64. Prototype File Structure

Tahap awal wajib sederhana.

```text
landing-page/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── assets/
    │
    ├── images/
    │   ├── hero/
    │   ├── portfolio/
    │   └── testimonials/
    │
    └── icons/
```

---

# 65. Prototype Rules

Prototype:

* Tidak menggunakan framework
* Tidak membutuhkan backend
* Tidak membutuhkan database
* Tidak membutuhkan authentication
* Tidak membutuhkan CMS
* Tidak membutuhkan build system
* Bisa dijalankan langsung melalui browser

Target:

```text
index.html
    ↓
Open Browser
    ↓
Website langsung berjalan
```

---

# 66. Prototype JavaScript Features

JavaScript hanya digunakan untuk interaksi.

Features:

### Navbar

* Sticky state
* Mobile menu

### Portfolio

* Filter
* Modal detail

### FAQ

* Accordion

### Scroll

* Reveal animation
* Smooth navigation

### CTA

* WhatsApp redirect

### Optional

* Counter animation
* Back to top
* Active navigation

---

# 67. Smooth Scroll

Navigation:

```text
Home
Layanan
Portfolio
Proses
Harga
FAQ
```

Ketika diklik:

```text
smooth scroll
```

CSS:

```css
html {
    scroll-behavior: smooth;
}
```

---

# 68. Portfolio Data

Prototype dapat menyimpan data di JavaScript.

Contoh struktur:

```javascript
const portfolio = [
    {
        title: "SiPelajar",
        category: "Custom Application",
        description: "School management system.",
        technologies: [
            "Laravel",
            "MySQL",
            "Bootstrap"
        ],
        image: "assets/images/portfolio/sipelajar.jpg"
    }
];
```

Data production nantinya dapat berasal dari database/CMS.

---

# 69. Service Data

Prototype dapat menggunakan HTML langsung atau JavaScript object.

Contoh:

```javascript
const services = [
    {
        title: "Company Profile",
        description: "Website profesional untuk bisnis."
    },
    {
        title: "Custom Application",
        description: "Aplikasi yang dibuat sesuai workflow bisnis."
    }
];
```

---

# 70. Responsive Hero

Desktop:

```text
2 columns
```

Mobile:

```text
1 column
```

Urutan:

```text
Headline
Description
CTA
Stats
Mockup
```

---

# 71. Responsive Services

Desktop:

```text
2–3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

---

# 72. Responsive Portfolio

Desktop:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

---

# 73. Responsive Pricing

Desktop:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

---

# 74. Mobile Typography

H1:

```text
40px
```

H2:

```text
32px
```

H3:

```text
22–24px
```

Body:

```text
16px
```

---

# 75. Mobile Spacing

Horizontal padding:

```text
20–24px
```

Section:

```text
64px
```

Card:

```text
24px
```

---

# 76. Mobile UX

Pastikan:

* Button mudah ditekan
* Text tidak terlalu kecil
* Navigation mudah dibuka
* Portfolio mudah dibaca
* FAQ mudah diklik
* CTA selalu mudah ditemukan

Minimum touch target:

```text
44 × 44px
```

---

# 77. Desktop UX

Desktop harus memanfaatkan whitespace.

Jangan membuat:

```text
text terlalu rapat
card terlalu banyak
section terlalu penuh
```

Gunakan:

```text
Whitespace
Hierarchy
Contrast
Alignment
```

---

# 78. Conversion Flow

```text
Google / Social Media
        ↓
Landing Page
        ↓
Hero
        ↓
Services
        ↓
Why Us
        ↓
Portfolio
        ↓
Process
        ↓
Pricing
        ↓
Testimonials
        ↓
FAQ
        ↓
Final CTA
        ↓
WhatsApp
        ↓
Consultation
```

---

# 79. CTA Placement

CTA utama muncul di:

### Navbar

```text
Konsultasi Gratis
```

### Hero

```text
Konsultasi Gratis
```

### Services

```text
Diskusikan Project
```

### Portfolio

```text
Buat Project Serupa
```

### Pricing

```text
Konsultasi
```

### Final CTA

```text
Konsultasi Gratis via WhatsApp
```

---

# 80. Copywriting Guidelines

Gunakan bahasa:

* Profesional
* Friendly
* Percaya diri
* Tidak berlebihan
* Mudah dipahami

---

# 81. Avoid Copywriting

Hindari:

> Kami adalah developer terbaik nomor satu.

Hindari:

> Harga termurah se-Indonesia.

Hindari:

> Dijamin sukses 100%.

Hindari klaim yang tidak bisa dibuktikan.

---

# 82. Better Copywriting

Gunakan:

> **Bangun sistem yang benar-benar sesuai cara bisnis Anda bekerja.**

atau:

> **Dari ide menjadi produk digital yang siap digunakan.**

atau:

> **Website dan aplikasi custom yang dirancang berdasarkan kebutuhan nyata bisnis Anda.**

---

# 83. Trust Elements

Gunakan:

* Portfolio
* Client logos
* Testimonial
* Project count
* Experience
* Technology
* Process
* Contact information

Jangan menggunakan angka yang belum benar-benar dimiliki.

---

# 84. Performance Target

Target prototype:

```text
Fast loading
Minimal JS
Optimized images
Lazy loading
No unnecessary libraries
```

Target Lighthouse:

```text
Performance > 90
Accessibility > 90
Best Practices > 90
SEO > 90
```

Angka tersebut menjadi target, bukan jaminan.

---

# 85. Performance Rules

Gunakan:

```html
loading="lazy"
```

untuk image non-hero.

Compress:

```text
WebP
AVIF
```

jika memungkinkan.

Hindari:

* video background besar
* library JS berlebihan
* image 5–10MB
* font terlalu banyak

---

# 86. SEO Structure

Primary keyword:

```text
jasa pembuatan website
```

Secondary:

```text
jasa pembuatan aplikasi
jasa website profesional
jasa aplikasi custom
jasa web development
jasa software development
```

Long-tail:

```text
jasa pembuatan aplikasi custom untuk bisnis
jasa pembuatan sistem informasi
jasa pembuatan website perusahaan
jasa pembuatan aplikasi berbasis web
```

---

# 87. Metadata

Prototype harus menyediakan:

```html
<title>
Jasa Pembuatan Website & Aplikasi Custom | [Brand]
</title>

<meta
    name="description"
    content="..."
>

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

Open Graph:

```text
og:title
og:description
og:image
og:url
```

---

# 88. Security Prototype

Walaupun hanya frontend, tetap:

* Jangan hardcode API key
* Jangan menaruh secret
* Jangan mengirim data sensitif
* Validasi form
* Escape user-generated content

WhatsApp CTA tidak membutuhkan backend.

---

# 89. Browser Support

Target:

```text
Chrome
Edge
Firefox
Safari
```

Prioritas:

```text
Chrome / Edge
```

karena merupakan browser utama untuk target user desktop.

---

# 90. Accessibility

Support:

```text
Keyboard
Screen reader
Focus state
Reduced motion
```

Tambahkan:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

# 91. Prototype Acceptance Criteria

Prototype dianggap berhasil jika:

* [ ] Navbar responsive
* [ ] Mobile menu berjalan
* [ ] Hero tampil baik
* [ ] CTA bekerja
* [ ] WhatsApp link bekerja
* [ ] Services responsive
* [ ] Portfolio filter bekerja
* [ ] Portfolio modal bekerja
* [ ] FAQ accordion bekerja
* [ ] Scroll animation bekerja
* [ ] Responsive mobile
* [ ] Responsive tablet
* [ ] Responsive desktop
* [ ] Tidak ada horizontal overflow
* [ ] Image menggunakan alt
* [ ] SEO metadata tersedia
* [ ] Semua navigation anchor bekerja

---

# 92. Design Review Checklist

Sebelum desain dianggap final:

### Visual

* [ ] Warna sudah sesuai brand
* [ ] Typography konsisten
* [ ] Spacing konsisten
* [ ] Card design konsisten
* [ ] Button konsisten
* [ ] Icon konsisten

### UX

* [ ] Visitor memahami service
* [ ] CTA mudah ditemukan
* [ ] Portfolio mudah dilihat
* [ ] Navigation jelas
* [ ] Mobile nyaman

### Conversion

* [ ] Hero memiliki CTA
* [ ] Portfolio memiliki CTA
* [ ] Pricing memiliki CTA
* [ ] Final CTA jelas
* [ ] WhatsApp mudah diakses

---

# 93. Prototype Development Phase

## Phase 1 — Structure

Buat:

```text
index.html
```

Fokus:

* Semantic structure
* Section
* Content
* Navigation

---

## Phase 2 — Styling

Buat:

```text
css/style.css
```

Fokus:

* Color
* Typography
* Layout
* Responsive
* Components

---

## Phase 3 — Interaction

Buat:

```text
js/script.js
```

Fokus:

* Navbar
* Mobile menu
* FAQ
* Portfolio
* Modal
* Scroll reveal
* CTA

---

## Phase 4 — Content

Isi:

* Portfolio
* Services
* Testimonials
* Pricing
* FAQ

---

## Phase 5 — Review

Review:

```text
Desktop
Tablet
Mobile
```

---

# 94. Production Migration

Setelah prototype benar-benar fix, baru dilakukan migrasi.

Prototype:

```text
HTML
CSS
JavaScript
```

↓

Production:

```text
Framework / Backend
        ↓
Reusable Components
        ↓
Dynamic Data
        ↓
CMS
        ↓
Database
        ↓
SEO
        ↓
Analytics
        ↓
Deployment
```

Stack production **belum ditentukan** pada tahap ini.

Kemungkinan:

### Option 1

```text
Laravel
Blade
Vite
MySQL
```

### Option 2

```text
Next.js
React
```

### Option 3

```text
Laravel API
React
```

Pemilihan stack dilakukan setelah kebutuhan final diketahui.

---

# 95. Production Features — Future

Fitur berikut **tidak perlu dibuat pada prototype**:

* Admin dashboard
* CMS
* Authentication
* Database
* Dynamic portfolio
* Dynamic testimonial
* Dynamic pricing
* Contact management
* Lead management
* Email notification
* Analytics dashboard
* Client portal
* Project tracking

---

# 96. Future Enhancement

Setelah production:

### Lead Management

```text
Visitor
 ↓
Consultation
 ↓
Lead
 ↓
Follow Up
 ↓
Proposal
 ↓
Client
```

### Project Management

```text
Client
 ↓
Project
 ↓
Task
 ↓
Progress
 ↓
Delivery
```

### Client Portal

Client dapat:

* Melihat progress
* Melihat invoice
* Mengirim request
* Melihat project files
* Melihat milestone

---

# 97. Design System Summary

```text
Brand
│
├── Primary Blue
├── Dark Navy
├── White
└── Slate Gray

Typography
│
├── Inter
├── Large Heading
├── Medium Heading
└── Body

Components
│
├── Navbar
├── Button
├── Card
├── Badge
├── Modal
├── Accordion
├── Pricing Card
└── Portfolio Card

Interaction
│
├── Hover
├── Scroll Reveal
├── Modal
├── Accordion
├── Mobile Menu
└── Smooth Scroll
```

---

# 98. Overall Page Blueprint

```text
┌──────────────────────────────────────────────────────┐
│ NAVBAR                                               │
├──────────────────────────────────────────────────────┤
│                                                      │
│ HERO                              WEB MOCKUP         │
│                                                      │
├──────────────────────────────────────────────────────┤
│ TRUST / CLIENTS                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ PROBLEMS                                             │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ SERVICES                                             │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ WHY CHOOSE US                                        │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ PORTFOLIO                                            │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ TECHNOLOGY                                           │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ PROCESS                                              │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ PRICING                                              │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ TESTIMONIALS                                         │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ FAQ                                                  │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ FINAL CTA                                            │
│                                                      │
├──────────────────────────────────────────────────────┤
│ FOOTER                                               │
└──────────────────────────────────────────────────────┘
```

---

# 99. Final Design Goal

Ketika visitor masuk, dalam beberapa detik mereka harus mendapatkan tiga kesan:

### "Mereka profesional."

Dibuktikan melalui:

* Visual
* Typography
* Portfolio
* Testimonial

### "Mereka bisa membuat sistem yang saya butuhkan."

Dibuktikan melalui:

* Services
* Custom Application
* Technology
* Case Study
* Process

### "Saya bisa menghubungi mereka dengan mudah."

Dibuktikan melalui:

* WhatsApp
* CTA
* Consultation
* Contact

---

# 100. Final Principle

> **Don't sell websites. Sell solutions.**

Landing page ini tidak dibuat hanya untuk mengatakan:

> "Kami bisa membuat website."

Tetapi harus membuat visitor berpikir:

> **"Saya punya masalah di bisnis saya. Mereka bisa membantu membuat sistem untuk menyelesaikannya."**

---

# 101. Current Development Status

```text
┌─────────────────────────────────────────┐
│ DESIGN.md                               │
│                                         │
│ Status: Prototype Specification         │
│                                         │
│ Stack: HTML + CSS + JavaScript          │
│                                         │
│ Backend: None                            │
│ Database: None                           │
│ Framework: None                          │
│                                         │
│ Goal: Visual & UX Validation             │
└─────────────────────────────────────────┘
```

Setelah prototype disetujui:

```text
DESIGN.md
    ↓
Prototype
    ↓
Review
    ↓
Revision
    ↓
FINAL DESIGN
    ↓
Production Stack
    ↓
Development
    ↓
Deployment
```

**Prototype terlebih dahulu. Production kemudian.**
