function guarda(){
var tramite=document.getElementById('key1').value;   
var banco=document.getElementById('input1').value;  
var valor_p=document.getElementById('input2').value; 
var fechad=document.getElementById('dia1').value; 
var fecham=document.getElementById('mes1').value; 
var fechaa=document.getElementById('anio1').value; 

var ftotal=fechad+'/'+fecham+'-/'+fechaa;
tramite=tramite+"T"
var arr_data1=new Array();
var arr_data2=new Array();

if(valor_p<=100){
var respuesta="en mora";
}
else if(valor_p<=500){
    var respuesta="pediente";
    }
    else if(valor_p<=1000){
        var respuesta="pagado";
        }
            

arr_data1.push(tramite,banco,ftotal,fecham,fechaa,valor_p,respuesta);
localStorage.setItem(tramite, JSON.stringify(arr_data1));
}