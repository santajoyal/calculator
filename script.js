let outputscreen=document.getElementById("output-screen");

function display(num){
    outputscreen.value+=num;
}
function calculate(){
    try {
        outputscreen.value=eval(outputscreen.value);
    } catch (error) {
        alert("Invalid");
    }
}
function Clear(){
    outputscreen.value="";
}