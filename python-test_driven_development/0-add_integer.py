#!/usr/bin/python3
"""
This module contains a function to add two integers. The function ensures
that the inputs are either integers or floats, casting them to integers
if necessary, and returns the sum of the two inputs.
"""

def add_integer(a, b=98):
    """
    Adds two integers.

    Arguments:
    a (int or float): The first number to be added.
    b (int or float): The second number to be added (default is 98).

    Returns:
    int: The sum of the two integers.
    
    Raises:
    TypeError: If either 'a' or 'b' are not integers or floats.
    """
    
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer")
    if not isinstance(b, (int, float)):
        raise TypeError("b must be an integer")
    
    return int(a) + int(b)

