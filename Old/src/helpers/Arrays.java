package helpers;

public class Arrays {
    public static Character[] boxArray(char[] arr) {
        Character[] boxedArr = new Character[arr.length];
        for (int i = 0; i < arr.length; i++) boxedArr[i] = arr[i];
        return boxedArr;
    }

    public static Integer[] boxArray(int[] arr) {
        Integer[] boxedArr = new Integer[arr.length];
        for (int i = 0; i < arr.length; i++) boxedArr[i] = arr[i];
        return boxedArr;
    }

    // GENERIC FUNCTION
    public static <T> void display(T[] arr) {
        if (arr.length == 0) {
            System.out.println("[]");
            return;
        }

        StringBuilder sb = new StringBuilder("[");
        for (T el : arr) sb.append(el).append(", ");
        sb.delete(sb.length() - 2, sb.length()).append("]");
        System.out.println(sb);
    }
}
