const photosFetch = new FetchPhoto();
const ui = new UI();

const init = async() => {
    const photos = await photosFetch.fetchPhotos();

    ui.displayImages(photos);
};

// Initializing the Phots App
init();