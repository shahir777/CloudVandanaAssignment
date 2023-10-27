import java.util.Scanner;

public class RomanToIntegerWithUserInput {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine();

        int integerValue = convertRomanToInt(romanNumeral);

        System.out.println("The integer value of the Roman numeral " + romanNumeral + " is " + integerValue);
    }

    private static int convertRomanToInt(String romanNumeral) {
        int result = 0;
        int previousValue = 0;

        for (int i = romanNumeral.length() - 1; i >= 0; i--) {
            int currentValue = 0;

            switch (romanNumeral.charAt(i)) {
                case 'I':
                    currentValue = 1;
                    break;
                case 'V':
                    currentValue = 5;
                    break;
                case 'X':
                    currentValue = 10;
                    break;
                case 'L':
                    currentValue = 50;
                    break;
                case 'C':
                    currentValue = 100;
                    break;
                case 'D':
                    currentValue = 500;
                    break;
                case 'M':
                    currentValue = 1000;
                    break;
                default:
                    throw new IllegalArgumentException("Invalid Roman numeral: " + romanNumeral);
            }

            if (currentValue < previousValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            previousValue = currentValue;
        }

        return result;
    }
}
