var message = 'Hello World';
function logMessage() {
    console.log(this.message);
}
logMessage();
//node.js doesn't have the window but has the global, the var value is at the window. node.js can't find out the message value so showed the "undefined".
//the chrome has the window, the var value is at the window, so that can see "Hello World" in browser.