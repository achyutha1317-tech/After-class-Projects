print("Welcome to my Armstrong Number Checker")

num = int(input("Enter a number: "))

sum_of_cubes = 0
temp = num
num_digits = len(str(num))

while temp > 0:
    digit = temp % 10
    sum_of_cubes += digit ** num_digits
    temp //= 10

if num == sum_of_cubes:
    print(f"{num} is an Armstrong number!")
else:
    print(f"{num} is NOT an Armstrong number.")