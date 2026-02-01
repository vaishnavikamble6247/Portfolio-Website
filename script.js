
        // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');

            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(item => {
                item.classList.remove('active');
            });
            link.classList.add('active');
        });
        });

    // Header scroll effect
    const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
        header.classList.add('scrolled');
            } else {
        header.classList.remove('scrolled');
            }

    // Back to top button visibility
    const backToTop = document.getElementById('backToTop');
            if (window.scrollY > 500) {
        backToTop.classList.add('visible');
            } else {
        backToTop.classList.remove('visible');
            }
        });

    // Scroll animation
    const animateElements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
        }, {
        threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
        });

        animateElements.forEach(el => observer.observe(el));

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // GitHub API Integration - Fetch all repositories
    document.addEventListener('DOMContentLoaded', function () {
            const githubUsername = 'vaishnavikamble6247';
    const githubProjectsContainer = document.getElementById('githubProjectsContainer');
    const githubProjectsLoader = document.getElementById('githubProjects');

    // Function to get a relevant image based on project description
    function getRelevantImage(repo) {
                const repoName = repo.name.toLowerCase();
    const description = (repo.description || '').toLowerCase();

    // Keyword to image mapping
    const keywordImages = {
        // Web Development
        'web': 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'website': 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'react': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'node': 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'javascript': 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'html': 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'css': 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',

    // Machine Learning & AI
    'machine': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'learning': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'ai': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'neural': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'tensorflow': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'keras': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'pytorch': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',

    // Data Science
    'data': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'analysis': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'analytics': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'visualization': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'pandas': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'numpy': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',

    // Mobile Apps
    'mobile': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'app': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'android': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'ios': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'flutter': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'react native': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',

    // Database
    'database': 'https://images.unsplash.com/photo-1546054459-22626f1d8ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'sql': 'https://images.unsplash.com/photo-1546054459-22626f1d8ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'mysql': 'https://images.unsplash.com/photo-1546054459-22626f1d8ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'mongodb': 'https://images.unsplash.com/photo-1546054459-22626f1d8ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'postgresql': 'https://images.unsplash.com/photo-1546054459-22626f1d8ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',

    // Cloud & DevOps
    'cloud': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'aws': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'azure': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'docker': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'kubernetes': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'devops': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',

    // Game Development
    'game': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'unity': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'unreal': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    '3d': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',

    // Default categories
    'java': 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'python': 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'c++': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'c#': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'api': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'library': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'tool': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'utility': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                };

    // Check for keywords in repo name and description
    for (const [keyword, imageUrl] of Object.entries(keywordImages)) {
                    if (repoName.includes(keyword) || description.includes(keyword)) {
                        return imageUrl;
                    }
                }

    // Default image based on primary language
    const languageImages = {
        'JavaScript': 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'Python': 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'Java': 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'C++': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'C': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'TypeScript': 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'HTML': 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'CSS': 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
                };

    if (repo.language && languageImages[repo.language]) {
                    return languageImages[repo.language];
                }

    // Final fallback - generic code image
    const fallbackImages = [
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1168&q=80'
    ];

                // Use repo name to get consistent image for same repo
                const hash = repoName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return fallbackImages[hash % fallbackImages.length];
            }

    // Fetch GitHub repositories
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`)
                .then(response => response.json())
                .then(data => {
        // Hide loading spinner
        githubProjectsLoader.style.display = 'none';

    // Filter out the featured projects (already shown)
    const featuredProjectNames = [
    'Online Appointment Scheduler System',
    'Plant Disease Detection Tool',
    'Mealkit - Online Mess & Tiffin Ordering Platform'
    ];

                    // Filter repositories
                    const filteredRepos = data.filter(repo =>
    !repo.fork &&
                        !featuredProjectNames.some(name =>
    repo.name.toLowerCase().includes(name.toLowerCase().split(' ')[0]) ||
    repo.description?.toLowerCase().includes(name.toLowerCase().split(' ')[0])
    )
    );

                    // Display GitHub projects
                    if (filteredRepos.length > 0) {
        filteredRepos.forEach(repo => {
            const projectCard = createProjectCard(repo);
            githubProjectsContainer.appendChild(projectCard);

            // Add animation observer
            observer.observe(projectCard);
        });
                    } else {
        githubProjectsContainer.innerHTML = `
                            <div style="text-align: center; grid-column: 1 / -1; padding: 40px;">
                                <h3>No additional GitHub projects found</h3>
                                <p>Check back later for more projects!</p>
                            </div>
                        `;
                    }
                })
                .catch(error => {
        console.error('Error fetching GitHub data:', error);
    githubProjectsLoader.innerHTML = `
    <p style="color: #ff6b8b;">Unable to load GitHub projects. <a href="https://github.com/vaishnavikamble6247" target="_blank">Visit GitHub directly</a></p>
    `;
                });

    // Function to create a project card from GitHub data
    function createProjectCard(repo) {
                // Determine primary language color
                const languageColors = {
        'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Java': '#b07219',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'C++': '#f34b7d',
    'C': '#555555',
    'TypeScript': '#2b7489',
    'Vue': '#2c3e50',
    'PHP': '#4F5D95'
                };

    const languageColor = languageColors[repo.language] || '#8a2be2';

    // Format description
    const description = repo.description || 'A project hosted on GitHub';

    // Create tech tags from language and topics
    const techTags = [];
    if (repo.language) {
        techTags.push(repo.language);
                }

    // Add up to 5 topics
    if (repo.topics) {
        repo.topics.slice(0, 5).forEach(topic => {
            techTags.push(topic);
        });
                }

    // Get relevant image for the project
    const projectImage = getRelevantImage(repo);

    // Format date
    const updatedDate = new Date(repo.updated_at);
    const formattedDate = updatedDate.toLocaleDateString('en-US', {
        year: 'numeric',
    month: 'short',
    day: 'numeric'
                });

    // Create project card
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card animate-on-scroll';
    projectCard.innerHTML = `
    <div class="project-image">
        <img src="${projectImage}" alt="${repo.name}" loading="lazy">
    </div>
    <div class="project-content">
        <h3 class="project-title">${repo.name}</h3>
        <p class="project-description">${description}</p>
        <div class="project-tech">
            ${techTags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-meta">
            <div class="project-links">
                <a href="${repo.html_url}" class="project-link" target="_blank" title="View on GitHub">
                    <i class="fab fa-github"></i>
                </a>
                ${repo.homepage ? `<a href="${repo.homepage}" class="project-link" title="Live Demo" target="_blank">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>` : ''}
            </div>
            <div class="project-stats">
                <span class="project-stat" title="Stars"><i class="far fa-star"></i> ${repo.stargazers_count}</span>
                <span class="project-stat" title="Forks"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                <span class="project-stat" title="Updated on ${formattedDate}"><i class="far fa-calendar-alt"></i> ${formattedDate}</span>
            </div>
        </div>
    </div>
    `;

    return projectCard;
            }
        });
