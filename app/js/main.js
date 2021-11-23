const albumBtn = document.querySelector(".album__btn");
const albumSheets = document.querySelectorAll(".album__sheet");
const album = document.querySelector(".album");
const cancelBtn = document.querySelector(".connect__cancel");
const popupsWrapper = document.querySelector(".popups");
const works = document.querySelectorAll(".works__item");
const popups = document.querySelectorAll(".popup");

let clickedWorksTargetNumber;

albumSheets.forEach( el => {
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
    albumBtn.classList.remove("show");
    albumBtn.classList.add("close");
    albumSheets.forEach( el => {
       if(el.classList.contains("open") && !album.classList.contains("animating")) {
           el.classList.remove("open");
           el.classList.add("close");
       } else if(!album.classList.contains("animating"))  {
           el.classList.add("open");
           el.classList.remove("close");
       }
   })
});

cancelBtn.addEventListener("click", function() {
    albumBtn.classList.remove("close");
    albumBtn.classList.add("show");
    albumSheets.forEach( el => {
        if(el.classList.contains("open") && !album.classList.contains("animating")) {
            el.classList.remove("open");
            el.classList.add("close");
        } else if(!album.classList.contains("animating"))  {
            el.classList.add("open");
            el.classList.remove("close");
        }
    })
});

//popup
works.forEach( el => {
    el.addEventListener("click", function(event) {
        for(let i = 0; i < works.length; i++) {
            if(event.currentTarget == works[i]) {
                clickedWorksTargetNumber = i;
            }
        }
        popupsWrapper.classList.add("open");
        popups[clickedWorksTargetNumber].classList.add("open");
    });
});

popupsWrapper.addEventListener("click", function(event) {
    if(event.target.className == "popups open") {
        popupsWrapper.classList.remove("open");
        popups[clickedWorksTargetNumber].classList.remove("open");
    }
});

