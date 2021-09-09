//  functions

/* function doSomething(){
    console.log("I am function");
    return 22;
}

let a = doSomething();
console.log(a)

function funcThor(name,surname){
    console.log(`I am ${name} ${surname}`);
}

funcThor("Thor","Odinson"); */

/* function demo(){
    console.log("Hello");
} */

// console.log(document.getElementById("one").innerText="Language");
// function putText(){
//     document.getElementById("two").innerHTML="<h1>Hello World</h1>";
// }

function getName(){
    let data = document.getElementById("input").value;
    document.getElementById("two").innerHTML=
        document.getElementById("two").innerHTML+`<h1 class="todo">${data}</h1>`;
        document.getElementById("input").value="";
    }
function changeColor(){
    document.getElementById("two").style.backgroundColor ="yellowgreen";
}
//alert("Hello World!")