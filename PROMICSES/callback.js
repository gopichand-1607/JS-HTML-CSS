


function Data() {
    setTimeout(()=>{

        console.log("data");
    },2000);
} //HOF.




function processData(){
    console.log("processData...");
}  //callback


Data(processData); //processData is a callback function for Data function


//response---> result
//reject---> error or issue



//amazon ---> homepage ---> server 