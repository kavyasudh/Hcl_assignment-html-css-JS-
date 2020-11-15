function isbnvalidate(){

    
    let isbn =document.getElementById("isbnId").value;
   
    var isbnRE = /^[a-z A-Z 0-9]{4,7}$/;
   
        if (isbn.match(isbnRE)){
            return true;
        }
            else{
        document.getElementById("isbnMsg").innerHTML="Invalid isbn";
        document.getElementById("isbnMsg").style.color="red";
        return false;
    }
}
function titleValid(){
    let title =document.getElementById("titleId").value;
    
    var titleRE=/^[a-z A-Z]{3,25}$/;

    if (title.match(titleRE)) {
       return true;
    }
    else{
        document.getElementById("titleMsg").innerHTML="Invalid title";
        document.getElementById("titleMsg").style.color="red";
    return false;
    }
}
function priceValid(){
    let price =document.getElementById("priceId").value;
    var priceRE=/^[1-9]{1}[0-9]{2,3}$/;
    if (price.match(priceRE)) {
       return true;
    }
       else{
        document.getElementById("priceMsg").innerHTML="Invalid price";
        document.getElementById("priceMsg").style.color="red";
        return false;
    }
}
function pubDateValid(){
if (pubDate="") {
       
    document.getElementById("pubDateMsg").innerHTML="Enter Date";
    document.getElementById("pubDateMsg").style.color="red";
return false;
}
else{
    return true;
}
}
function copiesValid(){
    let copies =document.getElementById("copiesId").value;
    var copiesRE=/^[1-9]{1,5}$/;
    if (copies.match(copiesRE))
        {
            return true;
         }
            else{
        document.getElementById("copiesMsg").innerHTML="not valid";
        document.getElementById("copiesMsg").style.color="red";
    return false;
    } 
}
function pnameValid(){
    let pname =document.getElementById("pnameId").value;
    var pnameRE=/^[a-z A-Z]{5,50}$/;
    
   if (pname.match(pnameRE)) {
    return true;
}
   else{
        document.getElementById("pnameMsg").innerHTML="wrong name";
        document.getElementById("pnameMsg").style.color="red";
    return false;
    }
}
function pAddValid(){
    let pubAdd =document.getElementById("pAddId").value;
    var pAddRE=/^[a-z A-Z]{5,50}$/;
    if (pubAdd.match(pAddRE)) {
        return true;
    }
       else{
        document.getElementById("pAddMsg").innerHTML="Invalid title";
        document.getElementById("pAddMsg").style.color="red";
    return false;
    }
}