function obtenerDatos(){

    let nombre = document.getElementById('nombre').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;
    let pais = document.getElementById('pais').value;
    let region = document.getElementById('region').value;
    let password = document.getElementById('password').value;
    let password1 = document.getElementById('password1').value;
    let direccion = document.getElementById('direccion').value;

        if(nombre=== null || nombre===''){
            alert('Ingresa tu nombre');  
           
        }
        if(password=== null || password===''){
            alert('Ingresa Su Contraseña');  
           
        }
        if(direccion=== null || direccion===''){
            alert('Ingrese Su Dirección');  
           
        }
        if(password1=== null || password1===''){
            alert('Ingresa Su Contraseña Nuevamente');  
           
        }
        if(celular.length<12){
            alert('Ingresa tu celular');
            
        }
        if(email=== null || email===''){
            alert('Ingresa tu email');
          
        }
        if(pais=== null || pais===''){
              alert('Ingresa tu país');
            
        }
        if(region=== null || region===''){
                alert('Ingresa Su Región');
                
        }
             
    
        arroba = email.indexOf("@");
        punto =  email.lastIndexOf(".");
      
        
        if (arroba < 1 || ( punto - arroba < 2 )||email===""){
           console.log("Correo Inválido");
           alert('Correo Inválido');
           
        }else{
          console.log("Correo Válido");
          
        }
    }
     