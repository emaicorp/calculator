window.addEventListener('DOMContentLoaded', () =>{
    const input = document.getElementById("userInput");
    const numbers = document.querySelectorAll(".number");
    numbers.forEach((button)=>{
        button.addEventListener("click",()=>{
            if(input.innerText === "0"){
                input.innerText = "";
            }
            input.innerText += event.target.innerHTML.trim();
        })
    })
    console.log(typeof(input))

    const operators = document.querySelectorAll(".operation");
    operators.forEach((operation)=>{
        operation.addEventListener("click", (e)=>{
       let lastValue = input.innerText.substring(input.innerText.length, input.innerText.length - 1);
            switch(operation.innerText){
                case "+":
                    input.innerText += "+";
                    break;
                case "-":
                    input.innerText += "-";
                    break;
                case "*":
                    input.innerText += "*";
                    break;
                case "/":
                    input.innerText += "/";
                    break;
                case "%":
                    input.innerText += "%";
                    break;
              
                    case "DEL":
                        input.innerText = input.innerText.substring(0, input.innerText.length - 1);
                        if (input.innerText === "") {
                            input.innerText = "0";
                        }
                        break;
                                        
                case "=":
                    // input.innerText += "=";
                    if (!isNaN(lastValue) && e.target.innerHTML === "=") {
                        input.innerText = eval(input.innerText);
                    }
                    break;
                case "AC":
                    input.innerText = "0";
                    break;
                default:
                    // input.innerText += operation.innerText;
                    break;
            }
        })
    });
    
});