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

    const inpValue = document.getElementById("photoImg");

    const newPhotos = await photosFetch.findPhotos(inpValue.value);

    ui.displayImages(newPhotos);
    inpValue.value = "";
};
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", handleSubmit);