package app;

import java.util.Arrays;

public class IntArrayApp {

    public static int sum(int[] a) {
        int res = 0;
        for ( int val : a) res += val;
        return res;
    }

    public static int[] addVal(int[] a, int val){
        int[] b = Arrays.copyOf(a, a.length+1);
        b[a.length] = val;
        return b;
    }

    public static int[] removeByIdx(int[] a, int i){
        if (a.length == 0) return a;
        return Arrays.copyOf(a, a.length - 1);
    }


}
