package app;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

// --- Doc Class --
public class Doc implements Iterable<String>, Comparable<Doc> {

    private List<String> notes ;

    Doc(String[] strs){
        notes = Arrays.asList(strs);
    }

    @Override
    public Iterator<String> iterator() {
        return notes.iterator();
    }

    @Override
    public int compareTo(Doc that) {
        return this.getLen() - that.getLen();
    }

    public int getLen(){
        return notes.size();
    }
}
