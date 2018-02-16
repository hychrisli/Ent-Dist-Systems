package app;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

public class GenericsTest {

    private List<String> lstStr;
    private List<int[]> lstArr;

    @Before
    public void init(){
        lstStr = Arrays.asList(new String[]{"Asparagus aethiopicus", " Sprenger's Asparagus"});
        lstArr = Arrays.asList(new int[][]{{1,2,3,4}, {5,6,7},{8,9,10,11,12}});
    }

    @Test
    public void testIsEmpty(){
        Assert.assertFalse(lstStr.isEmpty());
        Assert.assertFalse(lstArr.isEmpty());
    }

    @Test
    public void testSize(){
        Assert.assertEquals(2,lstStr.size());
        Assert.assertEquals(3,lstArr.size());
    }

    @Test
    public void testElem(){
        String str1 = lstStr.get(1);
        Assert.assertTrue(lstStr.contains(str1));
        Assert.assertEquals(1, lstStr.indexOf(str1));

        int[] arr1 = lstArr.get(2);
        Assert.assertTrue(lstArr.contains(arr1));
        Assert.assertEquals(2, lstArr.indexOf(arr1));
    }
}
