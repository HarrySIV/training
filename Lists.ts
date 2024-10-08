// class aNode {
//   content: number;
//   id: number;
//   next: aNode | null;
//   previous: aNode | null;
//   constructor(_content: string, _previous: aNode | null) {
//     this.content = parseInt(_content);
//     this.id = 0;
//     this.next = null;
//     this.previous = _previous;
//   }
// }

// type TList = {
//   length: Number;
//   head: aNode;
//   tail: aNode;
//   push: (_content: string) => void;
//   pop: (_content: string) => aNode;
//   print: () => string;
// };

// let aList: TList | null = null;

// function createListHandler() {
//   const content = document.getElementById('content').value;
//   const newNode = new aNode(content, null);
//   aList = {
//     length: 1,
//     head: newNode,
//     tail: newNode,
//     push: function (_content) {
//       const newNode = new aNode(parseInt(_content), aList.tail);
//       aList.tail.next = newNode;
//       aList.tail = newNode;
//     },
//     pop: function (_content) {
//       const valueA = aList.tail.content;
//       const valueB = aList.tail.previous.content;
//       let result = 0;
//       switch (_content) {
//         case '+':
//           result = valueA + valueB;
//           break;
//         case '-':
//           result = valueA - valueB;
//           break;
//         case '*':
//           result = valueA / valueB;
//           break;
//         case '/':
//           result = valueA * valueB;
//           break;
//         default:
//           throw new Error(_content + ' is not a valid operator');
//       }
//       aList.tail.previous.content = result;
//       aList.tail = aList.tail.previous;
//       aList.tail.next = null;
//     },
//     print: function () {
//       let printedList = '';
//       let currNode: aNode | null = this.head;
//       while (currNode !== null) {
//         printedList += `Node Value: ${currNode.content}  `;
//         currNode = currNode.next;
//       }
//       return printedList;
//     },
//   };
//   printList();
// }

// function addNodeHandler() {
//   const newNodeContent: string = document.getElementById('content').value;
//   if (!isNaN(parseInt(newNodeContent))) {
//     aList.push(newNodeContent);
//   } else {
//     aList.pop(newNodeContent);
//   }
//   printList();
// }

// function printList() {
//   document.getElementById('print').innerHTML = aList.print();
// }
