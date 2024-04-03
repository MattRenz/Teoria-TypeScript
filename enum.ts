
/*
    Un enum è una "classe" speciale che rappresenta un gruppo di costanti (variabili immutabili).
    Gli enum sono disponibili in due versioni stringe numeric. 
*/

    // numeric 

    enum NumeroMesi{
        Gennaio = 1,
        Febbraio = 2, 
        Marzo = 3,
    }

    console.log(NumeroMesi.Gennaio); // <1>


    // string 

    enum CarsModel{
        Porsche = "GT3-RS",
        BMW = "M4",
    }

    console.log(CarsModel.Porsche); // <"GT3-RS">


    // I valori enum sono UNIVOCI per sempre 