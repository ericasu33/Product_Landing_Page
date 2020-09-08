var header = document.getElementById("header");
var html = document.querySelector("html");

document.addEventListener("scroll", function(){
  let statictop = html.scrollTop;
  console.log(statictop);

  if (statictop !== 0) {
      header.classList.add("scrollheader");
  } else {
      header.classList.remove("scrollheader");
  }

})
