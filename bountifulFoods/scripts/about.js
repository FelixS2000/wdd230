const lastModifiedDate = document.lastModified;
const footer = document.querySelector("span");
footer.innerHTML += `<p>Last Modified: ${lastModifiedDate}</p>`;
