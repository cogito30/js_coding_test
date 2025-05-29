// 카드2
// JS는 Queue가 없으므로 구현
const fs = require('fs'); 
const inputData = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : './solved_ac/test.txt').toString().trim().split('\n');

const N = parseInt(inputData[0]);

let arr = [];
for (let i = 1; i <= N; ++i) {
    arr.push(i);
}

let count = 0;
let i = 0;
let eleCount = arr.length;
while (eleCount > 1) {
    count++;
    arr[i] = 0;
    eleCount--;
    i += 2;
    if (i >= arr.length) {
        i = 0;
        while (true) {
            if (arr[i] !== 0) {
                break;
            } else {
                i++;
            }
        }
    }
}

console.log(arr[i]);

/* 시간초과
const fs = require('fs'); 
const inputData = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : './solved_ac/test.txt').toString().trim().split('\n');

const N = parseInt(inputData[0]);

let arr = [];
for (let i = 1; i <= N; ++i) {
    arr.push(i);
}

while (arr.length > 1) {
    arr.shift();
    arr.push(arr[0]);
    arr.shift();
}

console.log(arr[0]);
*/