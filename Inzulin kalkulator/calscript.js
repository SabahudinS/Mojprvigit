function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  //if (val !== 0.0) {
   // var percent = form.display.value;  
   // percent = pcent.substring(percent.indexOf("%")+1);
   // form.display.value = parseFloat(percent)/100 * val;
    //val = 0.0;
 // } else 
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}

// Insulin kalkulator app

const sto =100;
const petsto = 500;
let iuh;
let fio;
let cor;
let UH;
let tddi;
let cbg;
let wbg;
let uh;
let total;

document.getElementById("subBtn").onclick = function(){    

    tddi = document.getElementById("tddi").value;
    tddi = Number(tddi);
    console.log("Ovo je tddi", tddi)

    cbg = document.getElementById("cbg").value;
    cbg = Number(cbg);
    console.log("Ovo je cbg", cbg)

    wbg = document.getElementById("wbg").value;
    wbg = Number(wbg);
    console.log("Ovo je wbg", wbg)

    uh = document.getElementById("uh").value;
    uh=Number(uh)

    fio = sto/tddi;
    fio=Number(fio.toFixed(2))
    console.log("Ovo je fio", fio)

    iuh = petsto/tddi;
    iuh=Number(iuh.toFixed(2))
    console.log("Ovo je iuh", iuh);

    UH = uh/fio;
    UH=Number(UH.toFixed(2))
    console.log("Ovo je UH", UH)

    cor = (cbg-wbg)/fio;
    cor=Number(cor.toFixed(2))
    console.log("Ovo je cor", cor)

    total=UH + cor;
    total=Number(total.toFixed(2))
    console.log("Ovo je ukupno inzulina", total)

    document.getElementById("tot").innerHTML = "Za obrok: " + UH + "; Za korekciju: " + cor + "; Ukupno Inzulina: " + total + " JI";


}