(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        let fruitList = ['manzana','cereza','ciruela']
        if (fruitList.includes(fruit)){
            return true
        } 
        return false 

    }

    type FruitColor = 'red' | 'yellow' | 'purple'

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: FruitColor ): string[] {

     //   if ( color === 'red' ) return ['manzana','fresa'];
        
    //   if(color === 'yellow') return ['piña','banana'];

    //  if (color === 'purple') return ['moras','uvas']

    const FruitByColor = {
        red:    ['manzana','fresa'],
        yellow: ['piña','banana'],
        purple: ['moras','uvas']
    }

    if(!Object.keys(FruitByColor).includes(color))  {

        throw Error('the color must be: red, yellow, purple');
        
    } 
    return FruitByColor[color]


       
        


    }

    // Simplificar esta función
    let isFirstStepWorking  = false;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if(!isFirstStepWorking) return 'First step broken.';

        if(!isSecondStepWorking) return 'Second step broken.';

        if(!isThirdStepWorking) return 'Third step broken.';

        return (!isFourthStepWorking) ?'Fourth step broken.' : 'Working properly!' ;
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('perro'), fruit: 'perro' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();