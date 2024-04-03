
// Con TypeScript bisogna specificare il tipo di ritorno di una funzione 

    // Funzioni con tipo di ritorno

    function getNome(nome:string): string {
        return nome;
    }

        // arrow function
        const somma = (n1: number, n2: number): number => n1 + n2;


    // Funzioni senza tipo di ritorno 
    // Quando una funzione non ha un tipo di ritorno specifico si usa void
    const stampa = (): void => console.log("Ciao");



        // Parametri facoltativi 

            const persona = (nome: string, eta?:number): void => console.log("nome" + (eta || 0));

            /* 
             Il parametro eta è facoltativo, ciò significa che possiamo anche non inserirlo, 
             nel caso non andassimo a inserire il parametro eta, srà passato come valore 0 
             secondo la formula (eta || 0)
            */


        // Parametri con nome

            // calcolo perimetro triangolo
            const triangolo = ({ latox, latoy, latoz }: { latox: number, latoy: number, latoz: number }): number => latox + latoy + latoz;  

        
        // Parametri rest (array)

            const voti_studente = (nome: string, voti:number[]):void =>  
            console.log("Nome: " +  nome + "" + "Voti: " + voti); 
            // voti è un array di voti e accetta parametri solo come array di voti

            

