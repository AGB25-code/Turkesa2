// Language switching functionality
(function() {
    'use strict';

    // Get current language from localStorage or default to Portuguese
    let currentLanguage = localStorage.getItem('turkesa-language') || 'pt';

    // Initialize language on page load
    document.addEventListener('DOMContentLoaded', function() {
        initializeLanguage();
        setupLanguageSelector();
    });

    function initializeLanguage() {
        // Set the current language
        setLanguage(currentLanguage);

        // Update active state in dropdown
        updateActiveLanguage();
    }

    function setupLanguageSelector() {
        const languageOptions = document.querySelectorAll('.language-option-footer');

        if (!languageOptions.length) return;

        // Handle language selection
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                setLanguage(lang);
                localStorage.setItem('turkesa-language', lang);
                currentLanguage = lang;
                updateActiveLanguage();
            });
        });
    }

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error('Language not found:', lang);
            return;
        }

        const trans = translations[lang];

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (trans[key]) {
                // Check if it's an input placeholder
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', trans[key]);
                } else {
                    element.textContent = trans[key];
                }
            }
        });

        // Update all elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (trans[key]) {
                element.setAttribute('placeholder', trans[key]);
            }
        });

        // Update document language attribute
        document.documentElement.setAttribute('lang', lang);
    }

    function updateActiveLanguage() {
        const languageOptions = document.querySelectorAll('.language-option-footer');
        languageOptions.forEach(option => {
            if (option.getAttribute('data-lang') === currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    // Export for use in other scripts if needed
    window.TurkesaLanguage = {
        getCurrentLanguage: () => currentLanguage,
        setLanguage: setLanguage
    };
})();
