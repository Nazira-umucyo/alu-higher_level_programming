#!/usr/bin/python3


"""This module defines a class called Square. The class represents a square
with a private size attribute. It includes getter and setter methods for
validating and retrieving the size of the square. The setter ensures that the
size is an integer and greater than or equal to 0. The class also provides a
method to compute the area of the square.
"""


class Square:
    """Represents a square with a private size attribute."""

    def __init__(self, size=0):
        """Initializes the square with a given size, which defaults to 0."""
        self.size = size  # Use the setter to validate the size on initialization

    @property
    def size(self):
        """Retrieve the size of the square."""
        return self.__size

    @size.setter
    def size(self, value):
        """Set the size of the square with validation."""
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """Returns the area of the square."""
        return self.__size ** 2
