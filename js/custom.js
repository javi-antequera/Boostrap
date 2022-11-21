function alertequipo(){
    $equipo=document.getElementById("select").value;
    if(document.getElementById("checkbox").checked){
        $check="YES";
    }else{
        $check="NO";
    }
    
    alert("Mail registered correctly,\n Team: "+$equipo +"\n Market info: "+$check);
}