
// TypeScript specifica il tipo di dato contentente nell'array

    // Creazione array

    const names: string[] = [];
    const numbers: number[] = [20,30,40,50];
    const booleans: boolean[] = [true, false, false];


        // Errore Array
        
            /*        
             <names.push(3);> 
             Il codice qui sopra genera un errore perchè stiamo inserendo 3 (valore numerico)
             in un array che può contenere solo stringhe
            */
    

    // Array non modificabili 

    const iban: readonly number[] = [20350, 40567];

        // Errore array non modificavili

            /*
             <iban.push(45624)>
             Il codice qui sopra genera un errore perchè non posso aggiungere un elemento ad un array
             di tipo "readonly"
            */
           
            


