document.addEventListener('DOMContentLoaded', function() {
    // Cookie Consent
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    
    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Show cookie consent after a short delay
        setTimeout(() => {
            cookieConsent.style.display = 'block';
        }, 1000);
    }
    
    // Handle cookie acceptance
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.style.display = 'none';
        });
    }
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (nav.style.display === 'block') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'block';
            }
        });
    }
    
    // Menu Categories
    const menuCategories = document.querySelectorAll('.menu-category');
    
    if (menuCategories.length > 0) {
        menuCategories.forEach(category => {
            category.addEventListener('click', function() {
                // Remove active class from all categories
                menuCategories.forEach(cat => cat.classList.remove('active'));
                
                // Add active class to clicked category
                this.classList.add('active');
                
                // Here you would typically show/hide menu items based on category
                // For this example, we're just showing the coffee category
                const categoryName = this.getAttribute('data-category');
                console.log(`Category ${categoryName} selected`);
                
                // You would implement filtering logic here
                // For example:
                // document.querySelectorAll('.menu-items').forEach(item => item.style.display = 'none');
                // document.getElementById(categoryName).style.display = 'grid';
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submission is disabled in this demo. In a real application, this would send your message.');
            this.reset();
        });
    }
    
    // Scroll animation for elements
    function revealOnScroll() {
        const elements = document.querySelectorAll('.section-header, .about-content, .menu-item, .gallery-item, .contact-content');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    document.querySelectorAll('.section-header, .about-content, .menu-item, .gallery-item, .contact-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run on load and scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});