# reference https://realpython.com/python-conditional-statements/

###
# The pass Statement
###
'''
Occasionally, you may find that you want to write what is called a code stub:
a placeholder for where you will eventually put a block of code that you
haven’t implemented yet.
'''
if True:
    pass
print("Hello World")

###
# Conditional Expressions
###
# <expr1> if <conditional_expr> else <expr2>
x = 20
output = 'less than 20' if x < 50 else 'greater than 20'
print(output)
'''
Conditional expressions can also be chained together, 
as a sort of alternative if/elif/else structure
'''
s = ('foo' if (x == 1) else
     'bar' if (x == 2) else
     'baz' if (x == 20) else
     'quux'
     )
print(s)

###
# One-Line if Statements
###
if 'f' in 'foo': print('1'); print('2'); print('3')


###
# The else and elif Clauses
###
x = 20
if x < 50:
    print('first suite')
    print('x is small')
else:
    print('(second suite)')
    print('x is large')

name = 'Joe'
if name == 'Fred':
    print('Hello Fred')
elif name == 'Xander':
    print('Hello Xander')
else:
    print("I don't know who you are!")

'''
Note: Using a lengthy if/elif/else series can be a little inelegant, 
especially when the actions are simple statements like print(). 
In many cases, there may be a more Pythonic way to accomplish the same thing.
Here’s one possible alternative to the example above using the dict.get() method:
'''
name = {
    'Fred': 'Hello Fred',
    'Xander': 'Hello Xander',
    'Joe': 'Hello Joe',
    'Arnld': 'Hello Arnold'
}
print(name.get('Fred', "I don't know who you are!"))
print(name.get('arn', "I don't know who you are!"))

###
# if Statement
###
x = 0
y = 5
if x < y:
    print('yes')
if y < x:
    print('yes')
if 'quux' in ['foo', 'bar', 'bax']:  # falsy
    print('yes')

###
# Grouping Statements: Indentation and Blocks
###
if 'foo' in ['bar', 'baz', 'qux']:
    print('Expression was true')
    print('Executing statement in suite')
    print('..')
    print('Done')
print('After conditional')
