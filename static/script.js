document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Menu Logic (for all pages) ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Close menu on link click
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // --- Sliders with Pagination Dots (only for portfolio.html) ---
    const sliderGroups = document.querySelectorAll('.slider-container');
    if (sliderGroups.length > 0) {
        sliderGroups.forEach(slider => {
            const sliderItems = Array.from(slider.children);
            if (sliderItems.length === 0) return;

            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'flex justify-center items-center space-x-2 space-x-reverse mt-4';

            sliderItems.forEach((item, index) => {
                const dot = document.createElement('button');
                dot.className = 'pagination-dot w-2 h-2 rounded-full bg-gray-600 cursor-pointer';
                dot.setAttribute('aria-label', `رفتن به اسلاید ${index + 1}`);
                dotsContainer.appendChild(dot);

                dot.addEventListener('click', () => {
                    item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                });
            });

            slider.parentElement.appendChild(dotsContainer);
            const dots = Array.from(dotsContainer.children);

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const itemIndex = sliderItems.indexOf(entry.target);
                        dots.forEach((dot, index) => {
                            dot.classList.toggle('active', index === itemIndex);
                        });
                    }
                });
            }, { root: slider, threshold: 0.5 });
            sliderItems.forEach(item => observer.observe(item));
        });
    }
});
