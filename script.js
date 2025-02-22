document.addEventListener('DOMContentLoaded', () => {
  // Projects data
  const projects = [
  {
    title: 'MAPS USING JAVA',
    description: 'The project is a Java-based mapping application using the JXMapViewer library to display and manage geographical waypoints.',
    image: 'JAVA_MAPS.jpg',
   
  },
  {
    title: 'Bank Management System',
    description: 'This Bank Management System is a comprehensive Java-based application designed to manage bank operations efficiently.',
    image: 'Bank.jpg',
  },
  {
    title: 'Forest Fire Prediction System',
    description: 'A project focused on predicting forest fires using Oxygen, Temperature, and Humidity levels of the particular region and with skills of full-stack development.',
    image: 'Forest_Fire.png',
  },

    {
      title: 'Mental Fitness Tracker',
      description: 'This project focuses on tracking mental fitness using various metrics and visualizations. It aims to help users monitor their mental well-being over time through interactive charts and data analytics.',
      image: 'compare.jpg'
    },
    {
      title: 'Graph Explore - Interactive DFS and BFS Visualization',
      description: 'This project implements DFS and BFS graph traversal algorithms and visualizes the graph using NetworkX and Matplotlib. It features an interactive UI with ipywidgets for dynamic traversal visualization.',
      image: 'graph.jpg'
    },
  ];

  // Responsibilities data
  const responsibilities = [
    {
      title: 'Vice President, Student Council, CCET',
      description: 'Serving as the Student Council Vice President in my college (2024 - 2025).',
     image: 'council.png',
    },
     {
      title: 'Co - convenor , Annual College Fest (APRATIM-2K23)',
      description: 'Organized and managed APRATIM-2K24, the annual college fest, overseeing event planning, coordination, and execution.',
     image: 'CO.jpg',
    },
    {
      title: 'Treasurer, Annual College Fest (APRATIM-2K23)',
      description: 'Managed financial aspects for the college fest (11/2023).',
      image: 'treasurer.jpg',
    },
  
    {
      title: 'Volunteer, Youth Against Injustice Foundation',
      description: 'Led online awareness sessions and created content on menstrual health, personal safety, and good vs. bad touch.',
      image: 'volunteer.jpg',
    },
    {
      title: 'Yoga Participation',
      description: 'Participated in Yoga Day Event, Contributing to a World Record Achievement',
      image: 'YOGA.jpg',
      
    },
    {
      title: ' NCC Cadet',
      description: 'Participated in National Cadet Corps (NCC) activities and training sessions.',
      image: 'NCC.jpg',
      
    },

    {
      title: 'POSTER MAKING COMPETITION',
      description: 'Participated in Poster Competitions',
      image: 'POSTER.png',
      
    },
  ];

  // Achievements data
  const achievements = [
    {
      title: 'Ideathon',
      description: 'Our team INNOVATE4CHANGE achieved second place in the IDEATHON competition held at CCET College by developing an innovative game designed to motivate students to study through engaging and interactive gameplay.',
      image: 'Ideathon.jpg',
    },
    {
      title: 'NCC Caded with A-Certificate',
      description: 'Earned the NCC A Certificate after successfully passing the A Certificate Exam and completing the required camp training.',
      image: 'NCC.jpg',
    },
   
    {
      title: 'College Level Scholarship',
      description: 'Received a full-fee scholarship for the first year of graduation at CCET College under a meritorious scheme provided by the government.',
      image: 'scholarship.png',
    },
    {
      title: 'Scholar of  Bhai JaitaJee Foundation India ',
      description: 'Awarded prestigious scholarships from BJF India for academic excellence during 11th and 12th grades in Chandigarh, following a rigorous selection process that included a written test and two comprehensive interview rounds.',
      image: 'bjf.jpg',
    },
    {
      title: 'Scholar at Jawahar Navodaya Vidyalaya, operating under the direct oversight of the central government.',
      description: 'Secured admission to Jawahar Navodaya Vidyalaya (JNV) Najochak Pathankot after successfully clearing the entrance test for 6th grade. Demonstrated exceptional academic performance throughout my tenure, ranking as the top student in my class from 7th to 10th grade, with my name proudly engraved on the honor roll.',
      image: 'jnv.png',
    },
  ];

  // Load projects dynamically
  const projectList = document.getElementById('project-list');
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl';

    // Construct project HTML
    let projectHTML = `
      <img src="${project.image}" alt="${project.title}" class="mb-4 rounded-md object-cover h-48 w-full">
      <h3 class="text-2xl font-bold mb-2">${project.title}</h3>
    `;

    // Add video if it exists
    if (project.video) {
      projectHTML += `
        <div class="mt-4">
          <video controls class="w-full rounded-md">
            <source src="${project.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      `;
    }

    projectElement.innerHTML = projectHTML;
    projectList.appendChild(projectElement);
  });

  // Load responsibilities dynamically
  const responsibilityList = document.getElementById('responsibility-list');
  responsibilities.forEach(item => {
    const responsibilityElement = document.createElement('div');
    responsibilityElement.className = 'bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl';

    let responsibilityHTML = `
      <img src="${item.image}" alt="${item.title}" class="mb-4 rounded-md object-cover h-48 w-full">
      <h4 class="text-2xl font-bold mb-2">${item.title}</h4>
      <p class="mb-4">${item.description}</p>
    `;

    responsibilityElement.innerHTML = responsibilityHTML;
    responsibilityList.appendChild(responsibilityElement);
  });

  // Load achievements dynamically
  const achievementList = document.getElementById('achievement-list');
  achievements.forEach(item => {
    const achievementElement = document.createElement('div');
    achievementElement.className = 'bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl';

    let achievementHTML = `
      <img src="${item.image}" alt="${item.title}" class="mb-4 rounded-md object-cover h-48 w-full">
      <h4 class="text-2xl font-bold mb-2">${item.title}</h4>
      <p class="mb-4">${item.description}</p>
    `;

    achievementElement.innerHTML = achievementHTML;
    achievementList.appendChild(achievementElement);
  });

  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    // Simulate a form submission success message
    const successMessage = document.createElement('div');
    successMessage.className = 'bg-green-100 text-green-800 p-4 rounded-md mt-4';
    successMessage.textContent = 'Message sent successfully!';
    
    // Append the success message to the form and remove it after a few seconds
    contactForm.appendChild(successMessage);
    setTimeout(() => {
      successMessage.remove();
      contactForm.reset();
    }, 3000);
  });
});
