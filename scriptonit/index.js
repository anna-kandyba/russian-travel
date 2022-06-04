let russian = {
    heading: "Путешествия по России",
    subtitle: "Настоящая страна не в выпусках новостей, а здесь.",
};

let english = {
    heading: "Travel in Russia",
    subtitle: "The real country is not on the news, it's right here"
};

function translate(dictionary) {
    let title = document.getElementById("title");
    title.innerText = dictionary.heading;

    let subtitle = document.getElementById("subtitle");
    subtitle.innerText = dictionary.subtitle;
}

function buttonRuClick() {
    toggleRu.classList.add("header__lang-link_active");
    toggleEn.classList.remove("header__lang-link_active");
    translate(russian);
}

function buttonEnClick() {
    toggleRu.classList.remove("header__lang-link_active");
    toggleEn.classList.add("header__lang-link_active");
    translate(english);
}

let toggleRu = document.getElementById("toggleRu");
let toggleEn = document.getElementById("toggleEn");

toggleRu.addEventListener("click", buttonRuClick);
toggleEn.addEventListener("click", buttonEnClick);
