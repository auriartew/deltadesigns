function navSlider() {
       
}

function isVisible(element) {
    if (element.getBoundingClientRect().top + 5 < window.innerHeight) {
        return true;
    }
}


let position = window.pageYOffset; 

window.addEventListener('scroll', () => { 

    let scroll = window.pageYOffset; 
    
    position = scroll;
    let scrollPercentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
    let transformY = scrollPercentage * 200;
    console.log(scrollPercentage)
    let navOffset = scrollPercentage * 100;
    navOffset < 85 && navOffset > 1 ? document.getElementById("nav").style.bottom = navOffset /1.2 + '%' : '';
    
    let translateYVal = transformY/10;
    let rotateVal = transformY + 20;
    Array.prototype.filter.call(document.getElementsByClassName("cw"), function(el) {
        if(isVisible(el)) {
            el.style.transform = `translateY(-${translateYVal}vw) rotate(${rotateVal}deg)`;
        }
        
    })
    Array.prototype.filter.call(document.getElementsByClassName("ccw"), function(el) { 
        if(isVisible(el)) {
            el.style.transform = `translateY(-${translateYVal}vw) rotate(-${rotateVal}deg)`;
        }
    })

    let translateYVal2 = transformY/6 - 10;
    let rotateVal2 = transformY - 100;
    Array.prototype.filter.call(document.getElementsByClassName("cw2"), function(el) {
        if(isVisible(el)) {
            el.style.transform = `translateY(-${translateYVal2}vw) rotate(${rotateVal2}deg)`;
        }
        
    })
    Array.prototype.filter.call(document.getElementsByClassName("ccw2"), function(el) {
        
        if(isVisible(el)) {
            el.style.transform = `translateY(-${translateYVal2}vw) rotate(-${rotateVal2}deg)`;
        }
    })
    
    if (isVisible(document.getElementById('lift-off'))) {
        document.getElementById('plane').style.transform = `translate(20vw,-20vw)`
    } 
    
    Array.prototype.filter.call(document.getElementsByClassName('fadeup'), function(el) {
        if(isVisible(el)) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0vh)';
        }
    });

    Array.prototype.filter.call(document.getElementsByClassName('fadeup2'), function(el) {
        if(isVisible(el)) {
            setTimeout(function() {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0vh)';
            }, 500)
            
        }
    });


});

var falldownHappened = false;
if (!falldownHappened) {
    window.onscroll = function(ev) {
        if (window.innerHeight + document.documentElement.scrollTop + 20 >= document.body.scrollHeight) {
            console.log('scrollHeight: ' + document.body.scrollHeight)
            var symbols = document.getElementsByClassName('falling-symbols')[0]
            //symbols.style.bottom = 0;
            Array.prototype.filter.call(document.getElementsByClassName('falldown'), function(el) {
            if (Math.random() >= 0.5) {
                el.style.transform = `translateY(60vh) rotate(${Math.random() + 30}deg)`;
            }
            else {
                el.style.transform = `translateY(60vh) rotate(-${Math.random() + 30}deg)`;
            }
                
                el.style.opacity = 1;
                el.style.transition = `transform ${Math.random() + 0.75}s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s, opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s`;
                //el.classList.add('falldown-animation');
                
            })

            Array.prototype.filter.call(document.getElementsByClassName('sym'), function(el) {
                el.style.display = 'none';
            })
            Array.prototype.filter.call(document.getElementsByClassName('sym2'), function(el) {
                el.style.display = 'none';
            })
            Array.prototype.filter.call(document.getElementsByClassName('sym3'), function(el) {
                el.style.display = 'none';
            })
        }
        falldownHappened = true;
        
        
        
        
    }
}


function doStuff() {
    const text1_options = [
        "Review 1",
        "Review 2",
        "Review 3",
        "Review 4"
      ];
      const text2_options = [
        "69 min. read",
        "7 min. read",
        "8 min. read",
        "87,658.1277 min. read"
      ];
      const color_options = ["#e24e42", "#008f95", "#e86e80", "#e9b000"];
      const text3_options = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ];
      var i = 0;
      const currentOptionText1 = document.getElementById("current-option-text1");
      
      const currentOptionText3 = document.getElementById("current-option-text3");
      const carousel = document.getElementById("carousel-wrapper");
      const mainMenu = document.getElementById("menu");
      const optionPrevious = document.getElementById("previous-option");
      const optionNext = document.getElementById("next-option");
      
      currentOptionText1.innerText = text1_options[i];
      
      currentOptionText3.innerText = text3_options[i];
      //mainMenu.style.background = color_options[i];
      
      optionNext.onclick = function () {
        i = i + 1;
        i = i % text1_options.length;
        currentOptionText1.dataset.nextText = text1_options[i];
      
        
      
        //mainMenu.style.background = color_options[i];
        carousel.classList.add("anim-next");
        
        setTimeout(() => {
            currentOptionText3.dataset.nextText = text3_options[i];
          //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
        }, 455);
        
        setTimeout(() => {
          currentOptionText1.innerText = text1_options[i];
          
          carousel.classList.remove("anim-next");
        }, 650);
      };
      
    optionPrevious.onclick = function () {
        if (i === 0) {
          i = text1_options.length;
        }
        i = i - 1;
        currentOptionText1.dataset.previousText = text1_options[i];
      
       
        //mainMenu.style.background = color_options[i];
        carousel.classList.add("anim-previous");
      
        setTimeout(() => {
          //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
          currentOptionText3.dataset.previousText = text3_options[i];
        }, 455);
        
        setTimeout(() => {
          currentOptionText1.innerText = text1_options[i];
       
          carousel.classList.remove("anim-previous");
        }, 650);
    };
}
document.addEventListener('DOMContentLoaded', () => {
    let mX = 0,
        mY = 0,
        cX = 0,
        cY = 0,
        contactBtn = document.getElementById('contact'),
        mouseCircle = document.getElementById('contact-circle'),
        active = mouseCircle.querySelector('.active');


    contact.addEventListener('mouseenter', function() {
        contactBtn.style.color = '#fff';
        active.style.transform = 'scale(2)';
    })
    contact.addEventListener('mouseleave', function() {
        active.style.transform = 'scale(0)';
        contactBtn.style.color = '#565656';
    })


    window.addEventListener('mousemove', (e) => {
        mX = e.clientX - window.innerWidth * 0.91;
        mY = e.clientY - window.innerWidth * 0.08;
    })

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);
        cX += ((mX - cX) * 0.14);
        cY += ((mY - cY) * 0.14);
        mouseCircle.style.transform = `translate3d(${cX}px, ${cY}px, 0)`;
        
    }
    delayMouseFollow();
    
    var reviewLink = document.getElementById("reviewlink")
    reviewLink.addEventListener('click', function(event) {
        event.preventDefault()
        document.getElementById('reviews').scrollIntoView({block: "center", behavior: "smooth"}) 
    })

    var servicesLink = document.getElementById("serviceslink")
    servicesLink.addEventListener('click', function(event) {
        event.preventDefault()
        document.getElementById('services').scrollIntoView({block: "start", behavior: "smooth"}) 
    })

    var homeLink = document.getElementById("homelink")
    homeLink.addEventListener('click', function(event) {
        event.preventDefault()
        document.getElementById('home').scrollIntoView({block: "start", behavior: "smooth"}) 
    })

    var homeLink = document.getElementById("aboutlink")
    homeLink.addEventListener('click', function(event) {
        event.preventDefault()
        document.getElementById('about').scrollIntoView({block: "start", behavior: "smooth"}) 
    })

    var homeLink = document.getElementById("contactlink")
    homeLink.addEventListener('click', function(event) {
        event.preventDefault()
        document.getElementById('message').scrollIntoView({block: "start", behavior: "smooth"}) 
    })
});





  