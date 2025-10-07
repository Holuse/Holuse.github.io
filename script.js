var isMenuOn = false;

function menuButtonClicked() {
    isMenuOn = !isMenuOn;
    const menu = document.getElementById("side_menu");
    if (menu) {
        menu.classList.toggle("active", isMenuOn);
    }
}

const menuButton = document.getElementById("menu_button");
if (menuButton) menuButton.addEventListener("click", menuButtonClicked);

function setText(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    if (Array.isArray(value)) {
        el.textContent = value.join(" ");
    } else {
        el.textContent = value;
  }
}
function changeLanguage(lang) {

    localStorage.setItem("selectedLanguage", lang);

    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
        setText("header_h1", data.welcome)
        setText("link1", data.about);
        setText("link2", data.projects);
        setText("link3", data.cv);
        setText("link4", data.contact);
        setText("about_me_h1", data.about_me_h1);
        setText("about_me_p", data.about_me_p);
        setText("my_interest_h1", data.my_interest_h1);
        setText("my_interest_p", data.my_interest_p);
        setText("education_h1", data.education_h1);
        setText("education_p", data.education_p);
        setText("career_goals_h1", data.career_goals_h1);
        setText("career_goals_p", data.career_goals_p);
        setText("header_h1_projects", data.header_h1_projects);
        setText("curr_projects_h1", data.curr_projects_h1);
        setText("curr_projects_p", data.curr_projects_p);
        setText("github", data.github);
        setText("header_cv_h1", data.header_cv_h1);
        setText("cv_id", data.cv_id);
        setText("cv_below", data.cv_below);
        setText("header_contact_h1", data.header_contact_h1);
        setText("skills_h1", data.skills_h1);
        document.getElementById("email_contact").innerHTML = `
            ${data.email_contact} 
            <a href="mailto:mehmetemree0@gmail.com">mehmetemree0<br>@gmail.com</a>
        `;
        document.getElementById("linkedin_contact").innerHTML = `
            ${data.linkedin_contact} 
            <a href="https://www.linkedin.com/in/mehmet-emre-b%C3%B6rek%C3%A7i-7b3a25378/" target="_blank"><br>LinkedIn</a>
        `;
        document.getElementById("github_contact").innerHTML = `
            ${data.github_contact} 
            <a href="https://github.com/Holuse" target="_blank">GitHub</a>
        `;
        
        document.getElementById("cv_iframe").src = data.cv_pdf[lang];
        })
        .catch(err => console.error("Dil dosyası yüklenemedi:", err));
}
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLang);
    setTimeout(() => {
        document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.classList.add('filled');
        });
    }, 500);
});
