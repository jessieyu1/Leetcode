class test {
    public static void setArray(int[] a) {
        for (int i = 0; i < a.length; i++) {
            a[i] = 0;
        }
    }

    public static void main(String[] args) {
        int[] a = { 1, 5, 6, 8 };
        setArray(a);
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}