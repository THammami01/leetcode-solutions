package helpers;


/**
 * @noinspection unused
 */
public class ExecutionTimer {
    private long startTime, endTime;
    private final In in;

    // 1 SECOND = 1_000 or 10^3 MILLISECOND = 1_000_000_000 or 10^9 NANOSECOND
    public enum In {
        SECONDS("SECONDS"),
        MILLI_SECONS("MILLI_SECONS"),
        NANO_SECONDS("NANO_SECONDS)");

        public final String label;

        In(String label) {
            this.label = label;
        }
    }

    public ExecutionTimer() {
        this.in = In.NANO_SECONDS;
        start();
    }

    public ExecutionTimer(In in) {
        this.in = in;
        start();
    }

    public void start() {
        startTime = System.nanoTime();
    }

    public void stop() {
        endTime = System.nanoTime();
        showTime();
    }

    public void showTime() {
        // NO FALL THROUGH WITH ARROW SYNTAX SO BREAK IS NOT REQUIRED, {} FOR BLOCK
        switch (in) {
            case SECONDS -> System.out.println("EXECUTION TIME IN SECONDS: " + this.getTimeInSeconds());
            case MILLI_SECONS -> System.out.println("EXECUTION TIME IN MILLISECONDS: " + this.getTimeInMilliseconds());
            case NANO_SECONDS -> System.out.println("EXECUTION TIME IN NANOSECONDS: " + this.getTimeInNanoseconds());
        }
    }

    public long getTimeInNanoseconds() {
        return endTime - startTime;
    }

    public long getTimeInMilliseconds() {
        return (endTime - startTime) / 1_000_000;
    }

    public long getTimeInSeconds() {
        return (endTime - startTime) / 1_000_000_000;
    }

    public static long getTimeInNanoseconds(ExecutionTimer ex) {
        return (ex.endTime - ex.startTime);
    }

    public static long getTimeInNanoseconds(long startTime, long endTime) {
        return (endTime - startTime);
    }

    public static long getTimeInMilliseconds(ExecutionTimer ex) {
        return (ex.endTime - ex.startTime) / 1_000_000;
    }

    public static long getTimeInMilliseconds(long startTime, long endTime) {
        return (endTime - startTime) / 1_000_000;
    }

    public static long getTimeInSeconds(ExecutionTimer ex) {
        return (ex.endTime - ex.startTime) / 1_000_000_000;
    }

    public static long getTimeInSeconds(long startTime, long endTime) {
        return (endTime - startTime) / 1_000_000_000;
    }
}
