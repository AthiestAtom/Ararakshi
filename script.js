// ARARAKSHI Research Paper Website - Interactive Features
// Enhanced user experience with smooth scrolling, data visualization, and dynamic interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializeSmoothScrolling();
    initializeNavigation();
    initializeDataVisualization();
    initializeInteractiveElements();
    initializeAccessibilityFeatures();
    initializePrintOptimization();
});

// Smooth Scrolling for Navigation Links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for sticky nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active navigation state
                updateActiveNavigation(targetId);
            }
        });
    });
}

// Navigation Active State Management
function initializeNavigation() {
    const sections = document.querySelectorAll('.paper-section[id]');
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    
    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        updateActiveNavigation(current ? `#${current}` : '');
    });
    
    // Mobile navigation toggle (if needed)
    createMobileNavigationToggle();
}

function updateActiveNavigation(targetId) {
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    
    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.parentElement.classList.add('active');
        }
    });
}

function createMobileNavigationToggle() {
    const nav = document.querySelector('.sticky-nav');
    const navContent = document.querySelector('.nav-content');
    
    if (window.innerWidth <= 768) {
        // Create mobile menu button if it doesn't exist
        if (!document.querySelector('.mobile-nav-toggle')) {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'mobile-nav-toggle';
            toggleButton.innerHTML = '☰ Menu';
            toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
            
            toggleButton.addEventListener('click', function() {
                navContent.classList.toggle('mobile-open');
                this.innerHTML = navContent.classList.contains('mobile-open') ? '✕ Close' : '☰ Menu';
            });
            
            nav.insertBefore(toggleButton, navContent);
        }
    }
}

// Data Visualization with Chart.js
function initializeDataVisualization() {
    createSewerDeathsChart();
    createCostSavingsChart();
    createMarketGrowthChart();
    createDeploymentTimelineChart();
    createROIComparisonChart();
}

// Sewer Worker Deaths Timeline Chart
function createSewerDeathsChart() {
    const ctx = document.getElementById('sewer-deaths-chart');
    if (!ctx) {
        createChartContainer('sewer-deaths-chart', 'Sewer Worker Deaths Timeline (2018-2024)');
    }
    
    const chartCanvas = document.getElementById('sewer-deaths-chart');
    if (chartCanvas && chartCanvas.getContext) {
        new Chart(chartCanvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Annual Deaths',
                    data: [65, 133, 72, 58, 89, 97, 116],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Sewer Worker Deaths in India (2018-2024)',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Deaths'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                }
            }
        });
    }
}

// Cost Savings Visualization
function createCostSavingsChart() {
    const ctx = document.getElementById('cost-savings-chart');
    if (!ctx) {
        createChartContainer('cost-savings-chart', 'Annual Municipal Cost Savings Analysis');
    }
    
    const chartCanvas = document.getElementById('cost-savings-chart');
    if (chartCanvas && chartCanvas.getContext) {
        new Chart(chartCanvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Emergency Unclogging', 'Flood Damage', 'Legal Compensation', 'Health Burden', 'Infrastructure'],
                datasets: [{
                    label: 'Current Cost (₹ Cr)',
                    data: [3, 15, 3.5, 4, 5.5],
                    backgroundColor: '#95a5a6'
                }, {
                    label: 'With ARARAKSHI (₹ Cr)',
                    data: [1.2, 5.25, 0.35, 2, 3.3],
                    backgroundColor: '#27ae60'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Cost Comparison: Before vs After ARARAKSHI',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Cost (₹ Crores)'
                        }
                    }
                }
            }
        });
    }
}

// Market Growth Chart
function createMarketGrowthChart() {
    const ctx = document.getElementById('market-growth-chart');
    if (!ctx) {
        createChartContainer('market-growth-chart', 'Indian Sewer Monitoring Market Growth');
    }
    
    const chartCanvas = document.getElementById('market-growth-chart');
    if (chartCanvas && chartCanvas.getContext) {
        new Chart(chartCanvas.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['IoT Hardware', 'AI Analytics SaaS', 'Municipal Contracts', 'Sewer Robotics'],
                datasets: [{
                    data: [5250, 1850, 3000, 7000],
                    backgroundColor: [
                        '#3498db',
                        '#9b59b6',
                        '#f39c12',
                        '#e74c3c'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Indian Market Opportunity (₹ Crores)',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ₹' + context.parsed.toLocaleString() + ' Cr';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Deployment Timeline Chart
function createDeploymentTimelineChart() {
    const ctx = document.getElementById('deployment-timeline-chart');
    if (!ctx) {
        createChartContainer('deployment-timeline-chart', 'ARARAKSHI Deployment Timeline');
    }
    
    const chartCanvas = document.getElementById('deployment-timeline-chart');
    if (chartCanvas && chartCanvas.getContext) {
        new Chart(chartCanvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [{
                    label: 'Cities Deployed',
                    data: [2, 8, 25, 50, 100],
                    backgroundColor: '#2ecc71'
                }, {
                    label: 'Nodes Installed',
                    data: [1500, 7000, 25000, 50000, 100000],
                    backgroundColor: '#3498db'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Projected Deployment Growth',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Count'
                        }
                    }
                }
            }
        });
    }
}

// ROI Comparison Chart
function createROIComparisonChart() {
    const ctx = document.getElementById('roi-comparison-chart');
    if (!ctx) {
        createChartContainer('roi-comparison-chart', 'Return on Investment Analysis');
    }
    
    const chartCanvas = document.getElementById('roi-comparison-chart');
    if (chartCanvas && chartCanvas.getContext) {
        new Chart(chartCanvas.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['Cost Reduction', 'Safety Improvement', 'Efficiency Gain', 'Revenue Potential', 'Market Impact'],
                datasets: [{
                    label: 'ARARAKSHI',
                    data: [85, 95, 75, 80, 90],
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.2)'
                }, {
                    label: 'Traditional Methods',
                    data: [20, 15, 25, 10, 30],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.2)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'ARARAKSHI vs Traditional Methods',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
}

// Helper function to create chart containers
function createChartContainer(id, title) {
    const container = document.createElement('div');
    container.className = 'chart-container';
    container.innerHTML = `
        <h3>${title}</h3>
        <canvas id="${id}" width="400" height="200"></canvas>
    `;
    
    // Find appropriate place to insert the chart
    const problemBackground = document.getElementById('problem-background');
    const economicImpact = document.getElementById('economic-impact');
    
    if (id.includes('deaths') && problemBackground) {
        problemBackground.appendChild(container);
    } else if (id.includes('savings') && economicImpact) {
        economicImpact.appendChild(container);
    } else if (id.includes('market') && economicImpact) {
        economicImpact.appendChild(container);
    } else if (id.includes('deployment') || id.includes('roi')) {
        const conclusion = document.getElementById('conclusion');
        if (conclusion) {
            conclusion.appendChild(container);
        }
    }
}

// Interactive Elements Enhancement
function initializeInteractiveElements() {
    // Add hover effects to tables
    enhanceTableInteractivity();
    
    // Add collapsible sections for long content
    addCollapsibleSections();
    
    // Add tooltip functionality
    addTooltips();
    
    // Add search functionality
    addSearchFunctionality();
    
    // Add print-friendly features
    enhancePrintExperience();
}

function enhanceTableInteractivity() {
    const tables = document.querySelectorAll('table');
    
    tables.forEach(table => {
        // Add sort functionality to table headers
        const headers = table.querySelectorAll('th');
        headers.forEach((header, index) => {
            if (index < headers.length - 1) { // Don't sort last column if it's actions
                header.style.cursor = 'pointer';
                header.addEventListener('click', () => sortTable(table, index));
            }
        });
        
        // Add row highlighting on hover
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = 'var(--background-light)';
            });
            row.addEventListener('mouseleave', () => {
                row.style.backgroundColor = '';
            });
        });
    });
}

function sortTable(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();
        
        // Try to parse as numbers
        const aNum = parseFloat(aValue.replace(/[^0-9.-]/g, ''));
        const bNum = parseFloat(bValue.replace(/[^0-9.-]/g, ''));
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return aNum - bNum;
        }
        
        return aValue.localeCompare(bValue);
    });
    
    rows.forEach(row => tbody.appendChild(row));
}

function addCollapsibleSections() {
    const sections = document.querySelectorAll('.paper-section');
    
    sections.forEach(section => {
        if (section.scrollHeight > 800) { // Only make long sections collapsible
            const header = section.querySelector('h2, h3');
            if (header) {
                const button = document.createElement('button');
                button.className = 'collapse-toggle';
                button.innerHTML = '▼';
                button.setAttribute('aria-label', 'Toggle section');
                button.style.cssText = `
                    float: right;
                    background: none;
                    border: none;
                    font-size: 1.2rem;
                    cursor: pointer;
                    color: var(--accent-color);
                `;
                
                header.style.position = 'relative';
                header.appendChild(button);
                
                let isCollapsed = false;
                button.addEventListener('click', () => {
                    isCollapsed = !isCollapsed;
                    const content = section.querySelectorAll('p, ul, ol, table, div');
                    
                    content.forEach(element => {
                        if (element !== header && !element.contains(button)) {
                            element.style.display = isCollapsed ? 'none' : '';
                        }
                    });
                    
                    button.innerHTML = isCollapsed ? '▶' : '▼';
                });
            }
        }
    });
}

function addTooltips() {
    // Add tooltips for technical terms
    const technicalTerms = {
        'H₂S': 'Hydrogen sulfide - a toxic gas commonly found in sewer systems',
        'LoRa': 'Long Range wireless communication technology for IoT devices',
        'MCU': 'Microcontroller Unit - the brain of the sensor node',
        'IP65': 'Ingress Protection rating - dust tight and water jet protected',
        'TinyML': 'Tiny Machine Learning - ML optimized for low-power devices',
        'SCADA': 'Supervisory Control and Data Acquisition - industrial control systems'
    };
    
    Object.keys(technicalTerms).forEach(term => {
        const regex = new RegExp(`\\b${term}\\b`, 'g');
        document.body.innerHTML = document.body.innerHTML.replace(regex, 
            `<span class="tooltip-term" data-tooltip="${technicalTerms[term]}">${term}</span>`
        );
    });
    
    // Add tooltip event listeners
    const tooltipTerms = document.querySelectorAll('.tooltip-term');
    tooltipTerms.forEach(term => {
        term.addEventListener('mouseenter', showTooltip);
        term.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.dataset.tooltip;
    tooltip.style.cssText = `
        position: absolute;
        background: var(--primary-color);
        color: white;
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.9rem;
        z-index: 10000;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.bottom + 5) + 'px';
    
    e.target.tooltip = tooltip;
}

function hideTooltip(e) {
    if (e.target.tooltip) {
        e.target.tooltip.remove();
        delete e.target.tooltip;
    }
}

function addSearchFunctionality() {
    // Create search interface
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-box">
            <input type="text" id="search-input" placeholder="Search research paper..." />
            <button id="search-button">🔍</button>
        </div>
        <div id="search-results"></div>
    `;
    
    // Insert search after navigation
    const nav = document.querySelector('.sticky-nav');
    if (nav) {
        nav.insertAdjacentElement('afterend', searchContainer);
    }
    
    // Add search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput && searchButton) {
        const performSearch = () => {
            const query = searchInput.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }
            
            const sections = document.querySelectorAll('.paper-section');
            const results = [];
            
            sections.forEach(section => {
                const text = section.textContent.toLowerCase();
                const title = section.querySelector('h2, h3')?.textContent || '';
                
                if (text.includes(query)) {
                    results.push({
                        title: title,
                        section: section,
                        relevance: calculateRelevance(text, query)
                    });
                }
            });
            
            results.sort((a, b) => b.relevance - a.relevance);
            
            displaySearchResults(results, query);
        };
        
        searchInput.addEventListener('input', performSearch);
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
}

function calculateRelevance(text, query) {
    let relevance = 0;
    const words = query.split(' ');
    
    words.forEach(word => {
        const count = (text.match(new RegExp(word, 'g')) || []).length;
        relevance += count;
    });
    
    return relevance;
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
        return;
    }
    
    const html = results.slice(0, 5).map(result => `
        <div class="search-result">
            <h4><a href="#${result.section.id}">${result.title}</a></h4>
            <p>Relevance: ${result.relevance}</p>
        </div>
    `).join('');
    
    searchResults.innerHTML = html;
}

// Accessibility Features
function initializeAccessibilityFeatures() {
    // Add keyboard navigation
    addKeyboardNavigation();
    
    // Add ARIA labels
    enhanceAriaLabels();
    
    // Add focus management
    improveFocusManagement();
}

function addKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Alt+S to focus search
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            const searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.focus();
        }
        
        // Alt+T to go to top
        if (e.altKey && e.key === 't') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Escape to close search results
        if (e.key === 'Escape') {
            const searchResults = document.getElementById('search-results');
            if (searchResults) searchResults.innerHTML = '';
        }
    });
}

function enhanceAriaLabels() {
    // Add ARIA labels to navigation
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        const text = link.textContent;
        link.setAttribute('aria-label', `Navigate to ${text} section`);
    });
    
    // Add ARIA labels to tables
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const caption = table.querySelector('caption') || table.previousElementSibling;
        if (caption) {
            table.setAttribute('aria-label', caption.textContent);
        }
    });
}

function improveFocusManagement() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Print Optimization
function initializePrintOptimization() {
    // Add print button
    const printButton = document.createElement('button');
    printButton.textContent = '🖨️ Print Paper';
    printButton.className = 'print-button';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        z-index: 1000;
        box-shadow: var(--shadow-md);
    `;
    
    printButton.addEventListener('click', () => {
        window.print();
    });
    
    document.body.appendChild(printButton);
}

function enhancePrintExperience() {
    // Add print-specific styles
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .print-button, .search-container, .mobile-nav-toggle, .tooltip {
                display: none !important;
            }
            
            .paper-section {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            h2 {
                page-break-after: avoid;
            }
            
            table {
                page-break-inside: avoid;
            }
        }
    `;
    document.head.appendChild(printStyles);
}

// Performance Optimization
function optimizePerformance() {
    // Lazy load images if any are added later
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Error Handling
function initializeErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('ARARAKSHI Website Error:', e.error);
    });
    
    // Chart.js error handling
    if (typeof Chart !== 'undefined') {
        Chart.defaults.plugins.legend.labels.generateLabels = function(chart) {
            try {
                return Chart.defaults.plugins.legend.labels.generateLabels.call(this, chart);
            } catch (error) {
                console.warn('Chart legend generation error:', error);
                return [];
            }
        };
    }
}

// Initialize all features
initializeErrorHandling();
optimizePerformance();

// Add CSS for additional interactive elements
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .search-container {
        background: var(--background-light);
        padding: 1rem;
        border-bottom: 1px solid var(--border-color);
        display: none;
    }
    
    .search-box {
        display: flex;
        gap: 0.5rem;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .search-box input {
        flex: 1;
        padding: 0.5rem;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        font-size: 1rem;
    }
    
    .search-box button {
        padding: 0.5rem 1rem;
        background: var(--accent-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .search-result {
        padding: 1rem;
        border-bottom: 1px solid var(--border-color);
    }
    
    .search-result:last-child {
        border-bottom: none;
    }
    
    .search-result h4 {
        margin: 0 0 0.5rem 0;
    }
    
    .search-result a {
        color: var(--accent-color);
    }
    
    .chart-container {
        margin: 2rem 0;
        padding: 1rem;
        background: var(--background-light);
        border-radius: 8px;
        border: 1px solid var(--border-color);
    }
    
    .chart-container h3 {
        text-align: center;
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
    
    .tooltip-term {
        border-bottom: 1px dotted var(--accent-color);
        cursor: help;
    }
    
    .mobile-nav-toggle {
        display: none;
        background: var(--accent-color);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 1rem;
    }
    
    @media (max-width: 768px) {
        .mobile-nav-toggle {
            display: block;
        }
        
        .nav-content {
            display: none;
        }
        
        .nav-content.mobile-open {
            display: block;
        }
        
        .search-container {
            display: block;
        }
    }
    
    .collapse-toggle:hover {
        transform: scale(1.1);
    }
    
    .skip-link:focus {
        top: 6px;
    }
`;

document.head.appendChild(additionalStyles);
