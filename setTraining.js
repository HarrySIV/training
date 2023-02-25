class Data {
  constructor() {
    this.num = new Set();
  }

  add(value) {
    if (this.num.has(value)) return false;
    this.num.add(value);
    return true;
  }

  delete(value) {
    if (!this.num.has(value)) return false;
    this.num.delete(value);
    return true;
  }

  findMedian() {
    if (this.num.size === 0) throw new Error('There is no data available');
    const medianIndex =
      this.num.size % 2 === 0
        ? this.num.size / 2 - 1
        : Math.floor(this.num.size / 2);
    const median = [...this.num][medianIndex];
    return median;
  }
}

const data = new Data();

data.add(1);
data.add(2);
data.add(3);
data.add(4);
data.add(5);
data.add(6);
console.log(data.findMedian());
data.delete(6);
console.log(data.findMedian());
