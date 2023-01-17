// active button Javascript Start 

var header = document.getElementById("nav_button");
var btns = header.getElementsByClassName("nav_btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Active Button Javascript End 



// typing text animation Javascript Start 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 500;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #090909}";
    document.body.appendChild(css);
};

// typing text animation Javascript End 
 

// Counter number animation  Start  

const counters = document.querySelectorAll('.Count_value');
const speed = 80000;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('shee');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   animate();
});


// Counter number animation End



// Logo Slider Javascript Start 

$(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  });

  // Logo Slider Javascript End



   /* background animation circle bvambient.js */

   document.addEventListener("DOMContentLoaded", function() {
    var demo1 = new BVAmbient({
      selector: "#ambient",
      fps: 60,
      max_transition_speed: 12000,
      min_transition_speed: 8000,
      particle_number: 3,
      particle_maxwidth: 300,
      particle_minwidth: 150,
      particle_radius: 50,
      particle_opacity: true,
      particle_colision_change: true,
      particle_background: "",
      refresh_onfocus: true,
      particle_image: {
        image: true,
        src: "/assets/png/circle_bg.png"
      },
      responsive: [
          {
            breakpoint: 768,
            settings: {
              particle_number: "2"
            }
          },
          {
            breakpoint: 480,
            settings: {
              particle_number: "1"
            }
          }
      ]
    });
});

  /* background animation circle bvambient.js */
  

// scroll section js 

gsap.registerPlugin(ScrollTrigger);
const horizontal = document.getElementById("horizontal");
const horizontalContainer = document.getElementById("horizontalContainer");
console.log(horizontal.clientWidth, horizontalContainer.clientWidth);
gsap.to("#horizontal", {
  x: () => horizontalContainer.clientWidth - horizontal.clientWidth,
  ease: "none",
  scrollTrigger: {
    trigger: horizontalContainer,
    pin: true,
    start: "top top",
    end: "+=3500",
    markers: true,
    scrub: 0.5,
    invalidateOnRefresh: true
  }
});


  