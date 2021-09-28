class UI {
    constructor() {
        this.cards = document.querySelector(".section-center");
        this.btnCnt = document.querySelector(".btn-pages");
    }

    displayUsers(records) {
        this.cards.innerHTML = "";
        records.forEach((el) => {
            this.cards.append(this.generateCards(el));
        });
    }