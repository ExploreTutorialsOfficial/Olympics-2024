document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animated-section');
    const athleteCards = document.querySelectorAll('.athlete-card');
    
    const onScroll = () => {
        const triggerBottom = window.innerHeight * 0.75;
        
        // Handle sections animation
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
        
        // Handle athlete cards animation
        athleteCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    };
    
    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check
    
    // Initial check to handle the case when the user lands on a section that should be visible on page load
    document.addEventListener('DOMContentLoaded', onScroll);
});
let text = document.getElementById('text');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.marginTop = value * -1.5+'px';

    img1.style.top = value * 1.75+'px';
    img2.style.top = value * 0.5+'px';
    img3.style.top = value * 0.25+'px';
})


    const seeMoreBtn = document.getElementById('see-more-btn');
    const hiddenRows = document.querySelectorAll('.hidden-row');
    let isExpanded = false;

    seeMoreBtn.addEventListener('click', function() {
        hiddenRows.forEach(row => {
            if (isExpanded) {
                row.style.display = 'none'; // Hide rows
                seeMoreBtn.textContent = 'See More'; // Change button text
                seeMoreBtn.innerHTML = 'See More <span class="arrow">▼</span>';
            } else {
                row.style.display = 'table-row'; // Show rows
                seeMoreBtn.textContent = 'See Less'; // Change button text
                seeMoreBtn.innerHTML = 'See Less <span class="arrow">▲</span>';
            }
        });
        isExpanded = !isExpanded;

        // Toggle the arrow direction
        seeMoreBtn.classList.toggle('expand');
    });


