public class multiThreading {
    public static void main(String[] args) {
        Runnable obj= () ->
        { 
            for (int i = 0; i < 5; i++)
                System.out.println("hello"); 
            try { Thread.sleep(5);
            } catch (Exception e) {}
        };
        Runnable obj1= () ->
        { 
            for (int i = 0; i < 5; i++)
                System.out.println("world"); 
                    try { Thread.sleep(5);
                    } catch (Exception e) {}
        };
        Thread t1= new Thread(obj);
        t1.start();
        Thread t2= new Thread(obj1);
        t2.start();
    }
}
