from collections import Counter

def most_frequent_letter(word):
    letters = [character for character in word.lower() if character.isalpha()]
    if not letters:
        return None
    return Counter(letters).most_common(1)[0][0].upper()

word = input("Enter Word: ")
print(most_frequent_letter(word))