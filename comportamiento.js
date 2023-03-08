
document.getElementById('btn-enviar').onclick= function(){
    var nombre = document.getElementById('nombre').value;
    if(nombre==""){
    document.getElementById('verif-nombre').innerHTML= "El campo nombre esta vacio";
    document.getElementById('verif-nombre').style.fontStyle='italic';
    document.getElementById('verif-nombre').style.color= '#FF0000';
    }

    var telefono = document.getElementById('telefono').value;
    if(telefono==""){
    document.getElementById('verif-tel').innerHTML= "El campo telefono esta vacio";
    document.getElementById('verif-tel').style.fontStyle='italic';
    document.getElementById('verif-tel').style.color= '#FF0000';
    }

    var email = document.getElementById('email').value;
    if(email==""){
    document.getElementById('verif-email').innerHTML= "El campo email esta vacio";
    document.getElementById('verif-email').style.fontStyle='italic';
    document.getElementById('verif-email').style.color= '#FF0000';
    }

    if(nombre!="" && telefono!="" && email!=""){
        alert(nombre + ": tu mensaje fue enviado!!!")
       
    }
}