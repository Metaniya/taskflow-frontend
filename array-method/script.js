const list = [1, 2, 3, 4, 5];



// length returns the number of elents in the array 
const size = list.length;
console.log('Size of the list:', size);

// forEach returns each element in the array and performs the specified action on it
 list.forEach(num => console.log(num));

// map returns a new array with the results of calling a provided function on every element in the calling array
const squared = list.map(num => num * num);
console.log('Squared list:', squared);

// filter returns a new array with all elements that pass the test implemented by the provided function
const evenNumbers = list.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// reduce executes a reducer function on each element of the array, resulting in a single output value
const sum = list.reduce((acc, num) => acc + num, 0);
console.log('Sum of the list:', sum);   

// find returns the value of the first element in the array that satisfies the provided testing function
const firstEven = list.find(num => num % 2 === 0);
console.log('First even number:', firstEven);


// includes determines whether an array includes a certain value among its entries, returning true or false as appropriate
const hasThree = list.includes(3);
console.log('List includes 3:', hasThree);


//push adds one or more elements to the end of an array and returns the new length of the array
list.push(6);
console.log('List after push:', list);

// pop removes the last element from an array and returns that element      
const lastElement = list.pop();
console.log('Popped element:', lastElement);
console.log('List after pop:', list);   

// shift removes the first element from an array and returns that removed element
const firstElement = list.shift();
console.log('Shifted element:', firstElement);
console.log('List after shift:', list);         

// unshift adds one or more elements to the beginning of an array and returns the new length of the array
list.unshift(0);
console.log('List after unshift:', list);       


