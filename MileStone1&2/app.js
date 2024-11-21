//  Hide and Show skills section
var toggleButton = document.getElementById("toggle");
var skill_section = document.getElementById("skill_section");
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    if ((skill_section === null || skill_section === void 0 ? void 0 : skill_section.style.display) === "none") {
        skill_section.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skill_section.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
});
