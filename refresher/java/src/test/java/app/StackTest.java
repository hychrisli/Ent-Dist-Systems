package app;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Stack;

public class StackTest {

    Stack<String> stk;

    @Before
    public void init(){
        stk = new Stack<String>();
        stk.push("Single Family");
        stk.push("Townhouse");
        stk.push("Condo");
    }

    @Test
    public void testPeek(){
        Assert.assertEquals("Condo", stk.peek());
        Assert.assertEquals(3, stk.size());
    }

    @Test
    public void testPush(){
        stk.push("Mobile");
        Assert.assertEquals("Mobile", stk.peek());
        Assert.assertEquals(4, stk.size());
    }

    @Test
    public void testPop(){
        Assert.assertEquals("Condo", stk.pop());
        Assert.assertEquals("Townhouse", stk.peek());
        Assert.assertEquals(2, stk.size());
    }

}
