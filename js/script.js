/* ============================================================
   Garudev - Landing Page JS
   Interactions:
   - Navbar scrolled state (IntersectionObserver sentinel)
   - Mobile menu
   - Portfolio filter + modal
   - FAQ accordion
   - Scroll reveal (IntersectionObserver)
   - Mobile sticky CTA (IntersectionObserver)
   - Stats counter
   - Lucide icons init
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initLucide();
    initNavbar();
    initMobileMenu();
    initPortfolio();
    initFaq();
    initReveal();
    initStickyCta();
});

/* ---------- Lucide icons ---------- */
function initLucide() {
    if (window.lucide) {
        lucide.createIcons();
    }
}

/* ---------- Navbar: scrolled state via sentinel ---------- */
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const sentinel = document.getElementById("page-top");
    if (!navbar || !sentinel || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            navbar.classList.toggle("is-scrolled", !entry.isIntersecting);
        });
    }, { threshold: 0 });

    observer.observe(sentinel);
}

/* ---------- Mobile menu ---------- */
function initMobileMenu() {
    const toggle = document.getElementById("navbar-toggle");
    const nav = document.getElementById("navbar-nav");
    if (!toggle || !nav) return;

    const closeMenu = () => {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Buka menu");
    };

    const openMenu = () => {
        nav.classList.add("is-open");
        toggle.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Tutup menu");
    };

    toggle.addEventListener("click", () => {
        if (nav.classList.contains("is-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    nav.addEventListener("click", (event) => {
        if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}

/* ---------- Portfolio data ---------- */
const portfolioData = [
    {
        title: "SiPelajar",
        category: "custom-app",
        categoryLabel: "Custom Application",
        description:
            "School management system untuk mengelola data siswa, guru, jadwal, dan keuangan sekolah dalam satu platform.",
        features: ["Manajemen siswa dan guru", "Jadwal pelajaran", "Laporan keuangan"],
        technologies: ["Laravel", "MySQL", "Bootstrap"],
        image: "https://picsum.photos/seed/garudev-sipelajar/1200/800",
    },
    {
        title: "TokoMart",
        category: "ecommerce",
        categoryLabel: "E-Commerce",
        description:
            "Online store dengan katalog produk, keranjang, checkout, dan integrasi pembayaran.",
        features: ["Katalog produk", "Checkout dan payment", "Manajemen order"],
        technologies: ["Laravel", "MySQL", "JavaScript"],
        image: "https://picsum.photos/seed/garudev-tokomart/1200/800",
    },
    {
        title: "Landing Page Campaign",
        category: "landing-page",
        categoryLabel: "Landing Page",
        description:
            "Halaman landing conversion-oriented untuk campaign produk dengan form lead dan integrasi WhatsApp.",
        features: ["Hero section", "Form lead", "Integrasi WhatsApp"],
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "https://picsum.photos/seed/garudev-campaign/1200/800",
    },
    {
        title: "Admin Dashboard",
        category: "dashboard",
        categoryLabel: "Dashboard",
        description:
            "Admin panel untuk memantau performa bisnis dengan visualisasi data dan laporan otomatis.",
        features: ["Statistik real-time", "Manajemen data", "Laporan otomatis"],
        technologies: ["React", "Laravel", "MySQL"],
        image: "https://picsum.photos/seed/garudev-dashboard/1200/800",
    },
    {
        title: "Website Perusahaan",
        category: "website",
        categoryLabel: "Website",
        description:
            "Company profile modern untuk meningkatkan kredibilitas dan memperkenalkan layanan perusahaan.",
        features: ["Company profile", "Halaman layanan", "Blog"],
        technologies: ["Laravel", "MySQL", "Bootstrap"],
        image: "https://picsum.photos/seed/garudev-company/1200/800",
    },
    {
        title: "Sistem Rental Kendaraan",
        category: "custom-app",
        categoryLabel: "Custom Application",
        description:
            "Sistem manajemen rental kendaraan dengan booking online, pembayaran, dan laporan pendapatan.",
        features: ["Manajemen unit", "Booking online", "Laporan pendapatan"],
        technologies: ["Laravel", "MySQL", "JavaScript"],
        image: "https://picsum.photos/seed/garudev-rental/1200/800",
    },
];

/* ---------- Portfolio: render + filter + modal ---------- */
function initPortfolio() {
    const grid = document.getElementById("portfolio-grid");
    const modal = document.getElementById("portfolio-modal");
    const modalBody = document.getElementById("portfolio-modal-body");
    const filters = document.querySelectorAll(".portfolio__filter");
    if (!grid) return;

    const whatsapp = (text) =>
        "https://wa.me/6281234567890?text=" + encodeURIComponent(text);

    const renderItem = (item, index) => {
        const featured = index === 0;
        const tags = item.technologies.map((t) => `<span>${t}</span>`).join("");

        const media = `
            <a href="#" class="portfolio-card__media" data-open aria-label="Lihat detail ${item.title}">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <span class="portfolio-card__overlay"><i data-lucide="arrow-up-right"></i></span>
            </a>
        `;

        const body = `
            <div class="portfolio-card__info">
                <span class="portfolio-card__cat">${item.categoryLabel}</span>
                <h3 class="portfolio-card__title">${item.title}</h3>
                ${featured ? `<p class="portfolio-card__desc">${item.description}</p>` : ""}
                <div class="portfolio-card__tags">${tags}</div>
                <button type="button" class="portfolio-card__link" data-open>
                    Lihat detail <i data-lucide="arrow-right"></i>
                </button>
            </div>
        `;

        const card = document.createElement("article");
        card.className = featured ? "portfolio-card portfolio-card--featured" : "portfolio-card";
        card.dataset.category = item.category;
        card.innerHTML = featured ? media + body : media + body;

        card.querySelectorAll("[data-open]").forEach((el) => {
            el.addEventListener("click", (event) => {
                event.preventDefault();
                openModal(item);
            });
        });

        return card;
    };

    const renderGrid = (category) => {
        grid.innerHTML = "";
        const items = category === "all"
            ? portfolioData
            : portfolioData.filter((item) => item.category === category);

        items.forEach((item, index) => {
            grid.appendChild(renderItem(item, index));
        });
        initLucide();
    };

    filters.forEach((filter) => {
        filter.addEventListener("click", () => {
            filters.forEach((f) => f.classList.remove("is-active"));
            filter.classList.add("is-active");
            renderGrid(filter.dataset.filter);
        });
    });

    const openModal = (item) => {
        if (!modal || !modalBody) return;

        const features = item.features.map((f) => `<li>${f}</li>`).join("");
        const tags = item.technologies.map((t) => `<span>${t}</span>`).join("");

        modalBody.innerHTML = `
            <img class="modal-project__image" src="${item.image}" alt="${item.title}" loading="lazy">
            <h3 class="modal-project__title">${item.title}</h3>
            <p class="modal-project__cat">${item.categoryLabel}</p>
            <p class="modal-project__desc">${item.description}</p>
            <h4 class="modal-project__heading">Fitur utama</h4>
            <ul class="modal-project__features">${features}</ul>
            <h4 class="modal-project__heading">Teknologi</h4>
            <div class="modal-project__tags">${tags}</div>
            <a class="btn btn--primary" href="${whatsapp("Halo, saya ingin konsultasi mengenai project " + item.title + ".")}" target="_blank" rel="noopener">
                Konsultasi Gratis <i data-lucide="arrow-right"></i>
            </a>
        `;

        initLucide();
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        if (!modal) return;
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    };

    if (modal) {
        modal.querySelectorAll("[data-modal-close]").forEach((el) => {
            el.addEventListener("click", closeModal);
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeModal();
        });
    }

    renderGrid("all");
}

/* ---------- FAQ accordion ---------- */
function initFaq() {
    const items = document.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach((item) => {
        const question = item.querySelector(".faq-item__question");
        const answer = item.querySelector(".faq-item__answer");
        if (!question || !answer) return;

        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");

            items.forEach((other) => {
                const otherAnswer = other.querySelector(".faq-item__answer");
                other.classList.remove("is-open");
                otherAnswer.style.maxHeight = null;
                other.querySelector(".faq-item__question").setAttribute("aria-expanded", "false");
            });

            if (!isOpen) {
                item.classList.add("is-open");
                answer.style.maxHeight = answer.scrollHeight + "px";
                question.setAttribute("aria-expanded", "true");
            }
        });
    });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("is-revealed"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-revealed");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
}

/* ---------- Mobile sticky CTA (hero + footer sentinels) ---------- */
function initStickyCta() {
    const cta = document.querySelector(".sticky-cta");
    if (!cta || window.matchMedia("(min-width: 768px)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const show = () => cta.classList.add("is-visible");
    const hide = () => cta.classList.remove("is-visible");

    const heroObserver = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
            if (entry.isIntersecting) hide();
            else show();
        }),
        { threshold: 0 }
    );

    const hero = document.getElementById("hero");
    const footer = document.querySelector(".footer");

    if (hero) heroObserver.observe(hero);

    if (footer) {
        const footerObserver = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting) hide();
            }),
            { threshold: 0 }
        );
        footerObserver.observe(footer);
    }
}
