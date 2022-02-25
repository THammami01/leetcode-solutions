package helpers;

import java.util.Scanner;

public class PackageNameGenerator {
    // 58. Length of Last Word --> problems.problem_0058_length_of_last_word
    public static String fromProblemName(String problemName) {
        String[] arr = problemName.toLowerCase().split(" ");

        // REMOVE DOT AT THE END
        String nb = Strings.padLeftZeros(arr[0].substring(0, arr[0].length() - 1), 4);

        StringBuilder res = new StringBuilder("problem_").append(nb);
        for (int i = 1; i < arr.length; i++) res.append("_").append(arr[i]);
        return res.toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("ENTER PROBLEM NAME: ");
        String problemName = sc.nextLine();
        System.out.println("PACKAGE NAME: " + fromProblemName(problemName));
    }
}
