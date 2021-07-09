const albumBtn = document.querySelector(".album__btn");
const albumPages = document.querySelectorAll(".album__page");
const album = document.querySelector(".album");
albumPages.forEach( el => {
    el.addEventListener("animationstart", function () {
        if(!album.classList.contains("animating")) {
            album.classList.add("animating");
        }
    })
    el.addEventListener("animationend", function () {
        if(album.classList.contains("animating"))
        album.classList.remove("animating");
    })

})

albumBtn.addEventListener("click", function () {
   albumPages.forEach( el => {
       if(el.classList.contains("open") && !album.classList.contains("animating")) {
           el.classList.remove("open");
           el.classList.add("close");
       } else if(!album.classList.contains("animating"))  {
           el.classList.add("open");
           el.classList.remove("close");
       }
   })
});
