function calculate(){
    const p=document.getElementById("principal").value
    const r=document.getElementById("rate").value
    const t=document.getElementById("years").value
    const result=document.getElementById("result")
    if(p==" " || p==0){
        alert("Please enter the value")
    }else{

        interest=(p*t*r)/100
        result.innerHTML=`The principal is ${p} and rate is ${r} and years is ${t} and the interest is ${interest}`
    }
}
function changing(){
    const rateval=document.getElementById("rate").value
    document.getElementById("rate--span").innerText=rateval
}

console.log("Hello World")