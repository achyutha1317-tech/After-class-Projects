print("Welcome to my Fibonacci Series Project")


def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


terms = int(input("Enter the number of terms: "))


if terms <= 0:
    print("Please enter a positive interger.")
else:
    print("Finonacci sequence:")
    for i in range(terms):
        print(fibonacci(i))