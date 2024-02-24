public class reversSeras extends Thread {
    public void run (){
        for(int i=100;i>0;i--){
            System.out.println(i);
        }
    }
    public static void main(String[] args) {
        Thread t1=new reversSeras();
        t1.start();
    }
}
