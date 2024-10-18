// class aNode {
//   content: number;
//   next: aNode | null;
//   previous: aNode | null;
//   constructor(_content: number, _previous: aNode | null) {
//     this.content = _content;
//     this.next = null;
//     this.previous = _previous;
//   }
// }

// class List {
//   length: number;
//   head: aNode | null = null;
//   tail: aNode | null = null;
//   enqueue: (_content: number) => void;
//   dequeue: () => number;
//   print: () => string;
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//     this.enqueue = function (_content) {
//       const newNode = new aNode(_content, this.tail);
//       if (this.head !== null) {
//         this.tail.next = newNode;
//         this.tail = newNode;
//       } else {
//         this.head = newNode;
//         this.tail = newNode;
//       }
//       this.length++;
//     };
//     this.dequeue = function () {
//       const numValue = this.head.content;
//       if (this.head.next !== null) {
//         this.head = this.head.next;
//         this.head.previous = null;
//       } else {
//         this.head = null;
//         this.tail = null;
//       }
//       this.length--;
//       return numValue;
//     };
//     this.print = function () {
//       let printedList = '';
//       let currNode: aNode | null = this.head;
//       while (currNode !== null) {
//         printedList += `${currNode.content}  `;
//         currNode = currNode.next;
//       }
//       return printedList;
//     };
//   }
// }

// const primeNumbers = new List();
// const numberQueue = new List();

// function createNumberQueueHandler() {
//   const maxNum = parseFloat(document.getElementById('max').value);
//   if (maxNum >= 2 && Math.floor(maxNum) === maxNum) {
//     document.getElementById('error')!.innerHTML = '';
//     for (let i = 2; i <= maxNum; i++) {
//       numberQueue.enqueue(i);
//     }
//     checkForPrimes();
//   } else {
//     document.getElementById('error')!.innerHTML =
//       'please ensure the number is an integer greater than or equal to 2';
//   }
// }

// function checkForPrimes() {
//   if (primeNumbers.length === 0) {
//     primeNumbers.enqueue(numberQueue.dequeue());
//   }
//   while (numberQueue.length > 0) {
//     const numToCheck = numberQueue.dequeue();
//     let currPrime = primeNumbers.head;
//     do {
//       if (numToCheck % currPrime.content === 0) {
//         break;
//       } else {
//         if (currPrime.next === null) {
//           primeNumbers.enqueue(numToCheck);
//           break;
//         }
//         currPrime = currPrime.next;
//       }
//     } while (currPrime !== null);
//   }
//   printList();
// }

// function printList() {
//   document.getElementById(
//     'print'
//   )!.innerHTML = `Prime Numbers: ${primeNumbers.print()}; Checking: ${numberQueue.print()}`;
// }
