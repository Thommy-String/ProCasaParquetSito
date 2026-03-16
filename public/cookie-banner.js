(function() {
    'use strict';

    var COOKIE_NAME = 'gdpr_consent';
    var COOKIE_VALUE_ACCEPTED = 'accepted';
    var COOKIE_VALUE_DECLINED = 'declined';
    var COOKIE_EXPIRATION_DAYS = 365;

    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Lax';
    }

    function getCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
        }
        return null;
    }

    function hideBanner() {
        var banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.add('hidden');
            banner.style.display = 'none';
        }
    }

    function showBanner() {
        var banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.remove('hidden');
            banner.style.display = '';
        }
    }

    var handled = false;

    function handleAccept(e) {
        if (handled) return;
        handled = true;
        if (e) { e.preventDefault(); e.stopPropagation(); }
        setCookie(COOKIE_NAME, COOKIE_VALUE_ACCEPTED, COOKIE_EXPIRATION_DAYS);
        hideBanner();
        if (typeof initializeGtagWithConsent === 'function') {
            initializeGtagWithConsent();
        }
    }

    function handleDecline(e) {
        if (handled) return;
        handled = true;
        if (e) { e.preventDefault(); e.stopPropagation(); }
        setCookie(COOKIE_NAME, COOKIE_VALUE_DECLINED, COOKIE_EXPIRATION_DAYS);
        hideBanner();
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
            });
        }
    }

    function init() {
        var consent = getCookie(COOKIE_NAME);

        if (consent) {
            hideBanner();
            if (consent === COOKIE_VALUE_ACCEPTED && typeof initializeGtagWithConsent === 'function') {
                initializeGtagWithConsent();
            }
            return;
        }

        // Nessuna scelta: mostra il banner
        showBanner();

        // Usa event delegation sul banner per massima affidabilità
        var banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.addEventListener('click', function(e) {
                var target = e.target;
                if (target.id === 'accept-cookies' || target.closest('#accept-cookies')) {
                    handleAccept(e);
                } else if (target.id === 'decline-cookies' || target.closest('#decline-cookies')) {
                    handleDecline(e);
                }
            });
            // Fallback touchend per mobile (evita il 300ms tap delay)
            banner.addEventListener('touchend', function(e) {
                var target = e.target;
                if (target.id === 'accept-cookies' || target.closest('#accept-cookies')) {
                    e.preventDefault();
                    handleAccept(e);
                } else if (target.id === 'decline-cookies' || target.closest('#decline-cookies')) {
                    e.preventDefault();
                    handleDecline(e);
                }
            }, { passive: false });
        }
    }

    // Esegui init: se il DOM è già pronto, eseguilo subito
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
