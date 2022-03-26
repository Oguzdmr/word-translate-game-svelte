import {writable} from 'svelte/store'

const Store = writable(
    [
        {
            questionWord:"Hello",
            option1: "Selam",
            option2: "Naber",
            option3: "Nasılsın",
            option4:"Merhaba",
            correctOption: "Merhaba"
        },
        {
            questionWord:"Computer",
            option1: "Bilgisayar",
            option2: "Telefon",
            option3: "Tablet",
            option4:"Kulaklık",
            correctOption: "Bilgisayar"
        }
    ]
)

export default Store;