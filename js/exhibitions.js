class ListExhibitions {
    constructor(container = ".exhibitions__box") {
        this.container = document.querySelector(container);
        this.goods = [
            {
                id: 1,
                times: "28 апреля 2022 — 3 июля 2022",
                title: "Генрих Семирадский. По примеру богов",
                addres: "Новая Третьяковка",
                img: "img/heinrichSemiradsky.jpg",
            },
            {
                id: 2,
                times: "25 мая 2022 — 18 сентября 2022",
                title: "Гурий Захаров. Татьяна Соколова. Вдвоем",
                addres: "Новая Третьяковка",
                img: "img/guryZakharov.jpg",
            },
            {
                id: 3,
                times: "7 декабря 2021 — 27 ноября 2022",
                title: "История российского дизайна. Избранное. 1917&ndash;2022",
                addres: "Западное крыло Новой Третьяковки",
                img: "img/russianDesign.jpg",
            },
            {
                id: 4,
                times: "27 мая 2022 — 13 ноября 2022",
                title: "Мастера возрождения. Реставрация графики.&nbsp;2010&nbsp;&mdash; 2022",
                addres: "Третьяковская галерея",
                img: "img/renaissanceMasters.jpg",
            },
            {
                id: 5,
                times: "8 июня 2022 — 2 октября 2022",
                title: "Петр Великий. Усы властелина",
                addres: "Третьяковская галерея",
                img: "img/greatePeter.jpg",
            },
            {
                id: 6,
                times: "15 апреля 2022 — 14 августа 2022",
                title: "Лики модерна",
                addres: "Инженерный корпус",
                img: "img/exhibitions-6.jpg",
            },
        ];
        this.allItems = [];
        this.render();
    }

    render() {
        for (let good of this.goods) {
            let item = new ItemExhibitions(good);
            this.allItems.push(item);
            this.container.insertAdjacentHTML("beforeend", item.getMarkup());
        }
    }
}

class ItemExhibitions {
    constructor(element) {
        this.id = element.id;
        this.times = element.times;
        this.title = element.title;
        this.addres = element.addres;
        this.img = element.img;
    }

    getMarkup() {
        return `
        <div class="exhibitions__item" data-id="${this.id}">
            <img src="${this.img}" class="exhibitions__item-img" alt="exhibitions img" height="384">
            <a class="exhibitions__item-adt" href="#">Уже идет</a>
            <a href="#" class="exhibitions__item-buy">Купить билет</a>
            <div class="exhibitions__item-desc">
                <p>${this.times}</p>
                <h4>${this.title}</h4>
                <span>${this.addres}</span>
            </div>
        </div>
        `;
    }
}

const listExhibitions = new ListExhibitions();