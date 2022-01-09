import {reactive} from 'vue'

var Store = reactive({
    date : undefined,
    time: undefined,
    personCount : undefined,

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
    ]
})

export default Store