#!/usr/bin/python3
"""
This module defines a class Square with a private instance attribute `__size`.
The attribute `size` is private and is set during instantiation.
"""

class Square:
    """Square class with a private attribute size."""
    
    def __init__(self, size):
        """Initialize the square with a given size."""
        self.__size = size  # Private attribute for size

