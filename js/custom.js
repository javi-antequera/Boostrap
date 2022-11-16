function aparecerTabla(){
    if(document.getElementById("ojo").className=="bi bi-eye-slash-fill"){
        document.getElementById("ojo").className="bi bi-eye-fill";
        document.getElementById("inputpass").type="password";
    }else{
        document.getElementById("ojo").className="bi bi-eye-slash-fill";
        document.getElementById("inputpass").type="text";
    }
}