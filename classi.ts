

// Creazione classe
    class Docente{
      name: string;
    }

    // creazione my_docente di calsse Docente
    const my_docente = new Docente();
    my_docente.name = "Mario";

    const my_docente_2 = new Docente();
    my_docente_2.name = "Luca";


  // Membri di visibilità 

      /*
      public- (impostazione predefinita) consente l'accesso al membro della classe da qualsiasi luogo
      private- consente solo l'accesso al membro della classe dall'interno della classe
      protected- consente l'accesso al membro della classe da se stesso e da tutte le classi che lo ereditano
      */

      class Person {
          private name: string;
        
          public constructor(name: string) {
            this.name = name;  // this si referisce all'istanza della classe
          }
        
          public getName(): string {
            return this.name;
          }
        }
        
        const persona1 = new Person("Marco");

        persona1.getName(); // <Marco>

    
// -------------------------------------------------------------------------------------------


  // Ereditarietà IMPLEMENTATA

    interface Scuola {
      StampaScuola: () => void;
    }

    class Studente implements Scuola {

      public constructor(protected readonly name: string, protected readonly luogo: string) {}

      public StampaScuola(): void {
          
          console.log(this.name + " " + this.luogo);
    }
  }

  const Scuola_1 = new Studente("Scuola Manzoni", "Roma");
  Scuola_1.StampaScuola(); // <Scuola Manzoni Roma>

    
// -------------------------------------------------------------------------------------------


  // Ereditarietà ESTESA


    /*
    Le classi possono estendersi a vicenda. 
    In questo caso una classe può estendere un'altra classe

    Rectangel impements Shape ---> Square extendes Rectangle
    */

    interface Shape {
        getArea: () => number;
    }
    
    class Rectangle implements Shape {
        public constructor(protected readonly width: number, protected readonly height: number) {}
    
        public getArea(): number {
        return this.width * this.height;
        }
    }
    
    class Square extends Rectangle {
        public constructor(width: number) {
        super(width, width);
        }
    
    }
        

// -------------------------------------------------------------------------------------------


    // Classi ASTRATTE

    /*
     * le classi astratte forniscono una base per altre classi derivate 
     * e NON possono essere istanziate direttamente.  
     * 
     * Si utilizzano grazie la paroal chiave "abstract"
     */


    abstract class Forma {
      protected colore: string;

      constructor(colore: string) {
        this.colore = colore;
      }

      abstract calcoloArea(): number; 
      // Calcolo area è dichiarato senza nessuna implementazione specifica
      
      stampaColore(): void{
        console.log('Colore: ${this.colore}')
      }
    }


    // Usiamo la classe astratta

    class Rettangolo extends Forma {
    
      public altezza: number;
      public larghezza: number;

      constructor(colore: string, altezza: number, larghezza:number){
        super(colore); // parametro della classe astratta
        this.altezza = altezza;
        this.larghezza = larghezza;
      }

      calcoloArea(): number { // utilizzo della classe astratta
        return this.altezza * this.larghezza;
      }
    }

    /*
     * La classe Rettangolo estende la classe Forma. 
     * Ed è necessario implementare il metodo astratto 'calcoloaArea()'
     */


// -------------------------------------------------------------------------------------------


// Esempio CLASSE IMPLEMENTATA:

class Veicolo{
  protected velocita: number;

  constructor(velocita:number){
    this.velocita = velocita;
  }

  accellerare = (accelerazione: number): void => {
    this.velocita += accelerazione;
  }

  decelerare = (decelerazione:number): void =>{
    this.velocita -= decelerazione;
  }

  StampaVelocita(): void{
    console.log('Velocità attuale: ' + this.velocita + 'km/h');
  }
}
    

class Automobile extends Veicolo{

  private numProte: number;

  constructor(velcoita: number, porte:number){
    super(velcoita);
    this.numProte = porte;
  }

  apriPorte(): void{
    console.log('Apertrua delle' + this.numProte +  'porte...')
  }

}

// utilizzo classi

const auto = new Automobile(20,4);
auto.accellerare(120);

auto.StampaVelocita();

auto.apriPorte();




