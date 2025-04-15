document.addEventListener('DOMContentLoaded', function() {

    // --- tsParticles Background Initialization (ADJUSTED FOR BRIGHTNESS) ---
    tsParticles.load("tsparticles", {
      fpsLimit: 60,
      background: {
        color: "#000000" // Keep background black for contrast
      },
      particles: {
        number: {
          value: 80, // Keeping original number, adjust if needed
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          // Brighter shades, mostly white
          value: ["#ffffff", "#f5f5f5", "#e8e8e8"]
          // OR for pure white: value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.9, // Increased particle opacity
          random: true,
          anim: {
            enable: true,
            speed: 0.5, // Keep animation speed reasonable
            opacity_min: 0.5, // Increased minimum particle opacity
            sync: false
          }
        },
        size: {
          value: 3, // Slightly larger particles
          random: true,
          anim: {
            enable: false // Keep size animation off unless desired
          }
        },
        line_linked: {
          enable: true,
          distance: 150, // Keep interaction distance
          color: "#dddddd", // Lighter line color
          opacity: 0.65, // Increased line opacity
          width: 1 // Keep line width
        },
        move: {
          enable: true,
          speed: 1.5, // Keep original speed
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse" // Keep repulse on hover
          },
          onclick: {
            enable: true, // Keep push on click
            mode: "push"
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 100, // Keep original distance
            duration: 0.4
          },
          push: {
            particles_nb: 4 // Original push value
          },
          // Other modes remain less relevant unless needed
          grab: { distance: 400, line_opacity: 1 },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          remove: { particles_nb: 2 }
        }
      },
      detectRetina: true // Keep retina detection
    });
    // --- End tsParticles Modification ---
  
    // --- Profile image fallback ---
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
      profileImg.onerror = function() {
        this.src = 'https://via.placeholder.com/200/000000/FFFFFF/?text=Manish';
        this.alt = 'Default Profile Image';
      };
    }
  
    // --- TYPING EFFECT LOGIC ---
    const dynamicRoleSpan = document.getElementById('dynamic-role');
    if (dynamicRoleSpan) {
      const titles = ["Data Analytics", "AI/ML Development", "Data Scientist", "Web Development"];
      let titleIndex = 0;
      const typeSpeed = 70;
      const deleteSpeed = 40;
      const pauseBeforeDelete = 1500;
      const pauseBeforeType = 200;
  
      function typeWord(word, element, speed) {
          return new Promise(resolve => {
              let i = 0;
              element.textContent = '';
              function type() {
                  if (i < word.length) {
                      element.textContent += word[i];
                      i++;
                      setTimeout(type, speed);
                  } else {
                      resolve();
                  }
              }
              if (word.length > 0) { type(); } else { resolve(); }
          });
      }
  
      function deleteWord(element, speed) {
          return new Promise(resolve => {
              let text = element.textContent;
              function del() {
                  if (text.length > 0) {
                      text = text.slice(0, -1);
                      element.textContent = text;
                      setTimeout(del, speed);
                  } else {
                      resolve();
                  }
              }
              if (text.length > 0) { del(); } else { resolve(); }
          });
      }
  
      async function cycleRoles() {
          while (true) {
              const currentRole = titles[titleIndex];
              await typeWord(currentRole, dynamicRoleSpan, typeSpeed);
              await new Promise(resolve => setTimeout(resolve, pauseBeforeDelete));
              await deleteWord(dynamicRoleSpan, deleteSpeed);
              await new Promise(resolve => setTimeout(resolve, pauseBeforeType));
              titleIndex = (titleIndex + 1) % titles.length;
          }
      }
      // Start the typing effect slightly after page load
      setTimeout(cycleRoles, 500);
    }
  
    // --- PROJECTS DATA ---
    const projects = [
         {title: "Stock Market Forecasting",description: "Stock market forecasting using time series models involves predicting future stock prices based on historical data. Time series models analyze patterns and trends in data over time to make these predictions. Techniques such as ARIMA (AutoRegressive Integrated Moving Average).",tags: ["Machine Learning","Python", "TensorFlow", "LSTM", "Pandas","Y Finance"],image: "Stock.jpg",link: "https://github.com/manishmallah2/Stock-Market-Forecasting-"},
         {title: "Super Store Sales Dashboard",description: "The Super Store sales visualization project using Power BI aims to create interactive dashboards and reports for analyzing sales data, product performance, and customer trends, enabling data-driven decision-making for the store management.",tags: ["Power Bi", "Python", "Web Scraping","SQL","DBMS"],image: "Sales Dashbaord.png",link: "https://app.powerbi.com/view?r=eyJrIjoiNjFmZDQwNzktOThkYi00NDE2LWEyMjEtNDQ3M2FlOTZkY2M5IiwidCI6IjEyNGRiMzVjLWVjYTctNDE5Zi1hOGM4LTQ1YTlkNmM5NDhjMCJ9"},
         {title: "Hr Analytics Dashboard",description: "The project involves collecting, cleaning, and integrating HR data from various sources, such as employee records, performance evaluations, and recruitment data. The project creates interactive dashboards and reports to help HR professionals gain insights",tags: ["Power Bi", "Python", "Web Scraping","SQL","DBMS"],image: "Hr.png",link: "https://app.powerbi.com/view?r=eyJrIjoiN2JjZTQ1MjMtZDI2OS00ZjAxLTlmMGEtOTE4YzRiOWVjZjFjIiwidCI6IjEyNGRiMzVjLWVjYTctNDE5Zi1hOGM4LTQ1YTlkNmM5NDhjMCJ9"},
         {title: "Tic-Tac-Toe Game With Ai",description: "The Tic Tac Toe game with AI is a project that implements a version of the popular game, allowing users to play against an AI opponent",tags: ["AI", "Flask", "Python", "Jupyter"],image: "Tic Tac Toe.jpg",link: "https://github.com/manishmallah2/Tic-Tac-Toe-game-with-ai"}, // Placeholder Link // Placeholder Link
         {title: "Web Scraping",description: "Done web Scraping using python libraries BeautifulSoup and Requests and extracted data from online webpage of largest companies of united states and turned the data into excel and csv format.",tags: ["Beautiful Soup","Request","Python", "Web Scraping", "Jupyter"],image: "web scraping.png",link: "https://github.com/manishmallah2/Web-Scraping-"},
         {title: "Health Monitoring Analysis",description: "Health Monitoring and Analysis refers to the systematic use of health data to track and evaluate the health status of individuals or populations over time. It contains a range of activities from real-time physiological data collection (like heart rate, blood pressure, and temperature) to the analysis of more complex health records.",tags: ["Python", "Pandas", "Jupyter"],image: "Health.jpg",link: "https://github.com/manishmallah2/Health-Monitoring-Analysis"} // Placeholder Link
     ];
  
    // --- SKILLS DATA ---
    const skills = [
      { name: "Power BI", icon: "fas fa-chart-bar" },
      { name: "Tableau", icon: "fas fa-chart-pie" },
      { name: "Python", icon: "fab fa-python" },
      { name: "MySQL", icon: "fas fa-database" },
      { name: "DBMS", icon: "fas fa-database" },
      { name: "Data Integration", icon: "fas fa-project-diagram" },
      { name: "Stats", icon: "fas fa-calculator" }, // Using same icon as MySQL
      { name: "Data Pipeline", icon: "fas fa-stream" },
      { name: "Fabric", icon: "fas fa-cubes" }, // Microsoft Fabric icon might need custom SVG/image later
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "React", icon: "fab fa-react" },
      { name: "VS Code", icon: "fas fa-code" },
      { name: "Jupyter", icon: "fas fa-book" }, // Representing Jupyter Notebooks
      { name: "GitHub", icon: "fab fa-github" },
      { name: "Pandas", icon: "fas fa-table" }, // Representing dataframes // Representing DAX calculations
      { name: "Matplotlib", icon: "fas fa-chart-line" },
      { name: "PyTorch", icon: "fas fa-brain" }, // Generic AI/ML icon
      { name: "TensorFlow", icon: "fas fa-cogs" }, // Generic processing/ML icon
      { name: "NumPy", icon: "fas fa-calculator" },
      { name: "Power Query", icon: "fas fa-filter" }, // Representing data transformation
      { name: "DAX Query", icon: "fas fa-percentage" },
      { name: "Big Data", icon: "fas fa-layer-group" } // Representing numerical operations
    ];
  
    // --- RENDER PROJECTS ---
    const projectsGrid = document.querySelector('.projects .project-grid');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const initialProjectCount = 3; // Show 3 projects initially
  
    function renderProjects(count) {
      if (!projectsGrid) return; // Exit if grid element not found
  
      const projectsToRender = projects.slice(0, count);
      projectsGrid.innerHTML = projectsToRender.map(project => `
        <div class="project-card"
             data-title="${project.title || ''}"
             data-description="${project.description || ''}"
             data-tags="${(project.tags || []).join(',')}"
             data-image="${project.image || ''}"
             data-link="${project.link || '#'}">
          <img src="${project.image || 'https://via.placeholder.com/400x225/333/ccc/?text=Image+Not+Found'}"
               alt="${project.title || 'Project Image'}"
               onerror="this.onerror=null; this.src='https://via.placeholder.com/400x225/333/ccc/?text=Image+Error'; this.alt='Image loading error';">
          <h3>${project.title || 'Project Title'}</h3>
          <p>${(project.description || '').substring(0, 100)}${(project.description || '').length > 100 ? '...' : ''}</p>
          <div class="tags">
            ${(project.tags || []).slice(0, 3).map(tag => `<span>${tag}</span>`).join('')}
            ${(project.tags || []).length > 3 ? `<span>+${(project.tags || []).length - 3}</span>` : ''}
          </div>
        </div>
      `).join('');
  
      // Re-attach listeners after rendering
      attachProjectCardListeners();
    }
  
    // Initial render
    renderProjects(initialProjectCount);
  
    // View More Button Logic
    if (viewMoreBtn) {
      if (projects.length <= initialProjectCount) {
        viewMoreBtn.style.display = 'none'; // Hide if not enough projects
      } else {
        viewMoreBtn.addEventListener('click', function() {
          renderProjects(projects.length); // Render all projects
          viewMoreBtn.style.display = 'none'; // Hide button after clicking
        });
      }
    }
  
    // --- RENDER SKILLS ---
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
      skillsContainer.innerHTML = skills.map(skill => `
        <div class="skill-item">
          <i class="${skill.icon || 'fas fa-question-circle'}"></i>
          <h3>${skill.name || 'Skill Name'}</h3>
        </div>
      `).join('');
    }
  
    // --- MODAL FUNCTIONALITY ---
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');
    const modalImage = document.getElementById('modalImage');
    const projectLink = document.getElementById('projectLink');
    const closeBtn = document.querySelector('.modal .close');
  
    function attachProjectCardListeners() {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(card => {
        // Remove existing listener to prevent duplicates if re-rendered
        card.removeEventListener('click', handleCardClick, true);
        // Add the listener
        card.addEventListener('click', handleCardClick, true);
      });
    }
  
    function handleCardClick(event) {
      // Ensure we're targeting the card itself, not child elements if event bubbles strangely
      const card = event.currentTarget;
  
      // Retrieve data from data-* attributes
      const title = card.dataset.title;
      const description = card.dataset.description;
      const tags = card.dataset.tags ? card.dataset.tags.split(',') : [];
      const image = card.dataset.image;
      const link = card.dataset.link;
  
      // Populate Modal elements safely
      if (modalTitle) modalTitle.textContent = title;
      if (modalDescription) modalDescription.textContent = description;
  
      if (modalImage) {
          modalImage.src = image || 'https://via.placeholder.com/800x400/333/ccc/?text=Image+Not+Found'; // Default/Fallback image
          modalImage.alt = title || 'Project Image';
          // Image error handling for the modal image itself
          modalImage.onerror = function() {
              this.onerror=null; // Prevent infinite loop if fallback also fails
              this.src='https://via.placeholder.com/800x400/333/ccc/?text=Image+Error';
              this.alt = (title || 'Project') + ' Image Loading Error';
          }
      }
  
      if (projectLink) {
          projectLink.href = link;
          // Show link only if it's valid and not just "#"
          projectLink.style.display = (link && link !== '#' && link.trim() !== '') ? 'inline-block' : 'none';
      }
  
      if (modalTags) {
        modalTags.innerHTML = ''; // Clear previous tags
        tags.forEach(tag => {
          if (tag && tag.trim()) { // Ensure tag is not empty/whitespace
            const tagElement = document.createElement('span');
            tagElement.textContent = tag.trim();
            modalTags.appendChild(tagElement);
          }
        });
      }
  
      // Display the modal
      if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    }
  
    // Attach listeners initially
    attachProjectCardListeners();
  
    // Close Modal Logic
    function closeModal() {
      if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = ''; // Restore background scrolling
      }
    }
  
    // Close button click
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
  
    // Click outside modal to close
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    // Escape key to close
    window.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal && modal.style.display === "block") {
        closeModal();
      }
    });
    // --- END MODAL FUNCTIONALITY ---
  
  }); // End DOMContentLoaded