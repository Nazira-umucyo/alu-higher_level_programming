#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (
      typeof w !== 'number' || w <= 0 || !Number.isInteger(w) ||
      typeof h !== 'number' || h <= 0 || !Number.isInteger(h)
    ) {
      return;
    }
    this.width = w;
    this.height = h;
  }

  print () {
    if (!this.width || !this.height) return;

    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;
