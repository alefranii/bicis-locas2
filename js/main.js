	function email(){
  		var email = document.getElementById("input-email").value;
 		if(!(/\S+@\S+\.\S+/).test(email));
 		if(!(/\S+@\S+\.\S+/).test(email)){
 			var createSpan = document.createElement("span");
 			var message = document.createTextNode("Email inválido, intétalo de nuevo");
 			var fatherClass = document.getElementsByClassName("email-container input-box")[0];
 			createSpan.appendChild(message);
 			fatherClass.appendChild(createSpan);
  		}
  	}
 	email();
 
 	function password{
 		var password = document.getElementById("input-password").value;
 		if(!(/^(?=.*\d).{6,}$/).test(password)|| password === "123456" || password==="098654" || password === "password"){
 			var createSpan= document.createElement("span");
 			var message= document.createTextNode("Contraseña inválida, inténtalo otra vez");
 			var fatherClass = document.getElementsByClassName("form-group input-box")[0];
 			createSpan.appendChild(message);
 			fatherClass.appendChild(createSpan);
 		}
 	}
 	password();
 
 	function option{
 		var select = document.getElementsByTagName("select");
 		for(var i=0; i<seleccion.length;i++){
 			var createSpan=document.createElement("span");
 			var message = document.createTextNode("Debes seleccionar una opción");
 			var fatherClass=document.getElementsByClassName("form-group input-box")[1];
 			createSpan.appendChild(message);
 			fatherClass.appendChild(createSpan);
 		}
 	}
 	option();