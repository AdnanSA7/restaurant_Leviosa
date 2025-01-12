// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Counter Design
document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current==end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1446, 3000);
    counter("count2", 0, 4547, 3000);
    counter("count3", 0, 7458, 3000);
    counter("count4", 0, 2222, 3000);
})

var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 94;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });

     $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 94;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});

// scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.div, {
    target: '#navbar-example2'
  })


// const navLinkEls = document.querySelectorAll('.nav_link');

// navLinkEls.forEach(navLinkEl =>{
//     navLinkEl.addEventListener('click',() => {
//         document.querySelector('.active')?.classList.remove('active');
//         navLinkEl.classList.add('active');
        
//     });
// });

// Jquery
$(document).ready(function(){
    $('navbar-nav').on('click', 'a', function(){
        $('navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    })
})
