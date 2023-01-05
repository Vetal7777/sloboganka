import {initialStateI} from "../model/state";

const initialState:initialStateI = {
    error: null,
    // isLoading: true,
    isLoading: false,
    // content: null,
    content: {
        "header": [
            {
                "title": "главная",
                "link": "#article"
            },
            {
                "title": "о компании",
                "link": "#about"
            },
            {
                "title": "продукция",
                "link": "#goods"
            },
            {
                "title": "преимущества",
                "link": "#benefits"
            },
            {
                "title": "контакты",
                "link": "#contacts"
            }
        ],
        "article": {
            "title_h1": "Слобожанка",
            "title_h2": "качество на первом месте",
            "preview_video_link": "https://www.youtube.com/embed/RMZdbFlc_mU"
        },
        "goods": [
            {
                "id": "euro82",
                "pic_length": 30,
                "title": "Крышка ТВИСТ-ОФФ 82",
                "content": [
                    "Основной металл: жесть ЭЖК с классом покрытия оловом 5,6/5,6 на 1г/м.кв. Толщиной от 0,18 до 0,20",
                    "Типоразмер: 82",
                    "Наружное покрытие: эмали и покровные лаки фирмы Darex, PPG,Holak.",
                    "Внутреннее покрытие: грунт и адгезионный лак",
                    "Компаунд: на основе ПВХ — пластизоль под стерилизацию/ пастеризацию"
                ]
            },
            {
                "id": "euro66",
                "pic_length": 10,
                "title": "Крышка ТВИСТ-ОФФ 66",
                "content": [
                    "Основной металл: жесть ЭЖК с классом покрытия оловом 5,6/5,6 на 1г/м.кв. Толщиной от 0,18 до 0,20",
                    "Типоразмер: 66",
                    "Наружное покрытие: эмали и покровные лаки фирмы Darex, PPG,Holak.",
                    "Внутреннее покрытие: грунт и адгезионный лак",
                    "Компаунд: на основе ПВХ — пластизоль под стерилизацию/ пастеризацию"
                ]
            },
            {
                "id": "sng-home82",
                "pic_length": 4,
                "title": "Крышка СКО 1-82 хозяйственная",
                "content": [
                    "Основной металл: жесть ЭЖК с классом покрытия оловом 5,6/5,6 на 1г/м.кв. Толщиной от 0,17 до 0,20",
                    "Типоразмер: 82",
                    "Двустороннее покрытие: пищевые лаки и эмали PPG и HOLAK",
                    "Уплотнительное кольцо: викельное кольцо на основе каучука пищевого"
                ]
            },
            {
                "id": "sng-prom82",
                "pic_length": 18,
                "title": "Крышка СКО 1-82 для промышленного производства",
                "content": [
                    "Основной металл: жесть ЭЖК с классом покрытия оловом 5,6/5,6 на 1г/м.кв. Толщиной от 0,18 до 0,22",
                    "Типоразмер: 82",
                    "Наружное покрытие: пищевые лаки PPG и HOLAK",
                    "Внутреннее покрытие: эмаль РРG",
                    "Уплотнительное кольцо: викельное кольцо на основе каучука пищевого"
                ]
            },
            {
                "id": "sng58",
                "pic_length": 2,
                "title": "Крышка СКО 1-58",
                "content": [
                    "Основной металл: жесть ЭЖК с классом покрытия оловом 5,6/5,6 на 1г/м.кв. Толщиной от 0,18 до 0,22",
                    "Типоразмер: 58",
                    "Наружное покрытие: пищевые лаки PPG и HOLAK",
                    "Внутреннее покрытие: эмаль РРG",
                    "Уплотнительное кольцо: викельное кольцо на основе каучука пищевого"
                ]
            }
        ],
        "benefits": [
            {
                "title": "Выгодное сотрудничество",
                "content": "За годы плодотворного сотрудничества с основными поставщиками металла, такими как ArcelorMittal, Магнитогорским металлургическим комбинатом и Карагандинским металлургическим комбинатом Слобожанка достигает наиболее выгодных условий сотрудничества и поставки основного сырья"
            },
            {
                "title": "Постоянно развиваемся",
                "content": "Наличие полного технологического цикла изготовления металлоупаковки начиная от нарезки рулонной жести и заканчивая отгрузкой готовой продукции собственным транспортом на базе современного оборудования Soudronic AG (Швейцария), Celovani S.p.a., SIG Cantec Gmbh & Co.KG, Alfons-Haar Maschinenbau Gmb & Co.RG (Германия) и LTG Mailander (Германия)"
            },
            {
                "title": "Логистика",
                "content": "Наличие собственного транспортного подразделения и логистического центра, который позволяет с минимальными затратами осуществлять снабжение готовой продукции в любую точку Украины и стран СНГ"
            },
            {
                "title": "Безопасность",
                "content": "Команда специалистов сервисной службы предоставляет возможность обеспечить использование металлоупаковки в технологических процессах наших заказчиков с максимально возможной эффективностью и достичь минимальных показателей брака"
            }
        ],
        "history": [
            {
                "print": "history",
                "title": "История",
                "content": "Компания «Слобожанка» является одним из украинских лидеров по производству промышленных крышек типа СКО и Твист–Офф.\nC целью сохранения лидерства в производстве крышек для бутылок, жестяных банок для консервации, крышек Твист–Офф и СКО, компания «Слобожанка» организовывает работу на основе индивидуального подхода к каждому заказчику. Удовлетворение всех потребностей клиента предусматривает сотрудничество с ним на уровне, который максимально обеспечивает комплексность и приемлемость обслуживания.\n\nНаше предприятие стоит у истоков внедрения на Украине современных видов тары и упаковки мирового уровня."
            },
            {
                "print": "production",
                "title": "Производство",
                "content": "КНа сегодняшний день предприятие располагает несколькими производственными базами и тремя линиями по литографированию и лакированию жести.\n\nКоллектив компании «Слобожанка» – это настоящие профессионалы, которые готовы в кратчайшие сроки выполнить заказы клиентов.\n\nОдним из основных направлений деятельности является производство вакуумной крышки типа Твист-Офф и крышки СКО. Высокотехнологичное современное оборудование для производства крышек обеспечивает высокий уровень качества продукции и своевременность ее поставок. При производстве крышек используются высококачественные материалы от крупнейших мировых поставщиков."
            },
            {
                "print": "relationship",
                "title": "Индивидуальный подход к каждому клиенту",
                "content": "В зависимости от пожеланий заказчика мы предлагаем разнообразную металлическую крышку исходя из конкретного вида консервации и требований к внешнему виду готовой продукции. Рекомендованные толщины жести, внешнее и внутреннее покрытие-дают возможность заказчику получить за минимальную цену жестяную крышку СКО или ТВИСТ-ОФФ с необходимой именно для него функциональностью.\n\nКрышки изготавливаются для различных видов пищевой продукции, проходящих разные типы обработки, как для пастерилизации так и для высокотемпературной стерилизации, применяющих для жиросодержащих продуктов, а также любых цветов или с нанесением полноцветной печати.\n\nВ производстве используются только лучшее сырье и материал для выпуска исключительно качественной продукции."
            },
            {
                "print": "reliability",
                "title": "Надёжность",
                "content": "Наше предприятие использует в производстве исключительно белую жесть ЭЖК, необходимой толщины и класса покрытия олова, дабы не экономить на сырье за счет качества выпускаемой продукции.\n\nВ 2002 году дочернее предприятие получило премию «Российский Национальный Олимп».\n\nНадежность, качество и сервис-основные принципы работы на которых основана работа нашей компании\nРаботая с нашим предприятием Вы получаете надежного поставщика высококачественной продукции из жести, обеспечивая успешность Ваших товаров и бизнеса!!!\n\nНаша надежность, качества товара и сервис – это залог успешного бизнеса наших клиентов!!!!"
            }
        ],
        "contacts": {
            "phones": [
                "+38 (050) 323-51-55",
                "+38 (050) 403-00-76"
            ],
            "mail": "sloboganka2@ukr.net",
            "location": "Украина, г. Харьков, ул. Механизаторов, 2"
        }
    },
    showMenu: false,
}

export default initialState;