package helpers;

// ANNOTATIONS: https://devqa.io/junit-5-annotations/

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Testing PackageNameGenerator Class")
class PackageNameGeneratorTest {

    @Test()
    @DisplayName("Testing fromProblemName Method")
    void fromProblemName() {
        String problemName = "19. Remove Nth Node From End of List";
        String packageName = "problem_0019_remove_nth_node_from_end_of_list";
        assertEquals(
                packageName,
                PackageNameGenerator.fromProblemName(problemName)
        );
    }
}