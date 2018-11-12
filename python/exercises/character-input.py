
'''
https://www.practicepython.org/
Create a program that asks the user to enter their name and their age. Print out a message addressed to them that tells them the year that they will turn 100 years old.

Extras:

1. Add on to the previous program by asking the user for another number and printing out that many copies of the previous message. (Hint: order of operations exists in Python)
2. Print out that many copies of the previous message on separate lines. (Hint: the string "\n is the same as pressing the ENTER button)
'''
import datetime

name = input("Enter your Name:")
age = int(input("Enter your age:"))
year_age100 = datetime.datetime.now().year + (100 - age)

print ("Hi {} you will turn 100 years in {}".format(name, year}))
