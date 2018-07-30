$basehtml = "/html";
$(document).ready(
   function(){
      $("#item1").load($basehtml+"/main.html");
      $("#item2").load($basehtml+"/htmlTuts.html");
   };);
function oncliks(e){
   alert(e);
};

