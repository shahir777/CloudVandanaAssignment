import java.util.Scanner;

public class PangramCheckerWithoutBuiltInMethods {

    public static boolean isLetter(char character) {
        return (character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z');
    }

    public static boolean isPangram(String string) {
        boolean[] alphabet = new boolean[26];

        for (int i = 0; i < string.length(); i++) {
            char character = string.charAt(i);

            if (isLetter(character)) {
                int index = Character.toLowerCase(character) - 'a';
                alphabet[index] = true;
            }
        }

        for (int i = 0; i < alphabet.length; i++) {
            if (!alphabet[i]) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a string: ");
        String string = scanner.nextLine();

        boolean isPangram = isPangram(string);

        if (isPangram) {
            System.out.println("The string is a pangram.");
        } else {
            System.out.println("The string is not a pangram.");
        }
    }
}
