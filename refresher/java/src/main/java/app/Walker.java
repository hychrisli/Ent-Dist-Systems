package app;

public class Walker implements Runnable{

    private final int step;
    private int steps;
    private volatile boolean isRunning = true;

    public Walker(int start, int step){
        this.step = Math.min(Math.max(step, 1), 10);
        this.steps = Math.min(Math.max(0, start), 100);
    }

    public void terminate(){
        isRunning = false;
    }

    public int getSteps(){
        return steps;
    }

    @Override
    public void run() {
        while( isRunning && steps < Integer.MAX_VALUE - step + 1) {
            try {
                steps += step;
                Thread.sleep(50);
            } catch ( InterruptedException e) {
                isRunning = false;
            }
        }
    }
}
