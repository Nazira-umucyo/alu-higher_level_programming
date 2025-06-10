#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (typeof w !== 'number' || w <= 0 || typeof h !== 'number' || h <= 0) {
      // Do not set any properties, leaving the object empty
      return;
    }
    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;
