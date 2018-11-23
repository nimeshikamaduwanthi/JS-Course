
 const clearBtn = document.querySelector('.clear-tasks');
 const card = document.querySelector('.card');
 const heading = document.querySelector('h5');
    
// click
clearBtn.addEventListener('click', runEvent);

//doubleclick
// addEventListener has 2 parameters
// first one takes the event name
// second one takes a function
// clearBtn.addEventListener('dblclick', runEvent);

// // mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// // mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// //mouseenter
// card.addEventListener('mouseenter', runEvent);

// //mouseleave
// card.addEventListener('mouseleave', runEvent);

//mousemove
card.addEventListener('mousemove', runEvent);


 function runEvent(e){
     console.log(`EVENT TYPE: ${e.type}`);

     heading.textContent = `mouseX: ${e.offsetX} mouseY: ${e.offsetY}`;
    
      document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
 } 
