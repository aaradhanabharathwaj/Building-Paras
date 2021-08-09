function get_para_1()
{
var inputs=[];
for (var i=1;i<=6;i++){
inputs.push(document.getElementById("inputbox-"+i).value);
document.getElementById("show_para_1").innerHTML=inputs.join(" ");
}}
function get_para_2(){
    var inputs=[];
for (var a=1;a<=6;a++){
    inputs.push(document.getElementById("box-"+a).value);
    document.getElementById("show_para_2").innerHTML=inputs.join(" ");
}}