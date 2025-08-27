// Esto agrega un offcanva clonado totalmente de Boostrap

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
buyBtn.setAttribute('class','btn btn-success mt-auto comprar');
buyBtn.textContent='Comprar';
offcanvaBody.appendChild(buyBtn);
// Esto agrega un offcanva clonado totalmente de Boostrap


// contenedor dinamico para descripcion footer

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
// contenedor dinamico para descripcion footer


//Probando iziToast y practicando forEach

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

const btnComprar=document.querySelectorAll('.comprar');
btnComprar.forEach(botonComp=>{
  botonComp.addEventListener('click', noSeHacerlo);
});

const btnAgregar=document.querySelectorAll('.agregar');
btnAgregar.forEach(botonAgr=>{
  botonAgr.addEventListener('click',noSeHacerlo)
});
//Probando iziToast y practicando forEach


//Validar formLogin

const formLogin=document.getElementById('formLogin');
const nombreLog=document.getElementById('nombreLog');
const passLog=document.getElementById('passLog')
const errorNameLog=document.getElementById('errorNameLog');
const errorPassLog=document.getElementById('errorPassLog');
const correctoLog=document.getElementById('correctoLog')
const btnLogin=document.getElementById('btnLogin')
btnLogin.addEventListener('click',function(){
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
    iziToast.success({
    title:'¡Bienvenido '+nombreLog.value+'!',
    onOpening:function(){
        const btnCerrarLog=document.querySelector('#offcanvasRight1 .btn-close');
        if (btnCerrarLog) btnCerrarLog.click();
    }
});
    }
});
//Fin validar formLogin


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
    imagen.src = original;
  })
});


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


// cambiar colores y elegir talles

const btnRojo=document.getElementById('btnRojo');
const btnRosa=document.getElementById('btnRosa');
const btnAmarillo=document.getElementById('btnAmarillo');
const colorElegido=document.getElementById('colorElegido');

btnRojo.addEventListener('click',()=>{
  colorElegido.innerText='Color Rojo seleccionado'
});
btnRosa.addEventListener('click',()=>{
  colorElegido.innerText='Color Rosa seleccionado'
});
btnAmarillo.addEventListener('click',()=>{
  colorElegido.innerText='Color Amarillo seleccionado'
});


const btnTalleS=document.getElementById('talleS');
const btnTalleM=document.getElementById('talleM');
const btnTalleL=document.getElementById('talleL');
const talleElegido=document.getElementById('talleElegido');

btnTalleS.addEventListener('click',()=>{
  talleElegido.innerText='Talle S seleccionado'
});
btnTalleM.addEventListener('click',()=>{
  talleElegido.innerText='Talle M seleccionado'
});
btnTalleL.addEventListener('click',()=>{
  talleElegido.innerText='Talle L seleccionado'
});
// cambiar colores y elegir talles



//Hover con click descripcion

const hoverDesc = document.querySelector('.img-desc');

function imagenToggle(){
  if(hoverDesc.src.includes("fav-bebe.png")){
    hoverDesc.src = "imagenes/fav-bebe-hover.png";
  }else{
    hoverDesc.src = "imagenes/fav-bebe.png";
  }
}
hoverDesc.addEventListener('click',imagenToggle);
