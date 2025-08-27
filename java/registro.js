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


function noSeHacerlo(){
iziToast.show({
    title: 'Mmmm...',
    message: 'Esto no lo sé hacer todavía.',
    image: 'https://i.ibb.co/8pxzpfw/nombre-de-la-imagen.png',
    imageWidth: 100,
    imageHeight: 100,
    position: 'topRight'
});
}

const buscar=document.getElementById('buscar');
buscar.addEventListener('click',noSeHacerlo);


const contDin=document.getElementById('contenedorDinamico');
const sobreNosotros=document.getElementById('sobreNosotros');

sobreNosotros.addEventListener('click',(e)=>{
  e.preventDefault();
  contDin.innerHTML='';
  const sobreNosTitle=document.createElement('h2');
    sobreNosTitle.innerText='Sobre nosotros...'
    sobreNosTitle.style.textAlign='center'
  const sobreNosP=document.createElement('p');
    sobreNosP.innerText='Esta página fue creada desde cero por un estudiante de diseño web con el objetivo de aprender cada día más. Giannini Kidswear nace de una inspiración que me motiva a explorar y crear experiencias web únicas. ¡Espero que disfruten navegando por la página!'
    sobreNosP.style.textAlign='justify'
    contDin.appendChild(sobreNosTitle);
    contDin.appendChild(sobreNosP);
    contDin.style.display='block'
    contDin.scrollIntoView({ behavior:'smooth',block:'start'});
});

// contenedor dinamico para descripcion footer
const faq=document.getElementById('faq')
faq.addEventListener('click',(e)=>{
  e.preventDefault();
  contDin.innerHTML='';
  const faqTitle=document.createElement('h2');
    faqTitle.innerText='Preguntas frecuentes...'
    faqTitle.style.textAlign='center'
  const faqList=document.createElement('ul');
  const q1=document.createElement('li');
    q1.innerHTML='<strong>¿Se puede comprar algo?<br>Ojala...Porque me vendrian bien unos mangos'
    faqList.appendChild(q1);
  const q2=document.createElement('li');
    q2.innerHTML='<strong>¿Hacen envios?<br>Si, pero solo dentro del edificio Matilda'
    faqList.appendChild(q2);
  contDin.appendChild(faqTitle);
  contDin.appendChild(faqList)
  contDin.style.display='block'
  contDin.scrollIntoView({behavior:'smooth',block:'start'});
});


const comoComprar=document.getElementById('comoComprar');
comoComprar.addEventListener('click',(e)=>{
  e.preventDefault();
  contDin.innerHTML='';
  const comprarTitle=document.createElement('h2');
    comprarTitle.innerText='¿Como comprar?'
    comprarTitle.style.textAlign='center'
  const comprarP=document.createElement('p');
    comprarP.innerText='Todavia no podes comprar nada... '
    comprarP.style.textAlign='justify'
  contDin.appendChild(comprarTitle);
  contDin.appendChild(comprarP);
  contDin.style.display='block'
  contDin.scrollIntoView({behavior:'smooth',block:'start'})
});

// Validar formRegistro//
const formRegistro=document.getElementById('formRegistro');
const nombreRegistro=document.getElementById('nombreRegistro');
const passRegistro=document.getElementById('passRegistro');
const emailRegistro=document.getElementById('emailRegistro');
const dniRegistro=document.getElementById('dniRegistro');
const telRegistro=document.getElementById('telRegistro');
const errorName=document.getElementById('errorName');
const errorEmail=document.getElementById('errorEmail')
const errorDni=document.getElementById('errorDni');
const errorTel=document.getElementById('errorTel');
const errorPass=document.getElementById('errorPass');
const btnRegistro=document.getElementById('btnRegistro')
btnRegistro.addEventListener('click',function(evento){
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

//Dark mode
const cambiarFon=document.getElementById('cambiarFon');
const body=document.body;
const icono=document.getElementById('icono');

body.classList.add('tema-claro');

cambiarFon.addEventListener('click',function(){
if(body.classList.contains('tema-claro')){
    body.classList.remove('tema-claro');
    body.classList.add('tema-oscuro');
    icono.src='imagenes/sun.svg';
    
    
}else{
    body.classList.remove('tema-oscuro');
    body.classList.add('tema-claro');
    icono.src='imagenes/moon.svg';
    
}
});
//dark mode