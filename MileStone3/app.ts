//  Hide and Show skills section

const toggleButton = document.getElementById("toggle") as HTMLButtonElement;
const skill_section = document.getElementById("skill_section") as HTMLElement;

toggleButton?.addEventListener("click", () => {
  if (skill_section?.style.display === "none") {
    skill_section.style.display = "block";
    toggleButton.textContent = "Hide Skills";
  } else {
    skill_section.style.display = "none";
    toggleButton.textContent = "Show Skills";
  }
});

// Form Validation
const form = document.getElementById("resumeForm") as HTMLFormElement;

// form submission data
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  // storing Form Elements into variables
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const profileInput = document.getElementById(
    "profileImage"
  ) as HTMLInputElement;

  const aboutInput = document.getElementById("about") as HTMLTextAreaElement;
  const educationInput = document.getElementById(
    "education"
  ) as HTMLTextAreaElement;

  const skillsInput = document.getElementById("skills") as HTMLTextAreaElement;
  const experienceInput = document.getElementById(
    "experience"
  ) as HTMLTextAreaElement;

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const contactInput = document.getElementById("contact") as HTMLInputElement;

  // Assigning values to the resume display section
  const resumeName = document.getElementById("resumeName") as HTMLElement;
  const resumeContact = document.getElementById("resumeContact") as HTMLElement;
  const resumeEmail = document.getElementById("resumeEmail") as HTMLElement;
  const resumeAbout = document.getElementById("resumeAbout") as HTMLElement;
  const resumeEducation = document.getElementById(
    "resumeEducation"
  ) as HTMLElement;

  const resumeExperience = document.getElementById(
    "resumeExperience"
  ) as HTMLElement;
  
  const resumeSkillsList = document.querySelector(
    "#skill_section ul"
  ) as HTMLUListElement;

  // Update the resume with user inputs
  resumeName.innerText = nameInput.value;
  resumeContact.innerText = contactInput.value;
  resumeEmail.innerText = emailInput.value;
  resumeAbout.innerText = aboutInput.value;
  resumeEducation.innerText = educationInput.value;
  resumeExperience.innerText = experienceInput.value;

  // Clear the skills list
  resumeSkillsList.innerHTML = "";

  // Splitting the skills input by commas or new lines and updating the skills list
  const skills = skillsInput.value.split(/[\n,]+/);
  skills.forEach((skill) => {
    if (skill.trim()) {
      const li = document.createElement("li");
      li.className = "para resumeSkill";
      li.innerText = skill.trim();
      resumeSkillsList.appendChild(li);
    }
  });

  // If a profile image is uploaded, show it
  const resumeImage = document.getElementById(
    "resumeImage"
  ) as HTMLImageElement;
  const file = profileInput.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      resumeImage.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
});
