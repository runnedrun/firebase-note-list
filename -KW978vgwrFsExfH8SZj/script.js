// demo function
function logArgs(args) {
  console.log(args)
  // Get 
}

function coolfunction(args) {
  return args;
}

$("#button" ).click(function () {
  console.log("hi!");
});
var functionString = coolfunction.toString();
console.log(functionString)
var consoleLogExample = $("#cool-function-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString);

consoleLogExample.html(formattedExample);

var functionString = logArgs.toString();
console.log(functionString)
var consoleLogExample = $("#console-log-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString);

consoleLogExample.html(formattedExample);

var functionString = '$("#button").click(function () {' +
    '\n    console.log("hi!");' +
    '\n});';
console.log(functionString)
var consoleLogExample = $("#jquery-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString);

consoleLogExample.html(formattedExample);

var functionString = '<button type="button" class="btn btn-primary">Primary</button>';
console.log(functionString)
var consoleLogExample = $("#bootstrap-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString);

consoleLogExample.html(formattedExample);

formattedExample.text(functionString);

consoleLogExample.html(formattedExample);