/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/

function menuMaker(items){
  const bar = document.createElement('div');
  bar.classList.add('menu');
  
  const list = document.createElement('ul');
  
  items.forEach(link => {
    const navLink = document.createElement('li');
    navLink.innerText = link;
    list.appendChild(navLink);
  });

  bar.appendChild(list);

return bar;
}

/*
  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuLinks = menuMaker(menuItems);
document.body.append(menuLinks);

const menu = document.querySelector('.menu-button');
const menuDiv = document.querySelector('.menu');
const header = document.querySelector('header');


menu.addEventListener('click', () => {
  menuDiv.classList.toggle('menu--open');
});


$( '.menu-button' ).click(function() {
  $( '.articles' ).animate({
    opacity: 'toggle',
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
    // console.log('animated');
  });

  $( '.menu--open' ).animate({
    opacity: '1.0',
    left: "+=50",
    height: "100%"
  }, 5000, function() {
    
  });
});