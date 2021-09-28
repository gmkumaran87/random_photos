const photosFetch = new FetchPhoto();

const init = async() => {
    const photos = await photosFetch.fetchPhotos();

    console.log(photos);
};

// Initializing the Phots App
init();