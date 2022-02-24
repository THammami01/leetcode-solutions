package helpers;

public class ExecutionTimer {
    long startTime, endTime;

    public ExecutionTimer() {
        start();
    }

    public void start() {
        startTime = System.nanoTime();
    }

    public void stop() {
        endTime = System.nanoTime();
        // System.out.println("EXECUTION TIME IN MILLISECONDS: " + this.getTimeInMilliseconds());
        System.out.println("EXECUTION TIME IN NANOSECONDS: " + this.getTimeInNanoseconds());
    }

    public long getTimeInNanoseconds() {
        return endTime - startTime;
    }

    /**
     * @noinspection unused
     */
    // 1 SECOND = 1_000 or 10^3 MILLISECOND = 1_000_000_000 or 10^9 NANOSECOND
    public long getTimeInMilliseconds() {
        return (endTime - startTime) / 1_000_000;
    }

    /**
     * @noinspection unused
     */
    public static long getTimeInMilliseconds(ExecutionTimer ex) {
        return (ex.endTime - ex.startTime) / 1_000_000;
    }

    /**
     * @noinspection unused
     */
    public static long getTimeInMilliseconds(long startTime, long endTime) {
        return (endTime - startTime) / 1_000_000;
    }
}
