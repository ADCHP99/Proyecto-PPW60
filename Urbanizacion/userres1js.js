function save(){

var cpropietario=document.getElementById('key1').value;   
var npropietario=document.getElementById('input1').value;  
var apropietario=document.getElementById('input2').value;  

var manzana=document.getElementById('manzana').value;
var villa=document.getElementById('villa').value;

var cresidente=document.getElementById('key2').value;  
var nresidente=document.getElementById('input3').value;  
var aresidente=document.getElementById('input4').value;  
var tresidente=document.getElementById('input5').value;  
var ceresidente=document.getElementById('input6').value; 
var feresidente =document.getElementById('input7').value; 

var arr_data=new Array();
arr_data.push(manzana,villa,cpropietario,npropietario,apropietario,cresidente,nresidente,aresidente,tresidente,ceresidente,feresidente);



if(document.getElementById('INP1').checked) {   
    var val_r1 = document.getElementById('INP1').value;  
    alert("Selected Radio Button is: " + val_r1);
    arr_data.push(val_r1);    
} 
if(document.getElementById('INP2').checked) {   
    var val_r2 = document.getElementById('INP2').value;  
    alert("Selected Radio Button is: " + val_r2);
    arr_data.push(val_r2);    
} 
if(document.getElementById('INP3').checked) {   
    var val_est1 = document.getElementById('INP3').value;  
    alert("Selected Radio Button is: " + val_est1);
    arr_data.push(val_est1);    
} 
if(document.getElementById('INP4').checked) {   
    var val_est2 = document.getElementById('INP4').value;  
    alert("Selected Radio Button is: " + val_est2);
    arr_data.push(val_est2);    
}






localStorage.setItem(cpropietario, JSON.stringify(arr_data));
}