export async function acceptTermsOfUse(termsOfUse) {
    return new Promise((resolve) => {
        let termsOfUseDiv = document.createElement("div");
        termsOfUseDiv.className = "termsOfUse";
        termsOfUseDiv.id = "termsOfUseId";

        let termsOfUseDivHeader = document.createElement("h1");
        termsOfUseDivHeader.textContent = "Terms of Use";

        termsOfUseDiv.appendChild(termsOfUseDivHeader);

        termsOfUse.paragraphs.map((paragraph, index) => {
            let termsParagraph = createParagraph(paragraph);
            termsOfUseDiv.appendChild(termsParagraph);
        })   

        const acceptButton = document.createElement('button');
        acceptButton.className = 'acceptButton'
        acceptButton.innerText = 'Accept';
        acceptButton.addEventListener('click', () => {
            const divToRemove = document.getElementById("termsOfUseId");
            divToRemove.parentNode.removeChild(divToRemove);
            resolve();
        });

        termsOfUseDiv.appendChild(acceptButton);

        const appDiv = document.getElementById("app");
        appDiv.appendChild(termsOfUseDiv);
    })
}

function createParagraph(paragraph) {
    let paragraphDiv = document.createElement("div");
    paragraphDiv.className = "termsOfUseParagraph";

    let paragraphHeader = document.createElement("h2");
    paragraphHeader.textContent = paragraph.title;

    let paragraphContent = document.createElement("p");
    paragraphContent.textContent = paragraph.content || paragraph.text;

    paragraphDiv.appendChild(paragraphHeader);
    paragraphDiv.appendChild(paragraphContent);

    return paragraphDiv;
}