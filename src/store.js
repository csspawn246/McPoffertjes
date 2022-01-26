import {reactive} from 'vue'

var Store = reactive({
    date : '2022-02-01',
    time: '18:00',
    personCount : 1,

    tableNr: [],

    currentReservation: 0,

    idCount: 0,

    dishes: [
        {
            name: "Lachsfilet (süß)",
            price: 26,
            count: 0
        },
        {
            name: "Süß-Kartoffelgratin",
            price: 4.2,
            count: 0
        },
        {
            name: "Marmeladendöner",
            price: 10,
            count: 0
        },
        {
            name: "Tiramisu",
            price: 8,
            count: 0
        },
        {
            name: "Poffertjes für Leute ohne Familie :(",
            price: 2.6,
            count: 0
        },
        {
            name: "Poffertjes Familienplatte",
            price: 16.9,
            count: 0
        },
        {
            name: "Poffertjes für Verliebte (2 Pers.)",
            price: 10.2,
            count: 0
        },
        {
            name: "Süßkartoffel für Verliebte (2 Pers.)",
            price: 9.3,
            count: 0
        },
    ],

    reservations: [],

    tables: [
        {id: 1, seatCount: 2},
        {id: 2, seatCount: 2},
        {id: 3, seatCount: 2},
        {id: 4, seatCount: 2},
        {id: 5, seatCount: 2},
        {id: 6, seatCount: 2},
        {id: 7, seatCount: 2},
        {id: 8, seatCount: 4},
        {id: 9, seatCount: 4},
        {id: 10, seatCount: 4},
        {id: 11, seatCount: 4},
        {id: 12, seatCount: 2},
        {id: 13, seatCount: 2},
        {id: 14, seatCount: 4},
        {id: 15, seatCount: 4},
        {id: 16, seatCount: 4},
        {id: 17, seatCount: 4},
        {id: 18, seatCount: 2},
        {id: 19, seatCount: 2},
        {id: 20, seatCount: 4},
        {id: 21, seatCount: 4},
        {id: 22, seatCount: 4},
        {id: 23, seatCount: 4},
        {id: 24, seatCount: 2},
        {id: 25, seatCount: 2},
        {id: 26, seatCount: 2},
        {id: 27, seatCount: 2},
        {id: 28, seatCount: 2},
        {id: 29, seatCount: 2},
        {id: 30, seatCount: 4},
        {id: 31, seatCount: 4},
        {id: 32, seatCount: 4},
        {id: 33, seatCount: 4},
        {id: 34, seatCount: 2},
        {id: 35, seatCount: 2},
        {id: 36, seatCount: 4},
        {id: 37, seatCount: 4},
    ]
})

export default Store
