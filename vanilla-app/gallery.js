const baseUrl = "http://188.166.203.164";

export function renderGallery(images) {

    let galleryDiv = document.createElement("div");

    let galleryHeader = document.createElement("h1");
    galleryHeader.textContent = "Image Gallery";

    galleryDiv.appendChild(galleryHeader);

    let galleryContent = document.createElement("div");
    galleryContent.className = "gallery"
    images.map(async (image, index) => {

        let pictureDiv = document.createElement("div");
        pictureDiv.className = "picture";

        let picture = await renderImageToCanvas(baseUrl + image.image_url);
        pictureDiv.appendChild(picture);

        let saveImageButton = renderSaveImageButton(image.image_url, picture);
        pictureDiv.appendChild(saveImageButton);

        galleryContent.appendChild(pictureDiv);
    });

    galleryDiv.appendChild(galleryContent);

    const appDiv = document.getElementById("app");
    appDiv.appendChild(galleryDiv);
}

async function renderImageToCanvas(imageUrl) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    img.addEventListener("load", () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0)
    });

    return ctx.canvas;
}

function renderSaveImageButton(image_url, canvas){
    const saveImageButton = document.createElement('button');
    saveImageButton.className = 'saveButton'
    saveImageButton.innerText = 'Save Image';
    saveImageButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = image_url.split("/").slice(-1)
        link.href = canvas.toDataURL('image/png')
        link.click();
    });

    return saveImageButton;
}