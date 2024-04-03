
/*
    TypeScript consente di definire i tipi separatamente dalle variabili che li utilizzano.
    Gli alias e le interfacce consentono di condividere facilmente i tipi tra diverse variabili/oggetti.
*/

    // alias

    type CarYear = number;
    type CarModel = string;

    type Car = {
        year:CarYear,
        model:CarModel,
    }

    const my_car : Car = {year:2020,model:"Porsche"};


    // interface

    interface Persona {
        nome: string,
        eta: number;
    }

    const my_persona : Persona = {nome: "Matteo", eta: 20};

    console.log(my_persona.nome); // <"Matteo">

        
        // Estenzioni interface

        interface Studente_scuola {
            nome: string,
            eta: number;
        }

        interface MatricolaStudente extends Studente_scuola {
            matricola: string;
        }

        const my_studente : MatricolaStudente = {
            nome: "Matteo",
            eta: 20,
            matricola: "AB57",
        };







    