const offcanva=document.createElement('div');
const offcanvaHeader=document.createElement('div');
const offcanvaTitle=document.createElement('h5');
const offcanvaCerrar=document.createElement('button');
const offcanvaBody=document.createElement('div');
const cartItems=document.createElement('div');
const buyBtn=document.createElement('button');


offcanva.setAttribute('class','offcanvas offcanvas-end');
offcanva.setAttribute('tabindex','-1');
offcanva.setAttribute('id','offcanvasRight');
offcanva.setAttribute('aria-labelledby','offcanvasRightLabel');
document.body.appendChild(offcanva);

offcanvaHeader.setAttribute('class','offcanvas-header');
offcanva.appendChild(offcanvaHeader);

offcanvaTitle.setAttribute('class','offcanvas-title');
offcanvaTitle.setAttribute('id','offcanvasRightLabel');
offcanvaTitle.textContent='Tu carrito';
offcanvaHeader.appendChild(offcanvaTitle);

offcanvaCerrar.setAttribute('type','button');
offcanvaCerrar.setAttribute('class','btn-close');
offcanvaCerrar.setAttribute('data-bs-dismiss','offcanvas');
offcanvaCerrar.setAttribute('aria-label','close')
offcanvaHeader.appendChild(offcanvaCerrar);

offcanvaBody.setAttribute('class','offcanvas-body d-flex flex-column');
offcanva.appendChild(offcanvaBody);

cartItems.setAttribute('id','cart-items');
cartItems.setAttribute('class','mb-3');
offcanvaBody.appendChild(cartItems);

buyBtn.setAttribute('id','buy-btn');
buyBtn.setAttribute('class','btn btn-success mt-auto');
buyBtn.textContent='Comprar';
offcanvaBody.appendChild(buyBtn);


// Esto toma todas las imagenes con el class "img-cat" a las que le puse el data en el html
const CatHoverMain = document.querySelectorAll(".img-cat");
//Recorre las imagenes para aplicar el efecto hover. Se puede hacer con un "for" pero con "forEach" es mas limpio
CatHoverMain.forEach(imagen=>{
  const original = imagen.dataset.original;
  const hover = imagen.dataset.hover;
// Cambia la imagen original por la otra que traemos para el hover
  imagen.addEventListener("mouseenter",()=>{
    imagen.src = hover;
    
  });
// Cuando se saca el mouse del marco de la imagen, vuelve a la imagen original
  imagen.addEventListener("mouseleave",()=>{
    imagen.src = original
  })
})


//Dark mode
const cambiarFon=document.getElementById('cambiarFon');
const body=document.body;
const icono=document.getElementById('icono');

body.classList.add('tema-claro');

cambiarFon.addEventListener('click',function(){
if(body.classList.contains('tema-claro')){
    body.classList.remove('tema-claro');
    body.classList.add('tema-oscuro');
    icono.src='imagenes/sun.svg'
    
    
}else{
    body.classList.remove('tema-oscuro');
    body.classList.add('tema-claro');
    icono.src='imagenes/moon.svg'
    
}
});
//dark mode

// Validar formRegistro//
const formRegistro=document.getElementById('formRegistro');
const nombreRegistro=document.getElementById('nombreRegistro');
const passRegistro=document.getElementById('passRegistro');
const emailRegistro=document.getElementById('emailRegistro');
const dniRegistro=document.getElementById('dniRegistro');
const telRegistro=document.getElementById('telRegistro');
const errorName=document.getElementById('errorName');
const errorEmail=document.getElementById('errorEmail')
const errorDni=document.getElementById('errorDni')
const errorTel=document.getElementById('errorTel')
const errorPass=document.getElementById('errorPass')
formRegistro.addEventListener('submit',function(evento){
    evento.preventDefault();
    errorName.innerText='';
    errorPass.innerText='';
    errorEmail.innerText='';
    errorTel.innerText='';
    errorDni.innerText='';
    if(nombreRegistro.value===''){
        errorName.innerText='Ingrese su Nombre';
        errorName.style.color='red';
    }else if(emailRegistro.value===''){
        errorEmail.innerText='Ingrese su E-mail';
        errorEmail.style.color='red';
    }else if(dniRegistro.value===''){
        errorDni.innerText='Ingrese su N° de DNI';
        errorDni.style.color='red';
    }else if(telRegistro.value===''){
        errorTel.innerText='Ingrese su N° de Telefono';
        errorTel.style.color='red';
    }else if(passRegistro.value===''){
        errorPass.innerText='Ingrese su Contraseña';
        errorPass.style.color='red';
    }
    else {
      Swal.fire({
      title: "¡Bienvenido a Giannini Kidswear!",
      text: "Gracias por registrarse.",
      icon: "success",
      draggable: true,
      confirmButtonText: '<a href="index.html" style="color: white; text-decoration: none;">Ir al sitio</a>'
  });
}
});
//Final validacion formRegistro

//Validar formLogin// 
/*
const formLogin=document.getElementById('formLogin');
const nombreLog=document.getElementById('nombreLog');
const passLog=document.getElementById('passLog')
const errorNameLog=document.getElementById('errorNameLog');
const errorPassLog=document.getElementById('errorPassLog');
const correctoLog=document.getElementById('correctoLog')
formLogin.addEventListener('submit',function(evento){
    evento.preventDefault();
    errorNameLog.innerText='';
    errorPassLog.innerText='';
    if(nombreLog.value===''){
        errorNameLog.innerText='Ingrese su nombre';
        errorNameLog.style.color='red';
    }
    else if(passLog.value===''){
        errorPassLog.innerText='Ingrese su Contraseña';
        errorPassLog.style.color='red';
    }else{
      correctoLog.innerText='Sus datos son correctos'
      correctoLog.style.color='green'
    }
});
//Fin validar formLogin
*/