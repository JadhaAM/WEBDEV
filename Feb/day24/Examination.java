
public class Examination extends Thread {
public void run(){
    for (int i = 0; i < 50; i++) {
        System.out.println("examination");
    }
}
public static void main(String[] args) {
    Thread t1 = new Examination();
    t1.start();    
}
}