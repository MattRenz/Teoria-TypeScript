
 // Unione | (O)
 
    /*
     I tipi di unione vengono utilizzati quando un valore può essere più di un singolo tipo.
     Ad esempio quando una proprietà sarebbe stringo number.
    */


     const funzione = (code: string | number) => console.log(code);

        funzione("10");
        funzione(0);

            /*
             In questo caso la funzione stamperà sia "10" che 10, perchè gli abbiamo detto
             che l'argomento passato alla funzione può essere sia una stringa che un intero
            */



