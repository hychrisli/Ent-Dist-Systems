package app;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class QueueTest {

    Queue<String> q;

    @Before
    public void init(){
        q = new LinkedList<String>();
        q.addAll(Arrays.asList(new String[]{"Single Family", "Townhouse", "Condo"}));
    }

    @Test
    public void testPeak(){
        Assert.assertEquals("Single Family", q.peek());
        Assert.assertEquals(3, q.size());
    }

    @Test
    public void testPoll(){
        Assert.assertEquals("Single Family", q.poll());
        Assert.assertEquals("Townhouse", q.peek());
        Assert.assertEquals(2, q.size());
    }

    @Test
    public void testAdd(){
        q.add("Mobile");
        Assert.assertEquals(4, q.size());
    }

}
