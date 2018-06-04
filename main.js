const article = document.querySelector("#messages");
const fragment = document.createDocumentFragment();

const section1 = document.createElement("section");
section1.className = "message";
section1.textContent = "oof";

const section2 = document.createElement("section");
section2.className = "message";
section2.textContent = "aye";

const section3 = document.createElement("section");
section3.className = "message";
section3.textContent = "ya";

const section4 = document.createElement("section");
section4.className = "message";
section4.textContent = "yeet";

const section5 = document.createElement("section");
section5.className = "message";
section5.textContent = "boi";

fragment.appendChild(section1)
fragment.appendChild(section2)
fragment.appendChild(section3)
fragment.appendChild(section4)
fragment.appendChild(section5)

article.appendChild(fragment)