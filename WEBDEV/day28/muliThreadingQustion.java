// wirte a multiThreading program for print the #oneDayCoding in 50 times
public class muliThreadingQustion {
    public static void main(String[] args) {
        Runnable obj= () ->
        { 
            for (int i = 0; i < 25; i++)
                System.out.println("#oneDay"); 
            try { Thread.sleep(5);
            } catch (Exception e) {}
        };
        Runnable obj1= () ->
        { 
            for (int i = 0; i < 25; i++)
                System.out.println("Coding"); 
                    try { Thread.sleep(5);
                    } catch (Exception e) {}
        };
        Thread t1= new Thread(obj);
        Thread t2= new Thread(obj1);
        t1.start();
        t2.start();
       
    } 
}
