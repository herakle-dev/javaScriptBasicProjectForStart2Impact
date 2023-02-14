# javaScriptBasicProjectForStart2Impact

Counter App
This is a simple JavaScript application that functions as a counter. It allows the user to increase and decrease the counter value by clicking on two buttons.
Getting Started
        To use this application, simply open the index.html file in your web browser. The counter will start at 0 and you can click the "+" and "-" buttons           to change the value.
Requirements
    The application must be developed with JavaScript.
    jQuery and other frameworks (React, Angular, Vue, etc.) are not allowed.
    External JavaScript libraries are allowed if necessary.
    The "+" and "-" buttons, as well as the counter value display, must be implemented with JavaScript.
    All additional features that are deemed necessary are allowed.
Project Structure
    The project structure follows the best practices of web development. The HTML code is contained in the index.html file. All the styles are defined in         style.css file in the assets/css directory. The JavaScript code is contained in script.js file in the assets/js directory. 




*********JAVASCRIPT ***************
This JavaScript code creates a counter that allows you to increase or decrease the value using two buttons. When the page loads, the code creates a section h1 showing the initial value of the counter (0) and two buttons, one to increase the value and one to decrease it.

The code uses three functions to create the different elements:

    createCounterText() creates the h1 section which shows the value of the counter
    createIncreaseButton() creates the button to increment the value
    createDecreaseButton() creates the button to decrease the value
    
The code also uses two functions to handle math calculations:
    incrementNumber() increases the value of the counter by 1
    reduceNumber() decrements the counter value by 1, with a check to prevent the value from going negative

In the end, the code uses three setTimeouts to create a transition animation for the different elements. 
The background of the body is set to "#b0c4de".

