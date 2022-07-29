class ListExcursions {
    constructor(container = ".excursions__box") {
        this.container = document.querySelector(container);
        this.goods = [
            {
                id: 1,
                title: "Обзорная экскурсия по&nbsp;Музею Павла и&nbsp;Сергея Третьяковых",
                addres: "Музей Павла и Сергея Третьяковых",
                img: "img/excursion-1.jpg",
            },
            {
                id: 2,
                title: "Пешеходная экскурсия &laquo;От&nbsp;Третьяковской галереи до&nbsp;Новой Третьяковки. Прогулка между прошлым и&nbsp;будущим&raquo; 12+",
                addres: "Третьяковская галерея",
                img: "img/excursion-2.jpg",
            },
            {
                id: 3,
                title: "10&nbsp;шедевров древнерусского искусства.&nbsp;60&nbsp;минут&nbsp;14+",
                addres: "Третьяковская галерея",
                img: "img/excursion-3.png",
            },
            {
                id: 4,
                title: "10&nbsp;шедевров Третьяковской галереи&nbsp;14+",
                addres: "Третьяковская галерея",
                img: "img/excursion-4.png",
            },
            {
                id: 5,
                title: "Бытовая картина",
                addres: "Третьяковская галерея",
                img: "img/excursion-5.jpg",
            },
            {
                id: 6,
                title: "Времена года",
                addres: "Третьяковская галерея",
                img: "img/excursion-6.jpg",
            },
        ];
        this.allItems = [];
        this.render();
    }

    render() {
        for (let good of this.goods) {
            let item = new ItemExcursions(good);
            this.allItems.push(item);
            this.container.insertAdjacentHTML("beforeend", item.getMarkup());
        }
    }
}

class ItemExcursions {
    constructor(element) {
        this.id = element.id;
        this.title = element.title;
        this.addres = element.addres;
        this.img = element.img;
    }

    getMarkup() {
        return `
        <div class="excursoins__item">
            <div class="excursions__item" data-id="${this.id}">
                <img src="${this.img}" class="excursions__item-img" alt="excursions img" height="384">
                <a class="excursions__item-adt" href="#">Уже идет</a>
                <a href="#" class="excursions__item-buy">Купить билет</a>
                <div class="excursions__item-desc">
                    <h4>${this.title}</h4>
                    <span>${this.addres}</span>
                </div>
            </div>
        </div>
        `;
    }
}

const listExcursions = new ListExcursions();