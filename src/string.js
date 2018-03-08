/*
    1. 一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首。

    範例： 

    ['abcd','abccc','abdec'] --> 共同字首為 'ab' 。
 */

const str1 = ['abccd', 'abccc', 'abcdec'];

const func1 = strs => {
    const same = strs.shift();

    return strs.reduce((acc, str) => {
        Array.from(str).forEach((char, index) => {
            if (char !== same[index]) {
                acc = Array.from(acc).slice(0, index);
            }
        });

        return acc;
    }, same).join('');
}

// console.log('func1：', func1(str1));

/*
    2. 將一個字串反轉後回傳。

    範例： s= "hello", return "olleh"
 */


let s2 = "hello";

const func2 = s => Array.from(s).reverse().join('');

// console.log('func2：', func2(s2));

/*
    3. 給兩個字串s與t，回傳t是否為s的重組字

    範例： 

    s = "anagram", t = "nagaram" 回傳true  
    s = "rat", t = "car" 回傳false
*/

const str3 = [
    { s: 'anagram', t: 'nagaram' },
    { s: 'rat', t: 'car' },
    { s: 'rat2', t: 'car' },
];

const func3 = (strs) => strs.map(str => {
    if (str.s.length !== str.t.length) return false;

    return Array.from(str.s).sort().join('') === Array.from(str.t).sort().join('');
});

// console.log('func3：', func3(str3));

/*
    4. 給一個英文字串，將裡面的母音字母反轉。

    範例1: 

    Given s = "hello", return "holle".

    範例2： 

    Given s = "leetcode", return "leotcede".

    注意： y不算在母音字母中。
*/

const str4 = ['hello', 'leetcode'];

const func4 = strs => strs.map(str => {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const match = [];

    Array.from(str).forEach(char => {
        if (vowel.includes(char)) match.push(char);
    });

    const reverse = [...match].reverse();

    return Array.from(str).map(char => {
        if (vowel.includes(char)) {
            char = reverse.shift();
        }

        return char;
    }).join('');
});

// console.log('func4：', func4(str4));

/*
    5. 給二進制字串，將其換算成對應的十進制數字，需自己寫function

    範例：

    輸入：'11000000' 輸出：192
*/

const s5 = '11000000';

const func5 = s => Array.from(s)
    .reverse()
    .reduce((acc, val, index) => acc += +val === 0 ? 0 : Math.pow(2, index), 0);

// console.log('func5：', func5(s5));

/*
    6. 將給定數字轉換成二進制字串。如果字串長度不足 8 位，則在前面補 0 到滿8位。

    範例：

    輸入：65 輸出：'01000001'
*/

const n6 = 65;

const func6 = num => {
    const result = [];

    while (num !== 0) {
        result.push(num % 2);
        num = parseInt(num / 2);
    }

    while (result.length < 8) {
        result.push('0');
    }

    return result.reverse().join('');
};

// console.log('func6：', func6(n6));

/*
    7. 將一個數字每個位數相加，直到剩個位數為止。

    範例：

    num = 38，則 3+8 = 11，1+1 = 2, 2是個位數，回傳2。
*/

const num7 = 196;

const func7 = num => {
    let result = String(num).split('');

    while (result.length > 1) {
        const acc = result.reduce((acc, val) => acc += +val, 0);

        result = String(acc).split('');
    }

    return result.join('');
}

// console.log('func7：', func7(num7));

/*
    8. 反轉一個int整數。

    範例：

    x = 123 , return 321 x = -123 , return -321
*/

const nums8 = [123, -123];

const func8 = nums => nums.map(num => {
    let isNavigate = false;

    if (num < 0) {
        num *= -1;
        isNavigate = true;
    }

    const result = +(String(num).split('').reverse().join(''));

    return isNavigate ? result * -1 : result;
});

export default {
    func1, func2, func3, func4, func5, func6, func7, func8
};