import {reactive} from 'vue'

var Store = reactive({
    date : '2022-02-01',
    time: '18:00',
    personCount : 1,

    tableNr: undefined,
    
    test: 1,

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

    tables: [
        [
            {id: 1, seatCount: 8},
            {id: 2, seatCount: 8},
            {id: 3, seatCount: 8}
        ],
        [
            {id: 4, seatCount: 8},
            {id: 5, seatCount: 8},
            {id: 6, seatCount: 8}
        ]
    ]
})

export default Store
