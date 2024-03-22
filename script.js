function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', function() {
  // Japanese representation of "Suhail Ahamed"
  var japaneseName = 'スハイル アハメド アハメ';
  var englishName = 'Suhail Ahamed';

  // Set the text content to the Japanese representation
  var title = document.querySelector('.title');
  title.textContent = japaneseName;

  // Show the title
  title.style.visibility = 'visible';

  // After a delay, change each letter one after another to English
  var delay = 100; // milliseconds

  for (let i = 0; i < englishName.length; i++) {
    setTimeout(function() {
      title.textContent = replaceAt(title.textContent, i, englishName[i]);
    }, delay * (i + 1));
  }
});

// Function to replace character at specific index in a string
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}z
document.querySelectorAll('.view-details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const overlay = button.nextElementSibling;
    overlay.classList.add('show-details');
    document.body.classList.add('blur-background');
  });
});

document.querySelectorAll('.close-details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const overlay = button.parentElement;
    overlay.classList.remove('show-details');
    document.body.classList.remove('blur-background');
  });
});

function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
  // Implement your toggle menu function here if needed
}