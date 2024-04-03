
// TypeScript ha una sintassi specifica per digitare gli oggetti.


    // Creazione ogg

    const car_1: { type: string, model: string, year: number } = {
        type: "Toyota",
        model: "Corolla",
        year: 2009
      };

    
    // Creazione ogg con proprietà facoltative
    
    const car_2: { type: string, year?: number } = { // no error
        type: "Toyota"
      };
      car_2.year = 2000; // la proproetà type è facoltativa grazie a ('?')