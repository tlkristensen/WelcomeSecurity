var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

// Only add event listener if elements exist
if (menuTrigger && menuContainer && body) {
    menuTrigger.onclick = function() {
        menuContainer.classList.toggle('open');
        menuTrigger.classList.toggle('is-active')
        body.classList.toggle('lock-scroll')
    }
}

// WelcomeSecurity Shrinking Header Functionality
// This creates the effect where header starts large and shrinks on scroll
(function() {
    'use strict'; // Use strict mode to catch errors early
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initShrinkingHeader);
    } else {
        initShrinkingHeader();
    }
    
    function initShrinkingHeader() {
        var header = document.querySelector('.header');
        var body = document.querySelector('body');
        var scrollThreshold = 100; // Pixels scrolled before header shrinks
        var isScrolled = false;
        
        // Exit early if required elements don't exist
        if (!header || !body) {
            console.warn('WelcomeSecurity: Header or body element not found, shrinking header disabled');
            return;
        }
    
        // Throttle function for better performance
        function throttle(func, limit) {
            var inThrottle;
            return function() {
                var args = arguments;
                var context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(function() { inThrottle = false; }, limit);
                }
            };
        }
        
        // Handle scroll events
        function handleScroll() {
            try {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > scrollThreshold && !isScrolled) {
                    // Add shrunk classes
                    header.classList.add('header-shrunk');
                    body.classList.add('header-shrunk-body');
                    isScrolled = true;
                } else if (scrollTop <= scrollThreshold && isScrolled) {
                    // Remove shrunk classes
                    header.classList.remove('header-shrunk');
                    body.classList.remove('header-shrunk-body');
                    isScrolled = false;
                }
            } catch (error) {
                console.error('WelcomeSecurity: Error in handleScroll:', error);
            }
        }
    
        // Add scroll listener with throttling for performance
        try {
            window.addEventListener('scroll', throttle(handleScroll, 16)); // ~60fps
            
            // Initial check in case page loads scrolled
            handleScroll();
        } catch (error) {
            console.error('WelcomeSecurity: Error setting up scroll listener:', error);
        }
    }
})();
