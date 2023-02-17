# javaScriptBasicProjectForStart2Impact
link free host : https://javascriptbasic-project-counter.netlify.app/

Counter Readme

This code is a JavaScript counter that allows users to increment, decrement, and reset a number value. The counter is displayed on an HTML page with buttons for each action.

How to Use
Open the HTML file in a web browser
Click the "+" button to increase the counter by 1
Click the "-" button to decrease the counter by 1
Click the "Reset" button to reset the counter to 0
Code Structure
Global Variables
number: a global variable that represents the current counter value.
createAllElements() Function
This function is used to create the HTML elements for the counter. It creates a container div and a row div, and adds the buttons, the counter display, and the reset button to the row div.

createElement() Function
This function is a helper function used by createAllElements(). It creates and returns a new HTML element with the specified tag, class name, and inner HTML.

resetCounter() Function
This function is used to reset the counter to 0. It checks if the counter is already 0 before resetting it. It updates the display text accordingly.

increaseNumber() Function
This function is used to increment the counter by 1. It updates the display text accordingly.

decreaseNumber() Function
This function is used to decrement the counter by 1. It checks if the counter is already 0 before decrementing it. If the counter is already at 0, it displays an alert to the user. It updates the display text accordingly.

animateElements() Function
This function is used to add some animation and style to the HTML elements. It fades in each element after a set delay.
