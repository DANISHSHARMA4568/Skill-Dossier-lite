// Application state
let appState = {
    currentPage: 'home',
    mentors: [],
    filteredMentors: [],
    savedMentors: [],
    filters: {
        search: '',
        skills: [],
        availability: ''
    },
    theme: 'light'
};

// Mentor data
const mentorData = [
    {
        "id": 1,
        "name": "Sarah Chen",
        "title": "Senior Software Engineer at Google",
        "skills": ["JavaScript", "React", "Node.js", "System Design"],
        "yearsExperience": 8,
        "availability": "open",
        "rating": 5,
        "timezone": "PST",
        "shortBio": "Passionate about helping junior developers grow their technical skills and navigate career transitions.",
        "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 2,
        "name": "Marcus Johnson",
        "title": "Product Manager at Microsoft",
        "skills": ["Product Strategy", "Analytics", "Leadership", "Agile"],
        "yearsExperience": 6,
        "availability": "busy",
        "rating": 4,
        "timezone": "EST",
        "shortBio": "Experienced PM helping others transition from technical roles to product management.",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 3,
        "name": "Emily Rodriguez",
        "title": "UX Design Lead at Airbnb",
        "skills": ["UI/UX Design", "Figma", "User Research", "Prototyping"],
        "yearsExperience": 7,
        "availability": "open",
        "rating": 5,
        "timezone": "PST",
        "shortBio": "Design leader passionate about mentoring emerging designers and improving user experiences.",
        "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 4,
        "name": "David Kim",
        "title": "DevOps Engineer at AWS",
        "skills": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
        "yearsExperience": 9,
        "availability": "open",
        "rating": 4,
        "timezone": "PST",
        "shortBio": "DevOps expert helping developers learn cloud infrastructure and deployment practices.",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 5,
        "name": "Priya Patel",
        "title": "Data Scientist at Netflix",
        "skills": ["Python", "Machine Learning", "SQL", "Statistics"],
        "yearsExperience": 5,
        "availability": "busy",
        "rating": 5,
        "timezone": "PST",
        "shortBio": "Data science mentor specializing in ML applications and career guidance for analytics roles.",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 6,
        "name": "Alex Thompson",
        "title": "Full Stack Developer at Stripe",
        "skills": ["TypeScript", "React", "PostgreSQL", "GraphQL"],
        "yearsExperience": 4,
        "availability": "open",
        "rating": 4,
        "timezone": "EST",
        "shortBio": "Full-stack developer passionate about modern web technologies and helping bootcamp graduates.",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 7,
        "name": "Lisa Wang",
        "title": "Engineering Manager at Uber",
        "skills": ["Leadership", "Team Management", "Architecture", "Mentoring"],
        "yearsExperience": 12,
        "availability": "open",
        "rating": 5,
        "timezone": "PST",
        "shortBio": "Engineering leader focused on career development and helping engineers transition to management.",
        "avatar": "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 8,
        "name": "Michael Brown",
        "title": "Mobile Developer at Spotify",
        "skills": ["React Native", "iOS", "Android", "Flutter"],
        "yearsExperience": 6,
        "availability": "busy",
        "rating": 4,
        "timezone": "CET",
        "shortBio": "Mobile development expert helping developers build cross-platform applications.",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 9,
        "name": "Jennifer Lee",
        "title": "Cybersecurity Analyst at Apple",
        "skills": ["Security", "Penetration Testing", "Risk Assessment", "Compliance"],
        "yearsExperience": 8,
        "availability": "open",
        "rating": 5,
        "timezone": "PST",
        "shortBio": "Security professional helping developers learn secure coding practices and cybersecurity fundamentals.",
        "avatar": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 10,
        "name": "Ryan Garcia",
        "title": "Backend Engineer at Discord",
        "skills": ["Go", "Microservices", "Redis", "MongoDB"],
        "yearsExperience": 7,
        "availability": "open",
        "rating": 4,
        "timezone": "PST",
        "shortBio": "Backend specialist focused on scalable systems and helping developers master server-side technologies.",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 11,
        "name": "Amanda Foster",
        "title": "QA Engineer at Tesla",
        "skills": ["Test Automation", "Selenium", "Quality Assurance", "Agile Testing"],
        "yearsExperience": 5,
        "availability": "busy",
        "rating": 4,
        "timezone": "PST",
        "shortBio": "QA expert helping developers understand testing methodologies and automation frameworks.",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
        "id": 12,
        "name": "Carlos Martinez",
        "title": "Blockchain Developer at Coinbase",
        "skills": ["Solidity", "Web3", "Smart Contracts", "DeFi"],
        "yearsExperience": 4,
        "availability": "open",
        "rating": 5,
        "timezone": "EST",
        "shortBio": "Blockchain developer passionate about Web3 technologies and helping others enter the crypto space.",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
];

const allSkills = ["JavaScript", "React", "Node.js", "Python", "TypeScript", "AWS", "Docker", "UI/UX Design", "Machine Learning", "Product Strategy", "Leadership", "Mobile Development", "Security", "Backend", "QA Testing", "Blockchain"];

// Initialize saved mentors from localStorage
function initSavedMentors() {
    try {
        const saved = localStorage.getItem('savedMentors');
        appState.savedMentors = saved ? JSON.parse(saved) : [];
    } catch (e) {
        console.error('Error loading saved mentors:', e);
        appState.savedMentors = [];
    }
}

// Initialize theme from localStorage
function initTheme() {
    try {
        appState.theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-color-scheme', appState.theme);
        updateThemeToggleIcon();
    } catch (e) {
        console.error('Error loading theme:', e);
    }
}

function updateThemeToggleIcon() {
    const themeToggle = document.querySelector('.theme-toggle__icon');
    if (themeToggle) {
        themeToggle.textContent = appState.theme === 'dark' ? '☀️' : '🌙';
    }
}

function toggleTheme() {
    appState.theme = appState.theme === 'light' ? 'dark' : 'light';
    try {
        localStorage.setItem('theme', appState.theme);
    } catch (e) {
        console.error('Error saving theme:', e);
    }
    document.documentElement.setAttribute('data-color-scheme', appState.theme);
    updateThemeToggleIcon();
}

// Navigation function
function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('page--active'));
    
    // Show target page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('page--active');
        appState.currentPage = pageId;
        
        // Update nav links
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.removeAttribute('aria-current');
            if (link.getAttribute('data-page') === pageId) {
                link.setAttribute('aria-current', 'page');
            }
        });
        
        // Load page specific content
        if (pageId === 'mentors') {
            loadMentorsPage();
        } else if (pageId === 'dashboard') {
            loadDashboard();
        }
    } else {
        console.error('Page not found:', pageId + '-page');
    }
}

// Render stars for rating
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= rating ? '' : 'star--empty'}">★</span>`;
    }
    return stars;
}

// Create mentor card HTML
function createMentorCard(mentor) {
    const isSaved = appState.savedMentors.some(saved => saved.id === mentor.id);
    
    return `
        <div class="mentor-card" data-mentor-id="${mentor.id}">
            <div class="mentor-card__availability availability--${mentor.availability}">
                ${mentor.availability === 'open' ? 'Available' : 'Busy'}
            </div>
            
            <div class="mentor-card__header">
                <img src="${mentor.avatar}" alt="${mentor.name}" class="mentor-card__avatar">
                <div class="mentor-card__info">
                    <h3>${mentor.name}</h3>
                    <p class="mentor-card__title">${mentor.title}</p>
                    <div class="mentor-card__meta">
                        <span>${mentor.yearsExperience} years experience</span>
                        <span>•</span>
                        <span>${mentor.timezone}</span>
                    </div>
                </div>
            </div>
            
            <div class="mentor-card__skills">
                ${mentor.skills.map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
            </div>
            
            <p class="mentor-card__bio">${mentor.shortBio}</p>
            
            <div class="mentor-card__rating">
                <div class="rating-stars">
                    ${renderStars(mentor.rating)}
                </div>
                <span>(${mentor.rating}/5)</span>
            </div>
            
            <div class="mentor-card__actions">
                <button class="btn btn--save ${isSaved ? 'saved' : ''}" onclick="toggleSaveMentor(${mentor.id})">
                    ${isSaved ? '❤️ Saved' : '🤍 Save'}
                </button>
                <button class="btn btn--primary btn--connect" onclick="connectToMentor(${mentor.id})">
                    Connect
                </button>
            </div>
        </div>
    `;
}

// Filter mentors based on current filters
function filterMentors() {
    let filtered = [...appState.mentors];
    
    // Search filter
    if (appState.filters.search) {
        const searchTerm = appState.filters.search.toLowerCase();
        filtered = filtered.filter(mentor => 
            mentor.name.toLowerCase().includes(searchTerm) ||
            mentor.title.toLowerCase().includes(searchTerm) ||
            mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm))
        );
    }
    
    // Skills filter
    if (appState.filters.skills.length > 0) {
        filtered = filtered.filter(mentor =>
            appState.filters.skills.some(skill => mentor.skills.includes(skill))
        );
    }
    
    // Availability filter
    if (appState.filters.availability) {
        filtered = filtered.filter(mentor => mentor.availability === appState.filters.availability);
    }
    
    appState.filteredMentors = filtered;
    renderMentors();
}

// Render mentor cards
function renderMentors() {
    const grid = document.getElementById('mentors-grid');
    const emptyState = document.getElementById('mentors-empty-state');
    
    if (!grid || !emptyState) return;
    
    if (appState.filteredMentors.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        grid.innerHTML = appState.filteredMentors.map(mentor => createMentorCard(mentor)).join('');
    }
}

// Toggle save mentor
function toggleSaveMentor(mentorId) {
    const mentor = appState.mentors.find(m => m.id === mentorId);
    if (!mentor) return;
    
    const isAlreadySaved = appState.savedMentors.some(saved => saved.id === mentorId);
    
    if (isAlreadySaved) {
        appState.savedMentors = appState.savedMentors.filter(saved => saved.id !== mentorId);
    } else {
        appState.savedMentors.push(mentor);
    }
    
    try {
        localStorage.setItem('savedMentors', JSON.stringify(appState.savedMentors));
    } catch (e) {
        console.error('Error saving mentors:', e);
    }
    
    // Update UI
    updateSaveButtons(mentorId);
    if (appState.currentPage === 'dashboard') {
        renderSavedMentors();
    }
}

function updateSaveButtons(mentorId) {
    const isSaved = appState.savedMentors.some(saved => saved.id === mentorId);
    const buttons = document.querySelectorAll(`[data-mentor-id="${mentorId}"] .btn--save`);
    buttons.forEach(btn => {
        btn.classList.toggle('saved', isSaved);
        btn.innerHTML = isSaved ? '❤️ Saved' : '🤍 Save';
    });
}

// Connect to mentor
function connectToMentor(mentorId) {
    const mentor = appState.mentors.find(m => m.id === mentorId);
    if (mentor) {
        alert(`Connect feature is not implemented in this demo. In a real application, you would be able to message ${mentor.name}.`);
    }
}

// Load mentors page
function loadMentorsPage() {
    // Initialize skills filter dropdown
    const skillsFilter = document.getElementById('skills-filter');
    if (skillsFilter && skillsFilter.options.length <= 1) {
        skillsFilter.innerHTML = '<option value="">All Skills</option>' + 
            allSkills.map(skill => `<option value="${skill}">${skill}</option>`).join('');
    }
    
    filterMentors();
}

// Render saved mentors in dashboard
function renderSavedMentors() {
    const container = document.getElementById('saved-mentors');
    const emptyState = document.getElementById('saved-mentors-empty');
    
    if (!container || !emptyState) return;
    
    if (appState.savedMentors.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        container.innerHTML = appState.savedMentors.map(mentor => `
            <div class="saved-mentor-item">
                <img src="${mentor.avatar}" alt="${mentor.name}" class="saved-mentor-item__avatar">
                <div class="saved-mentor-item__info">
                    <div class="saved-mentor-item__name">${mentor.name}</div>
                    <div class="saved-mentor-item__title">${mentor.title}</div>
                </div>
                <button class="btn--remove" onclick="removeSavedMentor(${mentor.id})" aria-label="Remove ${mentor.name}">
                    ✕
                </button>
            </div>
        `).join('');
    }
}

function removeSavedMentor(mentorId) {
    toggleSaveMentor(mentorId);
}

// Load dashboard
function loadDashboard() {
    renderSavedMentors();
}

// Initialize search functionality
function initSearch() {
    const searchInput = document.getElementById('mentor-search');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                appState.filters.search = e.target.value;
                filterMentors();
            }, 300);
        });
    }
}

// Initialize filters
function initFilters() {
    const skillsFilter = document.getElementById('skills-filter');
    const availabilityFilter = document.getElementById('availability-filter');
    
    if (skillsFilter) {
        skillsFilter.addEventListener('change', (e) => {
            appState.filters.skills = e.target.value ? [e.target.value] : [];
            filterMentors();
        });
    }
    
    if (availabilityFilter) {
        availabilityFilter.addEventListener('change', (e) => {
            appState.filters.availability = e.target.value;
            filterMentors();
        });
    }
}

// Initialize FAQ accordion
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            const contentId = header.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            
            if (!content) return;
            
            // Close all accordions
            accordionHeaders.forEach(h => {
                h.setAttribute('aria-expanded', 'false');
                const cId = h.getAttribute('aria-controls');
                const c = document.getElementById(cId);
                if (c) c.classList.remove('active');
            });
            
            // Toggle current accordion
            if (!isExpanded) {
                header.setAttribute('aria-expanded', 'true');
                content.classList.add('active');
            }
        });
    });
}

// Initialize contact form
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            validateContactForm();
        });
    }
}

function validateContactForm() {
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const message = document.getElementById('contact-message');
    
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.classList.add('hidden');
    });
    
    // Validate name
    if (!name.value.trim()) {
        const nameError = document.getElementById('name-error');
        if (nameError) nameError.classList.remove('hidden');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        const emailError = document.getElementById('email-error');
        if (emailError) emailError.classList.remove('hidden');
        isValid = false;
    }
    
    // Validate message
    if (!message.value.trim()) {
        const messageError = document.getElementById('message-error');
        if (messageError) messageError.classList.remove('hidden');
        isValid = false;
    }
    
    if (isValid) {
        const form = document.getElementById('contact-form');
        const success = document.getElementById('contact-success');
        
        if (form && success) {
            form.style.display = 'none';
            success.classList.remove('hidden');
            
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                success.classList.add('hidden');
            }, 3000);
        }
    }
}

// Initialize application
function init() {
    console.log('Initializing SkillDossier Lite...');
    
    // Initialize data
    appState.mentors = mentorData;
    appState.filteredMentors = [...mentorData];
    
    // Initialize saved mentors and theme
    initSavedMentors();
    initTheme();
    
    // Initialize page components
    initSearch();
    initFilters();
    initAccordion();
    initContactForm();
    
    // Set up navigation event listeners
    document.addEventListener('click', (e) => {
        // Handle navigation
        const navTarget = e.target.closest('[data-page]');
        if (navTarget) {
            e.preventDefault();
            const page = navTarget.getAttribute('data-page');
            showPage(page);
            return;
        }
        
        // Handle theme toggle
        if (e.target.closest('.theme-toggle')) {
            e.preventDefault();
            toggleTheme();
            return;
        }
    });
    
    // Start on home page
    showPage('home');
    
    console.log('SkillDossier Lite initialized successfully!');
}

// Start the app
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}