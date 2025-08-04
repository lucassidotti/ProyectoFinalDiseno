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