(function () {
    const NAV_HTML = `
<nav id="main-nav" class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 transition-all duration-300">
    <div class="flex items-center gap-4">
        <a href="index.html" class="flex items-center gap-4 hover:opacity-90 transition-opacity">
            <img alt="Interspace Design Studio" class="h-10 md:h-12 w-auto max-w-[200px]" style="mix-blend-mode: screen;" src="assets/images/logo.jpeg">
        </a>
    </div>
    <div class="hidden md:flex gap-12 items-center">
        <a class="nav-link font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 relative" href="index.html" data-page="index.html">HOME</a>
        <a class="nav-link font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 relative" href="projects.html" data-page="projects.html">WORK</a>
        <a class="nav-link font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 relative" href="about.html" data-page="about.html">ABOUT US</a>
        <a class="nav-link font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 relative" href="contact.html" data-page="contact.html">CONTACT</a>
    </div>
    <div class="flex items-center gap-4">
        <a href="contact.html" class="hidden md:block font-label-caps text-label-caps px-8 py-3 bg-primary text-on-primary transition-all duration-300 hover:opacity-80">INQUIRY</a>
        <button id="hamburger" class="md:hidden text-on-surface p-2" aria-label="Open menu">
            <span class="material-symbols-outlined text-2xl">menu</span>
        </button>
    </div>
</nav>
<div id="mobile-menu" role="dialog" aria-label="Navigation menu">
    <button id="mobile-close" class="absolute top-6 right-6 text-on-surface p-2" aria-label="Close menu">
        <span class="material-symbols-outlined text-2xl">close</span>
    </button>
    <a class="mobile-nav-link font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors" href="index.html" data-page="index.html">HOME</a>
    <a class="mobile-nav-link font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors" href="projects.html" data-page="projects.html">WORK</a>
    <a class="mobile-nav-link font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors" href="about.html" data-page="about.html">ABOUT US</a>
    <a class="mobile-nav-link font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors" href="contact.html" data-page="contact.html">CONTACT</a>
    <a href="contact.html" class="mt-8 font-label-caps text-label-caps px-10 py-4 bg-primary text-on-primary">INQUIRY</a>
</div>`;

    const FOOTER_HTML = `
<footer class="w-full py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/20">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        <div class="md:col-span-5 mb-12 md:mb-0">
            <a href="index.html" class="block mb-8 hover:opacity-90 transition-opacity">
                <img alt="Interspace Design Studio" class="h-12 w-auto max-w-[220px]" style="mix-blend-mode: screen;" src="assets/images/logo.jpeg">
            </a>
            <p class="font-body-md text-body-md text-on-surface-variant max-w-sm">Crafting enduring environments through architectural precision and minimalist luxury since 2018.</p>
        </div>
        <div class="md:col-span-3 md:col-start-7">
            <span class="font-label-caps text-label-caps text-primary mb-6 block">NAVIGATION</span>
            <div class="flex flex-col gap-4">
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="index.html">HOME</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="projects.html">WORK</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="about.html">ABOUT US</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="contact.html">CONTACT</a>
            </div>
        </div>
        <div class="md:col-span-2">
            <span class="font-label-caps text-label-caps text-primary mb-6 block">SOCIAL</span>
            <div class="flex flex-col gap-4">
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">INSTAGRAM</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">LINKEDIN</a>
                <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">BEHANCE</a>
            </div>
        </div>
    </div>
    <div class="mt-24 pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="font-body-md text-body-md text-on-surface-variant">© 2024 INTERSPACE DESIGN STUDIO. ARCHITECTURAL EXCELLENCE.</p>
        <div class="flex gap-8">
            <a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">PRIVACY</a>
            <a class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">TERMS</a>
        </div>
    </div>
</footer>`;

    function injectNav() {
        const placeholder = document.getElementById('nav-placeholder');
        if (placeholder) placeholder.innerHTML = NAV_HTML;

        // Active state
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function (link) {
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('text-primary');
                link.classList.remove('text-on-surface-variant', 'text-on-surface');
                if (link.classList.contains('nav-link')) {
                    link.style.borderBottom = '1px solid #f2ca50';
                    link.style.paddingBottom = '2px';
                }
            }
        });

        // Nav shrink on scroll
        window.addEventListener('scroll', function () {
            const nav = document.getElementById('main-nav');
            if (!nav) return;
            if (window.scrollY > 50) {
                nav.classList.add('py-4');
                nav.classList.remove('py-6');
            } else {
                nav.classList.add('py-6');
                nav.classList.remove('py-4');
            }
        });

        // Mobile menu
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileClose = document.getElementById('mobile-close');
        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', function () {
                mobileMenu.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
            mobileClose.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        }
    }

    function injectFooter() {
        const placeholder = document.getElementById('footer-placeholder');
        if (placeholder) placeholder.innerHTML = FOOTER_HTML;
    }

    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal-up');
        if (!reveals.length) return;
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        reveals.forEach(function (el) {
            el.classList.remove('active');
            observer.observe(el);
        });
    }

    function initMarquee() {
        const marquee = document.querySelector('.animate-marquee');
        if (!marquee) return;
        marquee.innerHTML += marquee.innerHTML;
    }

    function initProjectFilter() {
        const filterBtns = document.querySelectorAll('[data-filter]');
        const cards = document.querySelectorAll('[data-category]');
        if (!filterBtns.length) return;
        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const filter = btn.getAttribute('data-filter');
                filterBtns.forEach(function (b) {
                    b.classList.remove('text-primary', 'border-b', 'border-primary');
                    b.classList.add('text-on-surface-variant');
                });
                btn.classList.add('text-primary', 'border-b', 'border-primary');
                btn.classList.remove('text-on-surface-variant');
                cards.forEach(function (card) {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        injectNav();
        injectFooter();
        initScrollReveal();
        initMarquee();
        initProjectFilter();
    });
})();
