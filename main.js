const most1 = [1,2,]
const most2= [3,4]
const most3= [5,6]
const most4= [7,8,]
const most5 = [9,0]
const mostAll = [ ...most1,most2, most3,most4,most5]
console.log(mostAll)


const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2

({a, b, ...rest} = {a:1, b:2, c:3, d:4});
//

