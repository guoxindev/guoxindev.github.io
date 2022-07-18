setTimeout(() => {
    console.clear()
}, 1500);
function main(call){

    if (call=="rc"){
        window.location.href=go
    }
    if(call=="404"){
        document.getElementById("404").innerHTML="Location "+"["+location.pathname+"]"+"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    is not found on the server"
    }
}