// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
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
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form validation
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Here you would typically send the data to a server
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        });
    }
    
    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Here you would typically send the data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Article filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articleItems = document.querySelectorAll('.article-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter articles
                articleItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Resource tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const resourceCategories = document.querySelectorAll('.resource-category');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active tab
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Show selected category
                resourceCategories.forEach(cat => {
                    if (cat.id === `${category}-resources`) {
                        cat.classList.add('active');
                    } else {
                        cat.classList.remove('active');
                    }
                });
            });
        });
    }
    
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const answer = this.nextElementSibling;
                
                // Toggle active class
                faqItem.classList.toggle('active');
                
                // Toggle answer visibility
                if (faqItem.classList.contains('active')) {
                    answer.classList.add('active');
                } else {
                    answer.classList.remove('active');
                }
                
                // Close other FAQ items
                faqQuestions.forEach(q => {
                    if (q !== this) {
                        const otherItem = q.parentElement;
                        const otherAnswer = q.nextElementSibling;
                        
                        otherItem.classList.remove('active');
                        otherAnswer.classList.remove('active');
                    }
                });
            });
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.post-card, .category-card, .article-item, .tutorial-card, .resource-card, .team-member, .value-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize elements for animation
    const animatedElements = document.querySelectorAll('.post-card, .category-card, .article-item, .tutorial-card, .resource-card, .team-member, .value-item');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    animateOnScroll();
    
    // Current year for copyright
    const yearElement = document.querySelector('.copyright p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
    }
});
