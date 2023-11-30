document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburger");
    const headerList = document.getElementById("headerList");
  
    hamburgerIcon.addEventListener("click", function () {
      headerList.classList.toggle("active");
    });
  });
