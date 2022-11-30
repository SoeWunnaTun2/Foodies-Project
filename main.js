import './style.scss';
import Typed from "typed.js";
import ScrollReveal from 'scrollreveal';
import 'waypoints/lib/noframework.waypoints';

let options = {
    strings: ['Foods...', 'Drinks...'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,

  };
  
let typed = new Typed('.element', options);

let toDown = {
    distance: '50px',
    origin: 'top',
    interval : 300,
    duration : 500,
};

ScrollReveal().reveal('.to-down',toDown);

let toRight = {
    distance: '50px',
    origin: 'left',
    interval : 300,
    duration : 500,
};

ScrollReveal().reveal('.to-right',toRight);

let toLeft = {
    distance: '50px',
    origin: 'right',
    interval : 300,
    duration : 500,
};

ScrollReveal().reveal('.to-left',toLeft);

new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
      let oldNav = document.querySelector('.nav-link.active')
      if(oldNav != null){
        oldNav.classList.remove('active');
      }
      let currentNav = document.querySelector(`[href='#home']`);
      currentNav.classList.add('active');
    },
    offset: '10%' 
  });

let sections = ['about','services','menus']
sections.forEach(function(section){
  new Waypoint({
    element: document.getElementById(section),
    handler: function(direction) {
      let oldNav = document.querySelector('.nav-link.active')
      oldNav.classList.remove('active');
      
      let currentNav = document.querySelector(`[href='#${section}']`);
      currentNav.classList.add('active');
    },
    offset: '50%' 
  });
})

new Waypoint({
  element: document.getElementById('contact'),
  handler: function(direction) {
    let oldNav = document.querySelector('.nav-link.active')
    oldNav.classList.remove('active');
    
    let currentNav = document.querySelector(`[href='#contact']`);
    currentNav.classList.add('active');
  },
  offset: '80%' 
});