class ListEvents {
    constructor(container = ".events__box") {
        this.container = document.querySelector(container);
        this.goods = [
            {
                id: 1,
                times: "3 июля 2022 15:00",
                title: "Экскурсия по&nbsp;выставке &laquo;История российского дизайна. Избранное. 1917-2022&raquo;",
                addres: "Западное крыло Новой Третьяковки",
                img: "img/event-1.jpg",
            },
            {
                id: 2,
                times: "23 июля 2022 17:00",
                title: "Вечер в&nbsp;рамках проекта &laquo;Музыкальная гостиная&raquo;, посвященный дню памяти В.М. Васнецова.",
                addres: "Музей Виктора Васнецова",
                img: "img/event-2.jpg",
            },
            {
                id: 3,
                times: "13 июля 2022 19:00",
                title: "Лекция к&nbsp;выставке &laquo;Лики модерна&raquo;. Федор Боткин, Иван Горюшкин-Сорокопудов, Ольга Делла-Вос-Кардовская",
                addres: "Инженерный корпус",
                img: "img/event-3.jpg",
            },
        ];
        this.allItems = [];
        this.render();
    }

    render() {
        for (let good of this.goods) {
            let item = new ItemEvents(good);
            this.allItems.push(item);
            this.container.insertAdjacentHTML("beforeend", item.getMarkup());
        }
    }
}

class ItemEvents {
    constructor(element) {
        this.id = element.id;
        this.times = element.times;
        this.title = element.title;
        this.addres = element.addres;
        this.img = element.img;
    }

    getMarkup() {
        return `
        <a href="#" class="events__item" data-id="${this.id}">
            <img src="${this.img}" class="events__item-img" alt="events img" height="384">
            <p class="events__item-adt">Скоро будет</p>
            <button class="events__item-buy">Купить билет</button>
            <div class="events__item-desc">
                <p>${this.times}</p>
                <h4>${this.title}</h4>
                <span>${this.addres}</span>
            </div>
        </a>
        `;
    }
}

const listEvents = new ListEvents();