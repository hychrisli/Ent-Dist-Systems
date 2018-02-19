package app;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

public class InterfaceTest {

    private Doc docA;
    private List<Doc> docList;

    @Before
    public void init() {
        docA = new Doc(new String[]{
                "a peck of", "pickled peppers."});
        docList = new ArrayList<>();
        docList.add(docA);
        docList.add(new Doc(new String[]{
                "I saw Susie", "sitting in", "a shoe shine shop."}));
        docList.add(new Doc(new String[]{"1"}));
    }

    @Test
    public void testIteration() {
        Iterator<String> it = docA.iterator();
        Assert.assertEquals("a peck of", it.next());
        Assert.assertEquals("pickled peppers.", it.next());
        Assert.assertEquals(false, it.hasNext());
    }

    @Test
    public void testCompare() {
        Assert.assertEquals(2, docList.get(0).getLen());
        Assert.assertEquals(1, docList.get(2).getLen());
        Collections.sort(docList);
        Assert.assertEquals(1, docList.get(0).getLen());
        Assert.assertEquals(3, docList.get(2).getLen());
    }

}
