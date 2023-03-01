document.querySelector('title').innerHTML = 'ИЗУЧАЕМ JS';

 

// for (const key in user) {
//   console.log(user[key]);
// }

// const arr = ['b', 'a', 'c'];

// for (const key in arr) {
//   console.log(arr[key]);
// }

// const str = 'Abc';

// for (const key of str) {
//   console.log(key);
// }


// const salaries = {
//   john: 500,
//   ivan: 1000,
//   ann: 5000,
//   sayHello: function() {
//     console.log('Hello!');
//   }
// }

// salaries[Symbol.iterator] = function() {
//   return {
//     current: this.john,
//     last: this.ann,

//     next() {
//       if (this.current < this.last) {
//         this.current += 500;
//         return {done: false, value: this.current}
//       } else {
//         return {done: true}
//       }
      
//     }
//   }
// }

// for (let res of salaries) {
//   console.log(res);
// }

// const shops = [
//   {rice: 500},
//   {oil: 200},
//   {bread: 50}
// ];

// const budget = [5000, 15000, 25000];

// const map = new Map([
//   [{paper: 400}, 8000]
// ]);

// shops.forEach((shop, i) => {
//   map.set(shop, budget[i]);
// })

// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));

// for (let shop of map.keys()) {
//   console.log(shop);
// }

// for (let price of map.values()) {
//   console.log(price)
// }
// for (let [shop, price] of map.entries()) {
//   console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//   console.log(key, value);
// });

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set = new Set(arr);

set.add('Ivan');
// set.delete('Alex');
// set.size;

//console.log(set);

// for (let value of set) console.log(value);

set.forEach((value, valueAgaing, set) =>{
  console.log(value, valueAgaing);
});