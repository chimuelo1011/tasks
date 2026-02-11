/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArr: number[] = [];

    if (numbers.length === 0) {
        return newArr;
    }

    if (numbers.length === 1) {
        newArr.push(numbers[0]);
        newArr.push(numbers[0]);
    } else {
        newArr.push(numbers[0]);
        newArr.push(numbers[numbers.length - 1]);
    }

    return newArr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newArr: number[] = [];

    if (numbers.length === 0) {
        return newArr;
    }

    newArr = numbers.map((num: number): number => num * 3);

    return newArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newArr: number[] = [];

    if (numbers.length === 0) {
        return newArr;
    }

    newArr = numbers.map(Number);
    const newArr2 = newArr.map((num: number): number =>
        Number.isNaN(num) ? 0 : num,
    );

    return newArr2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,h
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let newArr: string[] = [];

    if (amounts.length === 0) {
        return [];
    }

    newArr = amounts.map((amt: string): string =>
        amt.includes("$") ? amt.replace("$", "") : amt,
    );

    const newArr2 = newArr.map(Number);
    const newArr3 = newArr2.map((num: number): number =>
        Number.isNaN(num) ? 0 : num,
    );

    //const newArr2 = newArr.map((num: number): number => Number.isNaN(num) ? 0 : num);
    return newArr3;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newArr: string[] = [];

    if (messages.length === 0) {
        return newArr;
    }

    newArr = messages.filter(
        (message: string): boolean => !message.includes("?"),
    );

    newArr = newArr.map((newAr: string): string =>
        newAr.includes("!") ? newAr.toUpperCase() : newAr,
    );

    return newArr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    const allColor = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );

    return allColor;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce((total: number, num: number) => total + num);

    const addition = addends.join("+");

    return sum.toString() + "=" + addition;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let newArr: number[] = [];

    if (values.length === 0) {
        return [0];
    }

    //newArr = values.map((num: number): number => num);

    //const firstNeg = values.find((val: number): boolean => val < 0);
    const firstNegIn = values.findIndex((val: number): boolean => val < 0);

    if (firstNegIn === -1) {
        const sum = values.reduce(
            (total: number, num: number) => total + num,
            0,
        );
        newArr = [...values, sum];
    } else {
        newArr = [...values];
        const newArr2 = newArr.slice(0, firstNegIn);

        const sum2 = newArr2.reduce(
            (total: number, num: number) => total + num,
            0,
        );

        newArr.splice(firstNegIn + 1, 0, sum2);
    }

    return newArr;
}
