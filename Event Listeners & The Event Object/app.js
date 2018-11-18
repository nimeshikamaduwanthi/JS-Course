
//  document.querySelector('.clear-tasks').addEventListener('click',
//  function(){
//    console.log('hello world');

//   // e.preventDefault();
//  });


 document.querySelector('.clear-tasks').addEventListener('click',
 onclick);

 function onclick(e){
   // console.log('clicked');

   let val;


   val = e;

  // event target element
   val = e.target;
   val = e.target.id;
   val = e.target.className;
   val = e.target.classList;

  //  e.target.innerText = 'red';

  /// event type
val = e.type;


///tinestamp
val = e.timeStamp;

//// coords event relative to the window
  val = e.clientY;
  val = e.clientX;

/// coords event relative to the element
val = e.offsetY;
val = e.offsetX;



   console.log(val);
 }