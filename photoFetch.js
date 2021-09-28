class FetchPhoto {
    constructor() {
        this.ACCESS_KEY = "-H_5o1EHO_b8oDstXoji_5DmyEi1j7awAhKxbRTt_2I";
    }

    fetchPhotos = async() => {
        const data = await fetch(
            `https://api.unsplash.com/photos/?client_id=${this.ACCESS_KEY}`
        );

        const photos = await data.json();

        return photos;
    };
}