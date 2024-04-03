
// Una tupla è un array tipizzato con una lunghezza e tipi predefiniti per ogni indice.

    // Creazione tupla

        // definizione
        let tupla: [number,number,string];

        // inizializzazione
        tupla = [10, 20, "AK45"];

            /* 
            La tupla è formata da 2 numeri e una stringa, in caso di variazione di tipo nella
            inizializzazione TypeScript solleverà un errore:

                tupla = ["AK45", 10, 20] // Errore
        
            */
    
    // Creazion tupla solo lettura
    
        let tupla_readonly: readonly [number,number,string];
        tupla_readonly = [10, 20, "AK45"];

            /* 
             Come negli array readonly, non posso modificare questa tupla
            */

    // Tupla con nome

    const grafico: [x: number, y: number] = [65.2, 23.4];

        // Le tuple con nome forniscono più contesto per ciò che rappresentano i nostri valori di indice.

        

    