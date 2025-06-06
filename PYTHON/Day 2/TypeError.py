# TypeError: object of type 'int' has no len()
len("123")

# len doesnt accept integers
len("Hello")

# Type Checking

print(type("abc"))
# <class 'str'>

print(type("123"))
# <class 'str'>

print(type(12345))
# <class 'int'>

print(type(3.2))
# <class 'float'>

print(type(False))
# <class 'bool'>

# Type Conversion
name_of_user = input("Your Name")
name_length = len(name_of_user)


print(type(name_length))