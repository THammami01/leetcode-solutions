package helpers;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class StringsTest {
    @Test()
    void padLeftZeros() {
        assertEquals("0000", Strings.padLeftZeros("", 4));
        assertEquals("0012", Strings.padLeftZeros("12", 4));
        assertEquals("12345", Strings.padLeftZeros("12345", 4));
    }
}