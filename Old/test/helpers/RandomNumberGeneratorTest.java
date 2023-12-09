package helpers;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class RandomNumberGeneratorTest {
    @Test()
    void between() {
        int rand = RandomNumberGenerator.between(1, 5);
        assertTrue(rand >= 1 && rand <= 5);
    }
}