package app;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;


public class ArrayTest {

    int[] a;

    @Before
    public void init() {
        a = new int[]{1, 2, 3, 4, 5};
    }

    @Test
    public void testLkp() {
        Assert.assertEquals(4, a[3]);
    }

    @Test
    public void testSum() {
        Assert.assertEquals(15, IntArrayApp.sum(a));
    }

    @Test
    public void testAdd() {
        Assert.assertArrayEquals(new int[]{1, 2, 3, 4, 5, 7}, IntArrayApp.addVal(a, 7));
    }

    @Test
    public void testRemove() {
        Assert.assertArrayEquals(new int[]{1, 2, 3, 4}, IntArrayApp.removeLast(a));
    }
}
