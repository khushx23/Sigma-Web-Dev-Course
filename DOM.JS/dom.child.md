
*document.body.childNodes*  //used to access the first child of any node
NodeList(3)[text, div.main_div, text]
*document.body.childNodes[1].childNodes*    //used to access the first node of the 1st index of the node
NodeList(11)[text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
let cont = document.body.childNodes[1]
cont.firstChild
#text
cont.firstElementChild  //ignores the "text" node and proceeds with the main topic , the element node (div )
<div class=​"box">​Box 1​</div>
