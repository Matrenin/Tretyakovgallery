class ListCollection {
    constructor(container = ".collection__box") {
        this.container = document.querySelector(container);
        this.goods = [
            {
                id: 1,
                author: "Поленов Василий Дмитриевич",
                title: "Заросший пруд",
                img: "img/collection-1.jpg",
            },
            {
                id: 2,
                author: "Айвазовский Иван Константинович",
                title: "Радуга",
                img: "img/collection-2.jpg",
            },
            {
                id: 3,
                author: "Шишкин Иван Иванович",
                title: "Утро в сосновом лесу",
                img: "img/collection-3.jpg",
            },
        ];
        this.allItems = [];
        this.render();
    }

    render() {
        for (let good of this.goods) {
            let item = new ItemCollection(good);
            this.allItems.push(item);
            this.container.insertAdjacentHTML("beforeend", item.getMarkup());
        }
    }
}

class ItemCollection {
    constructor(element) {
        this.id = element.id;
        this.author = element.author;
        this.title = element.title;
        this.img = element.img;
    }

    getMarkup() {
        return `
        <a href="#" class="collection__item" data-id="${this.id}">
            <div class="collection__item-box-img">
                <img src="${this.img}" class="collection__item-img" alt="collection img" height="326">
            </div>
            <div class="collection__item-desc">
                <h4>${this.author}</h4>
                <p>${this.title}</p>
            </div>
        </a>
        `;
    }
}

const listCollection = new ListCollection();