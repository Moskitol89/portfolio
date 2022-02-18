const albumFlag = document.querySelector(".album__btn-flag");
const albumSheets = document.querySelectorAll(".album__sheet");
const album = document.querySelector(".album");
const cancelBtn = document.querySelector(".connect__cancel");
const popupsWrapper = document.querySelector(".popups");
const works = document.querySelectorAll(".works__item");
const popups = document.querySelectorAll(".popup");
//converted to array for indexOf()
const albumBtns = Array.from(document.querySelectorAll(".album__btn"));
//reversed for matching button - page order
const tabPages = Array.from(document.querySelectorAll(".tab-page")).reverse();

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

albumFlag.addEventListener("click", function () {
    albumFlag.classList.remove("show");
    albumFlag.classList.add("close");
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
    albumFlag.classList.remove("close");
    albumFlag.classList.add("show");
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
        popupsWrapper.style.top = String(Math.round(window.scrollY) + "px");
        popupsWrapper.classList.add("open");
        popups[clickedWorksTargetNumber].classList.add("open");
        document.body.style.overflow = "hidden";
    });
});

popupsWrapper.addEventListener("click", function(event) {
    if(event.target.className == "popups open") {
        popupsWrapper.classList.remove("open");
        popups[clickedWorksTargetNumber].classList.remove("open");
        document.body.style.overflow = "";
    }
});

//mail 
const ajaxSend = (formData) => {
    const fetchResp = fetch("mail.php", {
        method: "POST",
        body: formData
    });
    if(!fetchResp.ok) {
        throw new Error(`Ошибка по адрему ${url}, статус ошибки 
        ${fetchResp.status}`);
    }
    return fetchResp.text();
};

const mailForm = document.querySelector("form");

mailForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    ajaxSend(formData)
        .then((response) => {
            console.log(response);
            form.reset()
        })
        .catch((err) => console.log(err))
});

//media < 1800 
albumBtns.forEach( el => {
   el.addEventListener("click", function() {
        if(!el.classList.contains("active")) {
            for(let i = 0; i < albumBtns.length; i++){
                albumBtns[i].classList.remove("active");
                tabPages[i].classList.remove("active");
                tabPages[i].parentNode.style.display = "none";
            }
            el.classList.add("active");
            tabPages[albumBtns.indexOf(el)].classList.add("active");
            tabPages[albumBtns.indexOf(el)].parentNode.style.display = "block";
        }
   });
});

