# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The code goes to actions and generates the dispatch(renamed impetus) parameters
* Impetus takes the returned parameters as it is the exported reducer and runs it through its conditional logic
* The state will change based result of the conditional logic
...

* TotalDisplay shows the total plus 1.
