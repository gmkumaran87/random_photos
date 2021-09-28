const photosFetch = new FetchPhoto();
const ui = new UI();

const init = async() => {
    const photos = await photosFetch.fetchPhotos();

    ui.displayImages(photos);
};

// Initializing the Phots App
init();

const handleSubmit = async(e) => {
    e.preventDefault();

    const inpValue = document.getElementById("photoImg").value;

    const newPhotos = await photosFetch.findPhotos(inpValue);
    console.log(newPhotos);
    ui.displayImages(newPhotos);
};
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", handleSubmit);