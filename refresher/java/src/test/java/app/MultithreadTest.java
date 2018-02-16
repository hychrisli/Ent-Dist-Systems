package app;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.concurrent.TimeUnit;

public class MultithreadTest {

    private Thread thread1, thread2;
    private Walker walker1, walker2;

    @Before
    public void init() {
        walker1 = new Walker(0, 5);
        walker2 = new Walker(15, 2);
        thread1 = new Thread(walker1);
        thread2 = new Thread(walker2);
        thread1.start();
        thread2.start();
    }

    @After
    public void cleanup() {
        cleanup(thread1, walker1);
        cleanup(thread2, walker2);
    }

    private void cleanup(Thread t, Walker w) {
        if (t != null) {
            w.terminate();
            try {
                t.join();
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }

    @Test
    public void test() {
        Assert.assertTrue(walker1.getSteps() < walker2.getSteps());
        //System.out.println(walker1.getSteps() + " v.s. " + walker2.getSteps());
        sleep();
        Assert.assertTrue(walker1.getSteps() > walker2.getSteps());
        //System.out.println(walker1.getSteps() + " v.s. " + walker2.getSteps());
    }

    private void sleep() {
        try {
            TimeUnit.MILLISECONDS.sleep(500);
        } catch (InterruptedException e) {
            System.out.println(e.getMessage());
        }
    }
}
