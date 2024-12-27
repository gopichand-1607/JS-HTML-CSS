JS is synchronous in nature
Which means it execute one line of code at a time.

but if a line of code take longer period of time, the below code should wait until the code execution is completed.

in order to avoid this behaviour we will be converted js into asynchronous code.


In order to convert to asynchronous way, js alone isn't enough,
We have WEB browser API's


WEB API's makes js asynchronous programming possible.
WEB browser will give use certain methods which will allow us to use WEB browser API.



1. setTimeout
2. setInterval
3. Local Storage
4. fetch


--------------------------
1. Stack order.
2. Queue order
3. Web Api.


event loop
stack ---> Web Api (browser)---> queue ---> stack


// data types
    1. Primitive data type (pass by value)
           a. number
           b. boolean
           c. string
           d. null
           e. undefined
    2. Non primitive data type (pass by reference)
           a. array
           b. function
           c. object
