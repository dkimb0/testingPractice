
export default function capitalizeFxn(string){
    return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string){
    let outputString = ''
    for (let i = string.length - 1; i>=0; i--){
        outputString = outputString.concat(string[i]);
    }
    return outputString;
}

export const calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: (a,b) => a - b,
    divide: (a,b) => a/b,
    multiply: (a,b) => a*b,
}

export function caesarCipher(string, shiftFactor){
    string = string.toLowerCase();
    let outputString = '';

    for (let i = 0; i < string.length; i++){
        outputString = outputString.concat(shift(string[i], shiftFactor));
    }

    return outputString.toUpperCase();
}

export function shift(character, shiftFactor){
    if (character.charCodeAt(0) < 97 || character.charCodeAt(0) > 122){
            return character;
        }

    let charCode = character.charCodeAt(0) + shiftFactor;
    if (charCode > 122){
        charCode = charCode - 25;
    }
    return String.fromCharCode(charCode);

}

export function analyzeArray(array){
    let arrayLength = array.length;
    let averageSum = 0;

    for (let i = 0; i < array.length; i++){
        averageSum = averageSum + array[i];
    }
    let arrayAverage = averageSum/array.length;


    let arrayMin = array[0];
    for (let i = 1; i < array.length; i++){
        if (arrayMin > array[i]){
            arrayMin = array[i];
        }
    }

    let arrayMax = array[0];
    for (let i = 1; i < array.length; i++){
        if (arrayMax < array[i]){
            arrayMax = array[i];
        }
    }


    return {
        average: arrayAverage,
        min: arrayMin,
        max: arrayMax,
        length: arrayLength,
    }


}