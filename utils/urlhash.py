import string

alphabet = string.letters + string.digits
maximum = 11


def int_to_base62(num):
    if num == 0:
        return alphabet[0]

    arr = []
    radix = len(alphabet)
    while num:
        arr.append(alphabet[num%radix])
        num /= radix
    arr.reverse()
    return (alphabet[0] * (maximum - len(arr))) + ''.join(arr)

def base62_to_int(str):
    radix = len(alphabet)
    power = len(str) - 1
    num = 0
    for char in str:
        num += alphabet.index(char) * (radix ** power)
        power -= 1
    return num