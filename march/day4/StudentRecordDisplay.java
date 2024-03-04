import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;

public class StudentRecordDisplay extends JFrame implements ActionListener {
    // JDBC URL, username, and password
    static final String JDBC_URL = "jdbc:mysql://localhost:3306/your_database_name";
    static final String USERNAME = "your_username";
    static final String PASSWORD = "your_password";

    // Components
    JTextField rollNoField, nameField, percentageField;
    JButton displayButton;

    // Constructor
    public StudentRecordDisplay() {
        setTitle("Student Record Display");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Initialize components
        rollNoField = new JTextField(10);
        nameField = new JTextField(10);
        percentageField = new JTextField(10);
        displayButton = new JButton("Display Record");
        displayButton.addActionListener(this);

        // Layout
        JPanel panel = new JPanel(new GridLayout(4, 2));
        panel.add(new JLabel("Roll No:"));
        panel.add(rollNoField);
        panel.add(new JLabel("Name:"));
        panel.add(nameField);
        panel.add(new JLabel("Percentage:"));
        panel.add(percentageField);
        panel.add(displayButton);

        // Add panel to frame
        add(panel);

        // Make frame visible
        setVisible(true);
    }

    // ActionListener method
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == displayButton) {
            displayFirstRecord();
        }
    }

    // Method to display first record from student table
    private void displayFirstRecord() {
        try (Connection connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT * FROM student LIMIT 1")) {

            if (resultSet.next()) {
                int rollNo = resultSet.getInt("RNo");
                String name = resultSet.getString("SName");
                double percentage = resultSet.getDouble("Per");

                // Display record in TextFields
                rollNoField.setText(String.valueOf(rollNo));
                nameField.setText(name);
                percentageField.setText(String.valueOf(percentage));
            } else {
                JOptionPane.showMessageDialog(this, "No records found in the student table");
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    public static void main(String[] args) {
        new StudentRecordDisplay();
    }
}
