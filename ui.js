class UI {
    constructor() {
        this.cards = document.querySelector(".photos-section");
        //this.btnCnt = document.querySelector(".btn-pages");
    }

    displayImages(records) {
        this.cards.innerHTML = "";
        records.forEach((el) => {
            this.cards.append(this.generateCards(el));
        });
    }

    generateCards(obj) {
        const card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `<img class="img-id" src ="${obj.urls.regular}" alt="${obj.alt_description}">
                        <p class="name">Photographer: <span class="p-name">${obj.user.name}</span></p>
                        <p class="likes"> Likes: <span class="p-likes">${obj.likes}</span></p>`;
        return card;
    }
}