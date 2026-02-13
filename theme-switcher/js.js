const dropdown = document.querySelector("#theme-selector");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const body = document.querySelector("body");

dropdown.addEventListener("change", changeTheme);

function changeTheme() {
    localStorage.setItem("theme", dropdown.value);

    if (dropdown.value === "light") {
        header.dataset.theme = "light";
        main.dataset.theme = "light";
        footer.dataset.theme = "light";
        main.innerHTML = `<p>Content</p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors"
        >Attribute selectors on MDN</a
      >
      `
    }
    else if (dropdown.value === "dark") {
        header.dataset.theme = "dark";
        main.dataset.theme = "dark";
        footer.dataset.theme = "dark";
        main.innerHTML = `<p>Content</p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors"
        >Attribute selectors on MDN</a
      >
      `
    }
    else if (dropdown.value === "hawaii") {
        header.dataset.theme = "hawaii";
        main.dataset.theme = "hawaii";
        main.innerHTML = `<p>Content</p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors"
        >Attribute selectors on MDN</a
      ><img src="hawaii.webp" alt="">
      `
        footer.dataset.theme = "hawaii";
    }
}

document.addEventListener("DOMContentLoaded", savedTheme);

function savedTheme() {
    header.dataset.theme = `${localStorage.theme}`;
    main.dataset.theme = `${localStorage.theme}`;
    footer.dataset.theme = `${localStorage.theme}`;
    dropdown.value = `${localStorage.theme}`;
}