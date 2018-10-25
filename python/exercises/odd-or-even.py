'''
Ask the user for a number. Depending on whether the number is even or odd, print out
an appropriate message to the user. Hint: how does an even / odd number react differently
when divided by 2?

Extras:

1. If the number is a multiple of 4, print out a different message.
If not, print a different appropriate message.
2. Ask the user for two numbers: one number to check (call it num) and one number
to divide by (check). If check divides evenly into num, tell that to the user.

'''


num = int(input("Enter a number to check: "))
check = int(input("Enter a number that divided by check: "))

if num % 4 == 0:
    print("{} is multiple of 4".format(num))
elif num % 2 == 0:
    print("{} is an even number".format(num))
else:
    print("{} is an odd number".format(num))

if check % num == 0:
    print("{} is evenly divides by {}".format(check, num))
else:
    print("{} is not evenly divides by {}".format(check, num))
