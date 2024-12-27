Call back function-->
a function which is passed into another function as an argument is called callback function, this function invoked (calling) inside the outer function(HOF)




promise:
    ---> javascript object that keeps track of the eventual completion or failure of any asynchronous task.
    --->two properties
          --> State, result.


    State
        --> pending  (waiting)
        --> rejected (failure)
        --> resolved (fulfilled == completed)


//syntax
-- > promise can be created using promise constructor

        --> new Promise(function(resolve, reject){

        })

// task queue--> setTimeout , setInterval , clearInterval, clearTimeout.

//micro task queue---> promise, fetch

//top priority is for micro task queue, until the micro task queue is empty the task queue code waits.
