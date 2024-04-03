
// Esistono tre primitive principali in JavaScript e TypeScript.

    /*  boolean - (ture, false)

        number - (20, 20.5)

        string - "TypeScript"
    */


    // Tipi semplici

        // Dichiarare il tipo su TypeScript

        let materia: string = "TypeScript";
        let condizione: boolean = true;
        let codice: number = 45;
        let codice_float:number = 5.5;


        // Questo pezzo di codice darebbe errore perchè i tipi di dati non corrispondono
        // <materia = 5;>  


    // Tipi speciali (non fanno riferimento a nessun tipo specifico di dato)
    

        // any  (disabilita il controllo del tipo e consente effettivamente l'utilizzo di tutti i tipi)
        let x: any = true;
        x = "string";
        Math.round(x); // <Nan> non va in errore ma è di tipo "any" 


        // unknow (è un'alternativa simile, ma più sicura a any)
        let y: unknown = 1;
        y = "string"; 
        // unknownè utilizzato al meglio quando non si conosce il tipo di dati digitati

       
