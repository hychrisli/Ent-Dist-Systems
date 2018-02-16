package app;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Stack;

public class CollectionTest {

    private List<Integer> lst;
    private Stack<Integer> stk = new Stack<>();
    private HashSet<Integer> hs = new HashSet<>();

    @Before
    public void init() {
        lst = Arrays.asList(new Integer[]{1,4,3,2,5});
        stk.addAll(lst);
        hs.addAll(lst);
    }

    @Test
    public void testIsEmpty(){
        Assert.assertEquals(stk.isEmpty(), hs.isEmpty());
    }

    @Test
    public void testSize(){
        Assert.assertEquals(stk.size(), hs.size());
    }

    @Test
    public void testElem(){
        while(!stk.empty()){
            Assert.assertTrue(hs.contains(stk.pop()));
        }
    }
}
