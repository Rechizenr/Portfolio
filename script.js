// Scroll Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = 'Top';
backToTopBtn.style = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none;
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show More Projects Button
const showMoreBtn = document.createElement('button');
showMoreBtn.textContent = 'Show More';
showMoreBtn.style = `
  margin-top: 10px;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const projectsSection = document.getElementById('projects');
projectsSection.appendChild(showMoreBtn);

showMoreBtn.addEventListener('click', () => {
  const newProject = document.createElement('p');
  newProject.innerHTML = `<strong>Project 3:</strong> Blog Website - A platform for creating and managing blogs.`;
  projectsSection.appendChild(newProject);
  showMoreBtn.remove();
});
