export function romanToInteger(str) {
    let result = 0;
    let lenght = String(str).length;
    let current = 0;
    let next = 0;
    let next2 = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    for (let i = 0; i < lenght; i++) {
        switch (str.charAt(i)) {
            case 'I':
                current = 1;
                break;
            case 'V':
                current = 5;
                break;
            case 'X':
                current = 10;
                break;
            case 'L':
                current = 50;
                break;
            case 'C':
                current = 100;
                break;
            case 'D':
                current = 500;
                break;
            case 'M':
                current = 1000;
                break;
        }
        if (i + 1 < lenght) {
            switch (str.charAt(i + 1)) {
                case 'I':
                    next = 1;
                    break;
                case 'V':
                    next = 5;
                    break;
                case 'X':
                    next = 10;
                    break;
                case 'L':
                    next = 50;
                    break;
                case 'C':
                    next = 100;
                    break;
                case 'D':
                    next = 500;
                    break;
                case 'M':
                    next = 1000;
                    break;
            }
            if (i + 2 < lenght) {
                switch (str.charAt(i + 2)) {
                    case 'I':
                        next2 = 1;
                        break;
                    case 'V':
                        next2 = 5;
                        break;
                    case 'X':
                        next2 = 10;
                        break;
                    case 'L':
                        next2 = 50;
                        break;
                    case 'C':
                        next2 = 100;
                        break;
                    case 'D':
                        next2 = 500;
                        break;
                    case 'M':
                        next2 = 1000;
                        break;
                }
                if (current > next && next < next2) {
                    result += current + next2 - next;
                    i += 2;
                } else {
                    if (next > current) {
                        result += next - current;
                    } else {
                        result += current + next;
                    }
                    i++;
                }
            } else {
                if (next > current) {
                    result += next - current;
                } else {
                    result += current + next;
                }
                i++;
            }
        } else {
            result += current;
        }
    }
    return result;
}
