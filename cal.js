//display all no. and operators other than ac inside input with id=result
//when we click it

function display(num){
    result.value=num
    console.log(result);
}

//clear all content from input when we click on ac button

function clearall(){
    result.value = ""
}
//evaluate expression using eval

function output(){
    result.value=eval(result.value)
}
//remove last item

funtion remove(){
    result.value=(result.value).slice(0,-1)
}