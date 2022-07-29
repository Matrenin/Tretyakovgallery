class ListBuilding {
    constructor(container = ".building__box") {
        this.container = document.querySelector(container);
        this.goods = [
            {   
                id: 1,
                title: "Третьяковская галерея",
                addres: "г. Москва, Лаврушинский переулок, 10",
                desc: "Древнерусское искусство XII&ndash;XVII&nbsp;веков, русская живопись, скульптура и&nbsp;графика XVIII&nbsp;&mdash; начала&nbsp;ХХ века, декоративно-прикладное искусство, выставки классического искусства, концерты.",
                img: "img/mainTretyakov.jpg",
            },
            {
                id: 2,
                title: "Новая Третьяковка",
                addres: "г. Москва, Крымский Вал, 10",
                desc: "Шедевры искусства&nbsp;ХХ столетия и&nbsp;актуальные течения XXI века&nbsp;&mdash; авангард, соцреализм, нонконформизм.",
                img: "img/newTretyakov.jpg"
            },
            {
                id: 3,
                title: "Западное крыло Новой Третьяковки",
                addres: "г. Москва, Крымский Вал, д. 10",
                desc: "Западное крыло бывшего пространства Центрального дома художника на&nbsp;Крымском Валу перешло в&nbsp;ведение Третьяковской галереи в&nbsp;2019 году.",
                img: "img/westTretyakov.jpg",
            },
        ];
        this.allItems = [];
        this.render();
    }

    render() {
        for(let good of this.goods) {
            let item = new ItemBuilding(good);
            this.allItems.push(item);
            this.container.insertAdjacentHTML("beforeend", item.getMarkup());
        }
    }
}

class ItemBuilding {
    constructor(element) {
        this.id = element.id;
        this.title = element.title;
        this.addres = element.addres;
        this.desc = element.desc;
        this.img = element.img;
    }

    getMarkup() {
        return `
    <div class="building__item" data-id="${this.id}">
        <img src="${this.img}" alt="some img" width="500" height="207">
        <h3>${this.title}</h3>
        <div class="building__item-opening">
            <div class="building__item-opening-title" data-id="${this.id}">
                <p>Рабочее время</p>
                <img class="arrow-down" data-id="${this.id}" src="img/vector-down.svg" alt="some img">
            </div>
            <div class="building__item-opening-desc hidden" data-id="${this.id}">
                <div class="building__item-opening-days">
                    <p>ВС, ВТ, СР</p>
                    <p>ПН</p>
                    <p>ЧТ, ПТ, СБ</p>
                </div>
                <div class="building__item-opening-clocks">
                    <p>10:00 — 21:00 (кассы и вход до 20:00)</p>
                    <p>выходной</p>
                    <p>10:00 — 18:00 (кассы и вход до 17:00)</p>    
                </div>
            </div>
        </div>
        <div class="building__item-addres">
            <svg data-v-7d349d5f="" width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path         data-v-7d349d5f="" d="M5.10535 13.3012C5.10535 13.3012 5.4923 11.9851 6.262 11.0779C7.76822 9.30262 10.1946 8.18769 10.1946 5.29744C10.1946 2.59611 7.91608 0.40625 5.10535 0.40625C2.29462 0.40625 0.0160675 2.59611 0.0160675 5.29744C0.0160675 8.18769 2.44017 9.30861 3.94869 11.0779C4.69608 11.9545 5.10535 13.3012 5.10535 13.3012Z" fill="#999999"></path> <path data-v-7d349d5f="" d="M5.10521 7.52075C6.38282 7.52075 7.41852 6.52536 7.41852 5.29749C7.41852 4.06961 6.38282 3.07422 5.10521 3.07422C3.8276 3.07422 2.7919 4.06961 2.7919 5.29749C2.7919 6.52536 3.8276 7.52075 5.10521 7.52075Z" fill="white"></path>
            </svg>
            <span>${this.addres}</span>
        </div>
        <p class="building__item-desc">${this.desc}</p>
        <div class="building__item-down">
            <a href="#">Подробнее</a>
            <button>Купить билет</button>
        </div>
    </div>`;
    }
}

const listBuilding = new ListBuilding();

let workTimeEls = document.querySelectorAll(".building__item-opening-title");
let openingDescEls = document.querySelectorAll(".building__item-opening-desc");
let arrowEls = document.querySelectorAll(".arrow-down");

function showOpening(array, newClass) {
    workTimeEls.forEach(el => {
        el.addEventListener("click", event => {
            let id = event.currentTarget.dataset.id;
            for (let arr of array) {
                if (arr.dataset.id === id) {
                    arr.classList.toggle(newClass);
                }
            }
        });
    }); 
}

showOpening(openingDescEls, "hidden");
showOpening(arrowEls, "arrow-up");
