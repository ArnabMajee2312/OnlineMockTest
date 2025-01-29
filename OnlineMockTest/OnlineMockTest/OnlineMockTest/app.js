document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homeLink');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
    const accountLink = document.getElementById('accountLink');
    const registerSection = document.getElementById('register-section');
    const loginSection = document.getElementById('login-section');
    const welcomeSection = document.getElementById('welcome-section');
    const testSection = document.getElementById('test-section');
    const resultSection = document.getElementById('result-section');
  
    // Dummy data for test questions
    const testQuestions = {
      reasoning: [
        { question: 'Reasoning Question 1', options: ['A', 'B', 'C', 'D'], correct: 'A' },
        { question: 'Reasoning Question 2', options: ['A', 'B', 'C', 'D'], correct: 'B' }
      ],
      aptitude: [
        { question: 'Aptitude Question 1', options: ['A', 'B', 'C', 'D'], correct: 'C' },
        { question: 'Aptitude Question 2', options: ['A', 'B', 'C', 'D'], correct: 'D' }
      ],
      gk: [
        { question: 'GK Question 1', options: ['A', 'B', 'C', 'D'], correct: 'A' },
        { question: 'GK Question 2', options: ['A', 'B', 'C', 'D'], correct: 'B' }
      ],
      math: [
        { question: 'Math Question 1', options: ['A', 'B', 'C', 'D'], correct: 'C' },
        { question: 'Math Question 2', options: ['A', 'B', 'C', 'D'], correct: 'D' }
      ]
    };
  
    // Navigation event listeners
    homeLink.addEventListener('click', () => {
      showSection(welcomeSection);
    });
  
    registerLink.addEventListener('click', () => {
      showSection(registerSection);
    });
  
    loginLink.addEventListener('click', () => {
      showSection(loginSection);
    });
  
    // Show specific section
    function showSection(section) {
      registerSection.classList.add('hidden');
      loginSection.classList.add('hidden');
      welcomeSection.classList.add('hidden');
      testSection.classList.add('hidden');
      resultSection.classList.add('hidden');
  
      section.classList.remove('hidden');
    }
  
    // Event listeners for category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        startTest(category);
      });
    });
  
    // Function to start a test
    function startTest(category) {
      const questions = testQuestions[category] || [];
      const questionsContainer = document.getElementById('questions-container');
      questionsContainer.innerHTML = '';
  
      questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
          <p>${index + 1}. ${q.question}</p>
          ${q.options.map((option, i) => `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label>`).join('<br>')}
        `;
        questionsContainer.appendChild(questionDiv);
      });
  
      document.getElementById('submitTest').classList.remove('hidden');
      showSection(testSection);
    }
  });
  
  document.getElementById('submitTest').addEventListener('click', function () {
    // Collecting data (example)
    const results = [
      { question: "Q1", answer: "A", correct: true },
      { question: "Q2", answer: "B", correct: false },
      // More questions and answers...
    ];
  
    // Convert data to CSV
    const csvData = convertToCSV(results);
  
    // Download the CSV file
    downloadCSV(csvData, 'test_results.csv');
  });
  
  // Function to convert JSON data to CSV format
  function convertToCSV(data) {
    const headers = Object.keys(data[0]).join(',') + '\n';
    const rows = data.map(row => Object.values(row).join(',')).join('\n');
    return headers + rows;
  }
  
  // Function to download the CSV file
  function downloadCSV(csvData, filename) {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  // JavaScript for handling the submission and displaying a message box

document.addEventListener('DOMContentLoaded', function () {
    const submitTestButton = document.getElementById('submitTest');
    const resultSection = document.getElementById('result-section');
    const resultDisplay = document.getElementById('result-display');
  
    submitTestButton.addEventListener('click', function () {
      // You can update the result display here if needed
      resultSection.classList.remove('hidden');
    });
  });
  
  // Function to show a custom message box
  function showMessageBox(message) {
    // Create the message box container
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
  
    // Create the content for the message box
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerText = message;
  
    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', function () {
      document.body.removeChild(messageBox);
      showSection(index.html); 
    });

  
    // Append content and button to the message box
    messageBox.appendChild(messageContent);
    messageBox.appendChild(closeButton);
  
    // Add the message box to the body
    document.body.appendChild(messageBox);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const successMessage = document.getElementById('successMessage');
    const displayUsername = document.getElementById('displayUsername');
  
    // Handle registration
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent page refresh
  
      const username = document.getElementById('registerUsername').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
  
      // Immediately show the success message
      successMessage.textContent = 'Successfully Registered!';
      successMessage.classList.remove('hidden');
      successMessage.classList.add('success');
  
      // Show the username in the header
      displayUsername.textContent = username;
  
      // Hide the register section and show the home page
      document.getElementById('register-section').classList.add('hidden');
    });
  
    // Handle login
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent page refresh
  
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      // Immediately show the success message
      successMessage.textContent = 'Successfully Logged In!';
      successMessage.classList.remove('hidden');
      successMessage.classList.add('success');
  
      // Example of retrieving the username (you may use email to fetch username)
      const username = 'User'; // Replace with the actual username fetching logic
  
      // Show the username in the header
      displayUsername.textContent = username;
  
      // Hide the login section and show the home page
      document.getElementById('login-section').classList.add('hidden');
    });
  });

  // Dropdown category selection
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
  btn.addEventListener('click', function(event) {
    const category = event.target.getAttribute('data-category');
    console.log(`Category selected: ${category}`);
    // You can add logic here to filter content or load tests based on the category selected.
  });
});

// Start Test button
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function() {
  console.log('Test started');
  // You can add logic to start the test when the button is clicked, like redirecting to another page or showing questions.
});

  