package helpers;

import java.util.Random;

public class RandomNumberGenerator {
    private final static Random random = new Random();

    public static int between(int min, int max) {
        // return random.nextInt(max - min + 1) + min;
        return random.nextInt(min, max + 1);
    }
}
