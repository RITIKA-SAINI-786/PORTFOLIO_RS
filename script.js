document.addEventListener('DOMContentLoaded', () => {
  // Sample projects data
  const projects = [
    {
      title: 'MAPS USING JAVA',
      description: 'The project is a Java-based mapping application using the JXMapViewer library to display and manage geographical waypoints.',
      link: 'https://github.com/RITIKA-SAINI-786/MAPS_USING_JAVA',
      image: 'JAVA_MAPS',
      Video:'https://drive.google.com/file/d/1w8vyxldBBnN4i2QAiNYzYkX_OrVkNjy1/view?usp=drive_link',
    },
    {
      title: 'Bank Management System',
      description: 'This Bank Management System is a comprehensive Java-based application designed to manage bank operations efficiently.',
      link: 'https://github.com/RITIKA-SAINI-786/BANK_MANAGEMENT_SYSTEM',
      image: 'Bank.jpg',
      video: 'https://drive.google.com/file/d/1TKPIsTzpm2-HghS4bbPJL1xRTKKWXDan/view?usp=sharing',
    },
    {
      title: 'Forest Fire Prediction System',
      description: 'A project focused on predicting forest fires using Oxygen , Temperature and Humidity level of the particular region and with skills of full-stack development.',
      link: 'https://github.com/RITIKA-SAINI-786/Forest_Fire_Prediction_System',
      image: 'Forest_Fire.png',
      video: 'https://drive.google.com/file/d/1x9GhrzDpIDnrrKrG2jggiMidhOpB6ttG/view?usp=sharing',
    },
    {
      title:'Portfolio',
      description: 'A dynamic and visually appealing personal portfolio showcasing skills, projects, and achievements. Developed using HTML, CSS, and JavaScript',
      image: 'portfolio.jpg',
    },
  ];

  // Sample responsibilities data
  const responsibilities = [
    {
      title: 'Vice President, Student Council, CCET',
      description: 'Serving as the Student Council Vice President in my college (2024 - 2025).',
     image: 'council.png',
    },
   
    {
      title: 'Executive Member, ArtStrong Club',
      description: 'Contributed to organizing and participating in club activities and events.',
      image : 'artstrong.jpg',
    },
    {
      title: 'Volunteer, Youth Against Injustice Foundation',
      description: 'Volunteered for various social initiatives , have organised various online awareness sessions and campaigns.',
      image: 'volunteer.jpg',
    },
    {
      title: 'NCC Cadet',
      description: 'Participated in National Cadet Corps (NCC) activities and training sessions.',
      image: 'NCC.jpg',
      
    },
  ];

  // Sample achievements data
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
      <p class="mb-4">${project.description}</p>
      <a href="${project.link}" class="text-indigo-600 underline hover:text-indigo-800">View Project</a>
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
