

 var inputBox = document.querySelector("#inputBox")
let button0 = document.querySelector("#button0")
let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")
let button5 = document.querySelector("#button5")
let button6 = document.querySelector("#button6")
let button7 = document.querySelector("#button7")
let button8 = document.querySelector("#button8")
let button9 = document.querySelector("#button9")
let buttonAdd = document.querySelector("#buttonadd")
let buttonSub = document.querySelector("#buttonsub")
let buttonDiv = document.querySelector("#buttondiv")
let buttonMul = document.querySelector("#buttonmul")
let buttonDot = document.querySelector("#buttondot")
let buttonEqual = document.querySelector("#buttonequal")
let buttonC = document.querySelector("#buttonC")
inputBox.innerHTML = "0"
var Text =""

button0.onclick = ()  =>{
    Text +="0"
    inputBox.innerHTML = Text
}

button1.onclick = ()  =>{
    Text +="1"
    inputBox.innerHTML = Text
}

button2.onclick = ()  =>{
    Text +="2"
    inputBox.innerHTML =  Text
}

button3.onclick = ()  =>{
    Text +="3"
    inputBox.innerHTML = Text
}

button4.onclick = ()  =>{
    Text +="4"
    inputBox.innerHTML = Text

}

button5.onclick = ()  =>{
    Text +="5"
    inputBox.innerHTML = Text
}

button6.onclick = ()  =>{
    Text +="6"
    inputBox.innerHTML = Text
}

button7.onclick = ()  =>{
    Text +="7"
    inputBox.innerHTML = Text
}

button8.onclick = ()  =>{
    Text +="8"
    inputBox.innerHTML = Text
}

button9.onclick = ()  =>{
    Text +="9"
    inputBox.innerHTML = Text
}
buttonAdd.onclick = ()  =>{
    Text +="+"
    inputBox.innerHTML = Text
}

buttonSub.onclick = ()  =>{
    Text +="-"
    inputBox.innerHTML = Text
}
buttonDiv.onclick = ()  =>{
    Text +="/"
    inputBox.innerHTML = Text
}
buttonMul.onclick = ()  =>{
    Text +="*"
    inputBox.innerHTML = Text
}
buttonDot.onclick = ()  =>{
    Text +="."
    inputBox.innerHTML = Text
}
buttonC.onclick = ()  =>{
    inputBox.innerHTML ="0"
    Text = ""
}
buttonEqual.onclick = ()  =>{
    inputBox.innerHTML = eval(Text)  // eval function calcule from String ...
}