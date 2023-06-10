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