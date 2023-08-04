
function fun1()
{ 
 let suma=document.getElementsByTagName("p");

 for(let i=0;i<suma.length;i++){
    alert("The contens of this <p>tag is"+suma[i].innerHTML);
    suma[i].style.color='red';
 }
}

function fun7(){
  let suma=document.getElementsByTagName("p");

for(let i=0;i<suma.length;i++){
   suma[i].style.color='black';
   
   alert(suma.length)

}
  
}
function fun2()
{
 let str1= document.getElementById("any1");
 let str2= document.getElementById("any2");
 let str3= document.getElementById("any3");
 
 if(str1.checked==true)
 alert("the selected name is "+ str1.value);
  else if(str2.checked==true)
 alert("the selected name is "+ str2.value);
 else if(str3.checked==true)
 alert("the selected name is "+ str3.value);
 else
 alert("none of the value is selected");
}
//accessing dropbox and alerting the selected option//
function fun3()
{
 let str1= document.getElementById("dropbox1");
 if(str1.selectedIndex==0)
 alert("no option is selected")
 else
 alert(str1.options[str1.selectedIndex].value);
}
//The checking whether the entered username and password are correct//
function fun4()
{ let str1= document.getElementById("name");
let str2=document.getElementById("password");
let password="nandhu1236";
let email= /^[a-z0-9_]+@[a-z0-9_]+\.[a-z]{2,6}$/;
console.log(email.test(str1.value))
let name='nandhu111199@gmail.com';
if(email.test(str1.value)){
if(name===str1.value && password===str2.value){
    alert("your login is successfull")
document.getElementById("lab2").style.visibility="hidden";
return true;
}
else if (name!=str1.value){
  str1.style.border="2px solid red";
  str2.style.border="0px solid red"; 
document.getElementById("lab1").style.visibility="visible";
document.getElementById("lab2").style.visibility="hidden";
return false;
}
else{
  str2.style.border="2px solid red"; 
  str1.style.border="0px solid ";
  document.getElementById("lab1").style.visibility="hidden";
document.getElementById("lab2").style.visibility="visible";
return false;
}
}
else alert("USING REGEX Invalid Email ");
}
//Onmouseover event//
function fun5(){
  let img = document.getElementById("img1");
  img.src="advik2.JPG";
  img.alt="advik2.JPG";
}
//onmouseout event//
function fun6(){
  document.getElementById("img1").src="advik1.JPG";
}
//Transverse and Manipulate the DOM//
function fun8(){
    alert("hihello")
  let suma=document.getElementsByClassName("container1")
  alert(suma[0].firstElementChild.innerHTML) ;
 //alert( suma[0].lastElementChild.innerHTML="this is the last child-chennai");
 let suma1= document.getElementById("para1");
 
 //accessing the parent node from the child//
 alert(suma1.parentNode.innerHTML);
 //childNodes,nextElementSibling,previousElementSibling//

 let new1= document.createElement("div");
alert(new1.innerHTML="hi I am the newly created element haha")
new1.style.color="red";
suma[0].appendChild(new1);
new1.style.color='red';
alert(new1.innerHTML)
}
//toggle between with and without CSS style
function fun9(){
  let butt1= document.getElementById("butt1").firstElementChild;
 butt1.classList.toggle("style0")
}
function haha1(){
  alert("greatdad has been clicked");
  console.log("haha")
}
function haha2(){
  alert("dad has been clicked")
}
function haha3(){
  alert("son has been clicked")
}
function fun11(){
  
  let suma=document.getElementById("search1");
  
 let pattern = /e/;
  let result = pattern.test(suma.value);
  if(result)
  alert("Substring of Search Found")
  else alert("Not Found")
  
}
//event stop propagation(), event stopimmediate propagation() and removeEventlistener()//
//setinterval(function,milliseconds)
var ID=0;
function start(){
 let var1= window.innerHeight;
 let var2=window.innerWidth;
 alert("Height:"+var1+", Width:"+var2);
ID=window.setTimeout(change,2000);
}
function stop(){
  window.clearTimeout(ID);
}

function change(){
  let hi= document.getElementsByClassName("timeout")[0].getElementsByTagName("p");
  hi[0].innerHTML="haahnoon";
}
/*window.open() - open a new window
window.close() 
window.moveTo() 
window.resizeTo() */
function window1(){
 window.open();
}


  








