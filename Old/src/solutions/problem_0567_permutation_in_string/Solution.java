package solutions.problem_0567_permutation_in_string;

// LINK: https://leetcode.com/problems/permutation-in-string/

// TODO: CORRECT BUT TIME LIMIT EXCEEDED
public class Solution {
    /**
     * @noinspection unused
     * https://www.programiz.com/dsa/bubble-sort
     */
    public void bubbleSort(char[] arr) {
        int size = arr.length;
        for (int i = 0; i < size - 1; i++)
            for (int j = 0; j < size - i - 1; j++)
                if (arr[j] > arr[j + 1]) {
                    char temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
    }

    // https://www.programiz.com/dsa/merge-sort
    void merge(char[] arr, int p, int q, int r) {
        int n1 = q - p + 1;
        int n2 = r - q;

        char[] L = new char[n1];
        char[] M = new char[n2];

        //noinspection ManualArrayCopy
        for (int i = 0; i < n1; i++)
            L[i] = arr[p + i];
        for (int j = 0; j < n2; j++)
            M[j] = arr[q + 1 + j];

        int i = 0, j = 0, k = p;

        while (i < n1 && j < n2) {
            if (L[i] <= M[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = M[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = M[j];
            j++;
            k++;
        }
    }

    void mergeSort(char[] arr, int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }

    void mergeSort(char[] arr) {
        mergeSort(arr, 0, arr.length - 1);
    }

    public boolean checkInclusion(String s1, String s2) {
        char[] s1Arr = s1.toCharArray();
        mergeSort(s1Arr);
        s1 = String.valueOf(s1Arr);

        for (int i = 0; i < s2.length() - s1.length() + 1; i++) {
            char[] s2Arr = s2.substring(i, i + s1.length()).toCharArray();
            mergeSort(s2Arr);
            String tempS2 = String.valueOf(s2Arr);
            if (s1.equals(tempS2)) return true;
        }

        return false;
    }
}
