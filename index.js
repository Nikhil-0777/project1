  // Smooth scroll effect
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download CV function
function downloadCV() {
    const link = document.createElement('a');
    link.href = '"C:\Users\Sudarshan Systems\Downloads\Resume.pdf"'; // Replace with the actual path to your CV
    link.download = 'c:\Users\Sudarshan Systems\Downloads\Resume.pdf ';
    link.click();
}

// View More Projects function
let viewMoreClickCount = 0;
function viewMoreProjects() {
    const projectsSection = document.getElementById('project-cards');

    for (let i = 4; i <= 6; i++) {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.onclick = function () {
            window.open(`https://github.com/Nikhil-0777/project${i}`, '_blank');
        };

        const projectImg = document.createElement('img');
        projectImg.src = `project${i}.jpg`;
        projectImg.alt = `Project ${i}`;

        projectCard.appendChild(projectImg);
        projectsSection.appendChild(projectCard);
    }

    viewMoreClickCount++;
    if (viewMoreClickCount === 2) {
        document.querySelector('.btn-view-more').style.display = 'none';
    }
}