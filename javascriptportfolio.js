window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function changePhoto(){
  var image= document.getElementById("myImage");
  image.setAttribute("src","project/photo1.png")
}

function changePhoto2(){
  var image= document.getElementById("myImage2");
  image.setAttribute("src","project/photo2.png")
}