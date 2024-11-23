//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const downloadImage = (image) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
		img.src = image.url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
        
    });
};
function downloadAndDisplayImages() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous images

    const imagePromises = images.map(url => downloadImage(url));

    Promise.all(imagePromises)
        .then(images => {
            images.forEach(img => {
                outputDiv.appendChild(img);
            });
        })
        .catch(error => {
            console.error(error);
        });
}

// Add event listener to the button
document.getElementById('download-images-button').addEventListener('click', downloadAndDisplayImages);