let currentSection = 1;
let startX;

function onSectionTouchStart(e) {
  startX = e.changedTouches[0].clientX;
}

function onSectionTouchEnd(e) {
  const endX = e.changedTouches[0].clientX;
  const deltaX = startX - endX;

  if (deltaX > 50 && currentSection < 4) {
    currentSection++;
  } else if (deltaX < -50 && currentSection > 1) {
    currentSection--;
  }

  scrollToSection(currentSection);
}

function scrollToSection(sectionNumber) {
  const sectionId = "section" + sectionNumber;
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

// Add event listeners for the buttons
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");

nextButton.addEventListener("click", function() {
  if (currentSection < 4) {
    currentSection++;
    scrollToSection(currentSection);
  }
});

backButton.addEventListener("click", function() {
  if (currentSection > 1) {
    currentSection--;
    scrollToSection(currentSection);
  }
});