let val=document.getElementById("url")
let QRimg=document.getElementById("QRimg")
let imgBOX=document.getElementById("imgBOX")

function qrcall(event) {
    event.preventDefault();
    QRimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+val.value
    imgBOX.classList.add("showimg")
}