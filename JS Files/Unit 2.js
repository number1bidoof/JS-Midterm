// Segment 1
function fibonacci(num0) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num0 === 1) {
        return num1;
    } else if (num0 === 2) {
        return num2;
    } else {
        for (let i = 2; i <= num0; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}
let num4 = Number(prompt('Please enter a number for the fibinochi sequence: '));
document.getElementById('mySection').innerHTML = fibonacci(num4);
// Segment 2
let num1 = 4;
let num2 = 7;
let num3 = 8;
// Create the button
let ansrbtn = document.createElement("button");
ansrbtn.id = "mybtn"
ansrbtn.innerHTML = "Answers"
document.body.appendChild(ansrbtn)
document.getElementById('mybtn').addEventListener("click", function(){
    document.getElementById('myAnswer1').textContent = num1+num2
    document.getElementById('myAnswer2').textContent = num1**num2
    document.getElementById('myAnswer3').textContent = num2%num1
    document.getElementById('myAnswer4').textContent = num3/num1
    let num6 = num1++
    let num7 = num3--
    console.log(num6);
    console.log(num7);
})
