def count_vowels_consonants(sentence): #Creating new function
    vowels = 0 
    consonants = 0

    for character in sentence.lower():
        if character.isalpha():
            if character in "aeiou":
                vowels += 1
            else: 
                consonants += 1

    return vowels, consonants  #I need to watchout the indentation of for loop.

lines = input("Type in sententces: ")
v, c = count_vowels_consonants(lines)
print(v, "Vowels and ", c, "Consonants")