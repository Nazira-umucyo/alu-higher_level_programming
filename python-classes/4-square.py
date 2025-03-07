#!/usr/bin/python3


"""This module defines a class Square with a private size attribute, a method to
calculate the area, and validation for the size parameter.
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
