   
   let val;

   const list = document.querySelector('ul.collection');
   const listItem = document.querySelector('li.collection-item:first-child');

   val = listItem;
   val = list;

   
   //get children element nodes
   val = list.childNodes;
   val = list.childNodes[0];
   val = list.childNodes[0].nodeName;
   val = list.childNodes[3].nodeType;

//    1 - Element
//    2 - Attribute (deprecated)
//    3 - Text node
//    8 - Comment
//    9 - Document itself
//    10 - Doctype 
   
   
   // get child nodes 
   val = list.childNodes;
   val = list.children[0];
   list.children[0].textContent = 'hi chin';
    // children of children
    list.children[3].children[0].id = 'test link';
    val = list.children[3].children[0];
// first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//count child element
val =list.childElementCount;


//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;


//get next sibiling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// //get prev sibiling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


   console.log(val);