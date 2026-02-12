const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})

const socialIcons = document.querySelectorAll('.box-icons i');

socialIcons.forEach(icon => {
  icon.addEventListener('click', () => {

    if (icon.classList.contains('bxl-tiktok')) {
      window.open('https://www.tiktok.com/', '_blank');
    }

    if (icon.classList.contains('bxl-instagram')) {
      window.open('https://www.instagram.com/', '_blank');
    }

    if (icon.classList.contains('bxl-whatsapp')) {
      window.open('https://wa.me/', '_blank');
    }

    if (icon.classList.contains('bxs-phone')) {
  window.location.href = "tel:+254733768731";
}


  });
});
