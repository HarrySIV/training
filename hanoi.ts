class Piece {
  id: number;
  next: Piece | null;
  previous: Piece | null;
  constructor(_id: number, tailNode: Piece | null) {
    this.id = _id;
    this.next = null;
    this.previous = tailNode;
  }
}

class Stack {
  length: number;
  head: Piece | null = null;
  tail: Piece | null = null;
  push: (_id: number) => void;
  pop: () => number;
  print: () => string;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.push = function (_id) {
      const movedPiece = new Piece(_id, this.tail);
      if (this.head === null) {
        this.head = movedPiece;
        this.tail = movedPiece;
      } else {
        this.tail.next = movedPiece;
        this.tail = movedPiece;
      }
      this.length++;
      return _id;
    };
    this.pop = function () {
      const piece: number = this.tail.id;
      this.tail = this.tail.previous;
      if (this.tail === null) {
        this.head = null;
      } else {
        this.tail.next = null;
      }
      this.length--;
      return piece;
    };
    this.print = function () {
      let printedList = '';
      let currNode: Piece | null = this.head;
      while (currNode !== null) {
        printedList += ` ${currNode.id}`;
        currNode = currNode.next;
      }
      return printedList;
    };
  }
}

const start = new Stack();
const middle = new Stack();
const end = new Stack();
let moves = 0;

function printStacks() {
  const startPrint = `Stack 1:${start.print()}`;
  const middlePrint = `Stack 2:${middle.print()}`;
  const endPrint = `Stack 3:${end.print()}`;
  document.getElementById('start')!.innerHTML = startPrint;
  document.getElementById('middle')!.innerHTML = middlePrint;
  document.getElementById('end')!.innerHTML = endPrint;
}

function movePiece(from: Stack, to: Stack) {
  to.push(from.pop());
}

function solveHandler() {
  const pieceCount = parseInt(document.getElementById('pieces')!.value);
  if (pieceCount < 1)
    document.getElementById('error')!.innerHTML =
      'please choose an integer greater than 0';
  for (let i = pieceCount; i > 0; i--) {
    start.push(i);
  }
  solve(pieceCount, start, middle, end);
  document.getElementById(
    'print'
  )!.innerHTML = `Solved in ${moves} moves! The time complexity is O(2^n), where n is related to the number of pieces in the puzzle.`;
}

function solve(pieceCount: number, from: Stack, help: Stack, to: Stack) {
  if (pieceCount === 1) {
    movePiece(from, to);
    moves++;
  } else {
    solve(pieceCount - 1, from, to, help);
    movePiece(from, to);
    moves++;
    solve(pieceCount - 1, help, from, to);
  }
}
