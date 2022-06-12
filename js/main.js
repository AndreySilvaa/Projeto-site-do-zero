$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });


document.getElementById("menuicon").addEventListener("click", (e) =>{
  e.target.previousElementSibling.classList.toggle("hidden")
  if(e.target.previousElementSibling.classList.contains("hidden")){
    e.target.innerHTML = "&#x2630;"
  }else{
    e.target.innerHTML = "&#x2715;"
  }
})
