const sendEmail = () => {
    const email = "anselmobelmar@gmail.com";  
    const subject = "Inquiry from Portfolio";
    const body = "Hello, I would like to get in touch with you regarding your work.";
    

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  
  
  const setActiveTab = (event) => {
    const tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(tab => tab.classList.remove('active')); 
    event.target.classList.add('active');  
  };
  
  
  const emailButton = document.getElementById('emailButton');
  if (emailButton) {
    emailButton.addEventListener('click', sendEmail);
  }
  
  
  const tabs = document.querySelectorAll('.tab-link');
  tabs.forEach(tab => {
    tab.addEventListener('click', setActiveTab);
  });
  
 
  document.querySelector('.tab-link')?.classList.add('active');
  
  
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = "↑"; 
  backToTopBtn.id = "backToTopBtn";
  document.body.appendChild(backToTopBtn);
  
  
  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block"; 
    } else {
      backToTopBtn.style.display = "none"; 
    }
  };
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  