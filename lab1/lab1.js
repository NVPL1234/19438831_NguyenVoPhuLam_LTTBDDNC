var txtA = document.createElement("input")
txtA.setAttribute("placeholder", "Nhập a")
document.body.appendChild(txtA)
document.body.appendChild(document.createElement("br"))

var txtB = document.createElement("input")
txtB.setAttribute("placeholder", "Nhập b")
document.body.appendChild(txtB)
document.body.appendChild(document.createElement("br"))

var btnAdd = document.createElement("button")
btnAdd.textContent = "Cộng"
document.body.appendChild(btnAdd)
document.body.appendChild(document.createElement("br"))

btnAdd.addEventListener("click", function handleClick(){
    var a = parseInt(txtA.value)
    var b = parseInt(txtB.value)
    var result = a+b
    var p = document.createElement("p")
    p.innerHTML = "Kết quả = " + result
    document.body.appendChild(p)
})