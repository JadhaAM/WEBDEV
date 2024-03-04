 import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class NumberDisplay extends JFrame {
    private JTextField textField;
    private JButton startButton;
    private volatile boolean running;

    public NumberDisplay() {
        setTitle("Number Display");
        setSize(300, 200);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        textField = new JTextField();
        startButton = new JButton("Start");
        startButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (!running) {
                    startDisplayingNumbers();
                    startButton.setEnabled(false);
                }
            }
        });

        add(textField, BorderLayout.CENTER);
        add(startButton, BorderLayout.SOUTH);
    }

    private void startDisplayingNumbers() {
        running = true;
        new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i = 1; i <= 100 && running; i++) {
                    textField.setText(String.valueOf(i));
                    try {
                        Thread.sleep(500); // Adjust the delay as needed
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                running = false;
                startButton.setEnabled(true);
            }
        }).start();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new NumberDisplay().setVisible(true);
            }
        });
    }
}

