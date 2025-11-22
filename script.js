document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Create a mobile menu container if it doesn't exist or toggle visibility
            let mobileMenu = document.querySelector('.mobile-menu-container');

            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu-container';
                mobileMenu.style.position = 'absolute';
                mobileMenu.style.top = '80px';
                mobileMenu.style.left = '0';
                mobileMenu.style.width = '100%';
                mobileMenu.style.background = 'white';
                mobileMenu.style.padding = '20px';
                mobileMenu.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                mobileMenu.style.zIndex = '999';
                mobileMenu.style.display = 'flex';
                mobileMenu.style.flexDirection = 'column';
                mobileMenu.style.gap = '15px';

                // Clone links and actions
                const linksClone = navLinks.cloneNode(true);
                linksClone.style.display = 'flex';
                linksClone.style.flexDirection = 'column';
                linksClone.style.gap = '15px';

                const actionsClone = navActions.cloneNode(true);
                actionsClone.style.display = 'flex';
                actionsClone.style.flexDirection = 'column';
                actionsClone.style.gap = '10px';

                mobileMenu.appendChild(linksClone);
                mobileMenu.appendChild(actionsClone);

                document.querySelector('header').appendChild(mobileMenu);
            } else {
                mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'flex' : 'none';
            }
        });
    }

    // Simple Form Submission Simulation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! This is a demo, so no data was sent, but your action is simulated.');
        });
    });

    // Search Button Handling
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            // In a real app, we would gather the input values and pass them as query parameters.
            // For this static demo, we just redirect to the jobs page.
            window.location.href = 'jobs.html';
        });
    }
});
