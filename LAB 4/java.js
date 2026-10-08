let valor = Math.floor(Math.random() * 101);
console.log (valor)

function tentativa() {
    let num = document.getElementById("num").value;
    

    if (num == valor) {
        let status = "Parabéns! Você acertou o número!";
        let revela = "O número era: " + valor + "!"
        document.getElementById("status").style.setProperty("background-color", "rgb(152, 255, 183)");
        document.getElementById("status").innerHTML = status;
        document.getElementById("revela").innerHTML = revela;
    }


        else if (num > valor) {
        let status = "O número digitado é menor que esse!"
        document.getElementById("status").style.setProperty("background-color", "rgb(152, 255, 250)");
        document.getElementById("status").innerHTML = status;
        document.getElementById("tentativas_g").innerHTML += num + " "
        }
    
        else {
        let status = "O número digitado é maior que esse!";
        document.getElementById("status").style.setProperty("background-color", "rgb(194, 193, 255)");
        document.getElementById("status").innerHTML = status;
        document.getElementById("tentativas_p").innerHTML += num + " "
        } 
    }


