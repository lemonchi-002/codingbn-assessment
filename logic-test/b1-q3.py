num = int(input("Enter Range of Prime Numbers: ")) #Enter Any Range of Number

prime = [] #Empty list for holding the content
number = 2 #Starting number, smallest prime

while len(prime) < num:
    is_prime = True
    for i in range(2, number):
        if number % i == 0:
            is_prime = False
            break
    if is_prime:
        prime.append(number)
    number += 1

print(", ".join(map(str, prime)))