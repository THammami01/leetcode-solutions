package helpers;

public class Strings {
    public static String padLeftZeros(String str, int length) {
        if (str.length() >= length) return str;

        StringBuilder sb = new StringBuilder();
        while (sb.length() < length - str.length()) sb.append('0');
        sb.append(str);

        return sb.toString();
    }
}
