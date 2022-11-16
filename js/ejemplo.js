//document.getElementById("cerrado").style.visibility="hidden";
function cambiarOjo(){
    if(document.getElementById("ojo").className=="bi bi-eye-slash-fill"){
        document.getElementById("ojo").className="bi bi-eye-fill";
        document.getElementById("inputpass").type="password";
    }else{
        document.getElementById("ojo").className="bi bi-eye-slash-fill";
        document.getElementById("inputpass").type="text";
    }
        
        
    //     document.getElementById("abierto").style.visibility="hidden";
    //     document.getElementById("cerrado").style.visibility="visible";   
    //     document.getElementById("cerrado").style.visibility="hidden";   
    //     document.getElementById("abierto").style.visibility="visible";  
     
}
