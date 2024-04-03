
/*

  I tipi generici in TypeScript consentono di creare componenti riutilizzabili 
  che possono lavorare con più tipi di dati senza specificare esplicitamente il tipo. 
  I tipi generici vengono definiti utilizzando il parametro di tipo <T>, dove "T" è una 
  variabile di tipo generico che può essere sostituita da qualsiasi tipo al momento dell'utilizzo.

*/

    // TYPE GENRIC FUNCTION

// funzione normale
function saluta(m:string):string {
    return "ciao";
}


// funzione generic type

function invertiArray<T>(array: T[]): T[]{
    return array.reverse();
}

const array_int: number[] = [1, 2, 3, 4, 5]
const array_str: string[] = ["primo", "secondo", "terzo"];

console.log(invertiArray(array_str)); // output: [ 'terzo', 'secondo', 'primo' ]
console.log(invertiArray(array_int)); // output: [ 5, 4, 3, 2, 1 ]

// Inverte l'array indipendentemente dal tipo di dato


    // Si può fare anche con le arrow function

    const _invertiArray = <T>(array: T[]): T[] => array.reverse();
    console.log(_invertiArray(array_int));

// ------------------------------------------------------------------


    // TYPE GENERIC CLASS

    class NamedValues<T>{
        private _value: T | undefined;

        constructor(private name: string){}

        public setValue(value: T){
            this._value = value;
        }

        public getValue(): T | undefined { 
            return this._value; 
        }

        public toString(): string {
            return this.name + ': ' + this._value;
        }
    }


    let value = new NamedValues<number>('My number');
    value.setValue(10);
    console.log(value.toString()); // my Number 10

    let value_str = new NamedValues<string>("My string");
    value_str.setValue("TypeScript");
    console.log(value_str.toString()); // MY string: TypeScript

    






    



