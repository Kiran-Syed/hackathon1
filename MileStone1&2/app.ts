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