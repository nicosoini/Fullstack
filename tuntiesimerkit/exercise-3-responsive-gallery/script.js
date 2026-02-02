/* =================================
   Exercise 3: Gallery Filter Script
   ================================= */

// Get all filter buttons and gallery items
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Add click event listeners to filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filter gallery items
        galleryItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'block';
            } else {
                const itemCategory = item.getAttribute('data-category');
                if (itemCategory === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});
