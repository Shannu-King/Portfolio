// Main functionality
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Basic form validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                contactForm.classList.add('form-error');
                setTimeout(() => contactForm.classList.remove('form-error'), 500);
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission (replace with actual API call)
            showNotification('Sending message...', 'info');

            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            }, 2000);
        });
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type) {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${getNotificationIcon(type)}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            min-width: 300px;
            max-width: 500px;
            padding: 0;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            animation: slideInFromRight 0.3s ease-out;
        `;

        // Add notification to page
        document.body.appendChild(notification);

        // Close notification on click
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutToRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove notification after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutToRight 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    function getNotificationIcon(type) {
        switch (type) {
            case 'success': return '✓';
            case 'error': return '✕';
            case 'info': return 'ℹ';
            default: return 'ℹ';
        }
    }

    // Add notification styles to head
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification.success { background: #10b981; color: white; }
        .notification.error { background: #ef4444; color: white; }
        .notification.info { background: #3b82f6; color: white; }

        .notification-content {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            gap: 15px;
        }

        .notification-icon {
            font-size: 1.2rem;
            font-weight: bold;
        }

        .notification-message {
            flex: 1;
            font-weight: 500;
        }

        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            opacity: 0.8;
            transition: opacity 0.2s;
        }

        .notification-close:hover {
            opacity: 1;
        }

        @keyframes slideInFromRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideOutToRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(notificationStyles);

    // Theme toggle functionality
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '☀️';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #60a5fa;
        color: #0f172a;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(96, 165, 250, 0.3);
        transition: all 0.3s ease;
    `;

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        this.innerHTML = document.body.classList.contains('light-theme') ? '🌙' : '☀️';

        // Apply light theme styles
        if (document.body.classList.contains('light-theme')) {
            applyLightTheme();
        } else {
            removeLightTheme();
        }
    });

    document.body.appendChild(themeToggle);

    // Light theme functions
    function applyLightTheme() {
        const lightThemeStyles = `
            body { background: #ffffff; color: #1f2937; }
            .navbar { background: rgba(255, 255, 255, 0.95); }
            .about, .skills, .education { background: #f8fafc; }
            .experience, .projects, .contact { background: #ffffff; }
            .timeline-content, .education-content { background: #f8fafc; }
            .project-card { background: #ffffff; }
            .skill-item { background: #ffffff; }
            .contact-form { background: #f8fafc; }
            .footer { background: #1f2937; color: #ffffff; }
            .section-title { color: #1f2937; }
            .nav-link { color: #666; }
            .nav-link.active, .nav-link:hover { color: #2563eb; }
            .nav-logo { color: #2563eb; }
            .about-text p { color: #4b5563; }
            .stat h3 { color: #2563eb; }
            .strengths-list li { color: #4b5563; border-bottom-color: #e5e7eb; }
            .timeline-content { background: #f8fafc; }
            .timeline-header h3 { color: #1f2937; }
            .timeline-company h4 { color: #2563eb; }
            .timeline-date, .timeline-company p { color: #6b7280; }
            .skill-category h3 { color: #1f2937; }
            .skill-item { background: #ffffff; color: #374151; border: 1px solid #e5e7eb; }
            .project-content h3 { color: #1f2937; }
            .project-content p { color: #6b7280; }
            .education-content { background: #ffffff; }
            .education-content h3 { color: #1f2937; }
            .education-content h4 { color: #7c3aed; }
            .education-date, .education-location { color: #6b7280; }
            .contact-details h4 { color: #1f2937; }
            .contact-details p, .contact-details a { color: #6b7280; }
            .contact-form { background: #f8fafc; }
            .form-group input, .form-group textarea { background: #ffffff; border-color: #e5e7eb; color: #1f2937; }
            .form-group label { color: #6b7280; }
            .footer-links a { color: #9ca3af; }
            .footer-links a:hover { color: #ffffff; }
        `;

        const lightThemeStyle = document.createElement('style');
        lightThemeStyle.id = 'light-theme-styles';
        lightThemeStyle.textContent = lightThemeStyles;
        document.head.appendChild(lightThemeStyle);
    }

    function removeLightTheme() {
        const lightThemeStyle = document.getElementById('light-theme-styles');
        if (lightThemeStyle) {
            lightThemeStyle.remove();
        }
    }

    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #2563eb;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
    `;

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(scrollTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    // Preloader
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    `;

    preloader.innerHTML = `
        <div style="
            text-align: center;
            color: #2563eb;
        ">
            <div style="
                width: 50px;
                height: 50px;
                border: 4px solid #e5e7eb;
                border-top: 4px solid #2563eb;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            "></div>
            <h3>Loading Portfolio...</h3>
        </div>
    `;

    document.body.appendChild(preloader);

    // Hide preloader after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => preloader.remove(), 500);
        }, 1000);
    });

    // Add some interactive easter eggs
    let clickCount = 0;
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 5) {
                showNotification('🎉 You found the easter egg! ST stands for Shanmukha Tharun', 'success');
                logo.classList.add('easter-egg');
                setTimeout(() => logo.classList.remove('easter-egg'), 3000);
                clickCount = 0;
            }
        });
    }

    // Performance optimization - lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to focus on search (if you add search functionality later)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            // Add search functionality here if needed
        }

        // Home key to scroll to top
        if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // End key to scroll to bottom
        if (e.key === 'End') {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    });

    // Add performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
            }, 0);
        });
    }

    // Add accessibility improvements
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #2563eb';
        });

        element.addEventListener('blur', function() {
            this.style.outline = '';
        });
    });
});
