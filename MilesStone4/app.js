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
// Form Validation
var form = document.getElementById("resumeForm");
// form submission data
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // storing Form Elements into variables
    var nameInput = document.getElementById("name");
    var profileInput = document.getElementById("profileImage");
    var aboutInput = document.getElementById("about");
    var educationInput = document.getElementById("education");
    var skillsInput = document.getElementById("skills");
    var experienceInput = document.getElementById("experience");
    var emailInput = document.getElementById("email");
    var contactInput = document.getElementById("contact");
    // Assigning values to the resume display section
    var resumeName = document.getElementById("resumeName");
    var resumeContact = document.getElementById("resumeContact");
    var resumeEmail = document.getElementById("resumeEmail");
    var resumeAbout = document.getElementById("resumeAbout");
    var resumeEducation = document.getElementById("resumeEducation");
    var resumeExperience = document.getElementById("resumeExperience");
    var resumeSkillsList = document.querySelector("#skill_section ul");
    // Update the resume with user inputs
    resumeName.innerText = nameInput.value;
    resumeContact.innerText = contactInput.value;
    resumeEmail.innerText = emailInput.value;
    resumeAbout.innerText = aboutInput.value;
    resumeEducation.innerText = educationInput.value;
    resumeExperience.innerText = experienceInput.value;
    // Clear the skills list
    resumeSkillsList.innerHTML = '';
    // Splitting the skills input by commas or new lines and updating the skills list
    var skills = skillsInput.value.split(/[\n,]+/);
    skills.forEach(function (skill) {
        if (skill.trim()) {
            var li = document.createElement('li');
            li.className = 'para resumeSkill';
            li.innerText = skill.trim();
            resumeSkillsList.appendChild(li);
        }
    });
    // If a profile image is uploaded, show it
    var resumeImage = document.getElementById("resumeImage");
    var file = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            resumeImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
});
// print cv
var print_btn = document.getElementById('print_btn');
print_btn === null || print_btn === void 0 ? void 0 : print_btn.addEventListener("click", function () {
    window.print();
});
//  edit button code 
var edit_btn = document.getElementById('edit_btn');
edit_btn === null || edit_btn === void 0 ? void 0 : edit_btn.addEventListener("click", function () {
    window.history.back();
});
