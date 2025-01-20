// Function to handle email link creation and navigation
const sendEmail = () => {
    const email = "anselmobelmar@gmail.com";  // Replace with your email address
    const subject = "Inquiry from Portfolio";
    const body = "Hello, I would like to get in touch with you regarding your work.";
    
    // Create a mailto link and navigate to it
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  
  // Function to manage active tab class
  const setActiveTab = (event) => {
    const tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(tab => tab.classList.remove('active')); // Remove active class from all tabs
    event.target.classList.add('active');  // Add active class to the clicked tab
  };
  
  // Event listener for the "Email Me" button
  const emailButton = document.getElementById('emailButton');
  if (emailButton) {
    emailButton.addEventListener('click', sendEmail);
  }
  
  // Event listener for all tab links
  const tabs = document.querySelectorAll('.tab-link');
  tabs.forEach(tab => {
    tab.addEventListener('click', setActiveTab);
  });
  
  // Optionally, set the first tab to be active by default
  document.querySelector('.tab-link')?.classList.add('active');
  
  // Create the "Back to Top" button dynamically using JavaScript
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = "↑"; // Button text
  backToTopBtn.id = "backToTopBtn";
  document.body.appendChild(backToTopBtn);
  
  // Function to show or hide the Back to Top button based on scroll position
  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block"; // Show the button when scrolling down
    } else {
      backToTopBtn.style.display = "none"; // Hide the button when at the top
    }
  };
  
  // Function to scroll back to top
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  });
  