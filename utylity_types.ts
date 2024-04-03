
/*
    JavaScript, in particolare in TypeScript, sono strumenti incorporati che consentono di 
    manipolare, combinare o trasformare i tipi in modo più efficiente e conciso. Sono delle 
    funzioni predefinite che operano sui tipi e producono nuovi tipi basati su quelli esistenti.
*/


    // Partial 

    /*
        Crea un tipo che rende opzionali tutte le proprietà di un tipo T. 
        Questo può essere utile quando si desidera creare un oggetto con alcune proprietà opzionali.

    */

        interface Utente {
            nome: string;
            cognome: string;
            età: number;
        }

        const utetenteParziale: Partial<Utente> = {
            nome:"Mario" // in Utente ci sono 3 dati, ma noi ne passiamo solo 1, gli altri sono opzionali
        }


// -----------------------------------------------------------------------------------------------------------------


    // Required

    /* 
        Crea un tipo che rende obbligatorie tutte le proprietà di un tipo T. 
        È utile quando si desidera garantire che tutte le proprietà di un oggetto siano presenti.
    */

        interface Opzione {
            titolo?: string;
            descrizione?: string;
            prezzo?: number;
          }
          
          const opzioneObbligatoria: Required<Opzione> = { 
            titolo: "Opzione 1",
            descrizione: "Descrizione dell'opzione 1",
            prezzo: 10
          };

        // in questo se omettiamo una proprietà dell'interface Opzione, ci darà errore

// -----------------------------------------------------------------------------------------------------------------


    // Readonly
    
          
    /*
        Crea un tipo in cui tutte le proprietà di un tipo T diventano di sola lettura, 
        impedendo la modifica delle proprietà dell'oggetto.
    */

        interface Prodotto {
            nome: string;
            prezzo: number;
          }
          
          const prodottoSoloLettura: Readonly<Prodotto> = {
            nome: "Prodotto 1",
            prezzo: 20
          };
          
          // prodottoSoloLettura.prezzo = 30; // Errore: Impossibile assegnare al membro 'prezzo' perché è un membro di sola lettura.
          
// -----------------------------------------------------------------------------------------------------------------


    // Pick 

    /*
    Crea un tipo selezionando solo alcune proprietà specificate K di un tipo T. 
    È utile quando si desidera creare un nuovo tipo con solo alcune proprietà di interesse.
    */

    interface Auto {
        marca: string;
        modello: string;
        anno: number;
      }
      
      const autoSelezionata: Pick<Auto, 'marca' | 'modello'> = {
        marca: "Fiat",
        modello: "500"
      };
      
// -----------------------------------------------------------------------------------------------------------------


    // Omit

    /*
      Crea un tipo escludendo alcune proprietà specificate K da un tipo T. 
      È utile quando si desidera creare un nuovo tipo che escluda alcune proprietà di un tipo esistente.
    */

    interface Persona {
        nome: string;
        cognome: string;
        età: number;
      }
      
      const personaSenzaEtà: Omit<Persona, 'età'> = {
        nome: "Mario",
        cognome: "Rossi" // non presente la proprietà età
      };

// -----------------------------------------------------------------------------------------------------------------


    // Record
      
    /*
      Rappresenta un oggetto che contiene una serie di coppie chiave-valore, 
      simile a un dizionario o a un oggetto JavaScript.
    */

    type Punteggio = 'A' | 'B' | 'C' | 'D' | 'F';
 
    const voti: Record<string, Punteggio> = {
        matematica: 'A',
        scienze: 'B',
        storia: 'C',
    };


// -----------------------------------------------------------------------------------------------------------------


    // ReturnType<T>

    /*
        Crea un tipo che rappresenta il tipo di ritorno di una funzione di tipo T. 
        È utile per ottenere il tipo di ritorno di una funzione.
    */

    function saluta(): string {
        return 'TypeScript';
    }
          
    type TipoRitorno = ReturnType<typeof saluta>; // Tipo: string
          

// -----------------------------------------------------------------------------------------------------------------


    // Parameters<T> 

    /*
        Crea un tipo che rappresenta i tipi dei parametri di una funzione di tipo T. 
        È utile per ottenere i tipi dei parametri di una funzione.
    */

    function somma(a: number, b: number): number {
        return a + b;
    }
          
    type TipiParametri = Parameters<typeof somma>; // Tipo: [number, number]
     
    
// -----------------------------------------------------------------------------------------------------------------




