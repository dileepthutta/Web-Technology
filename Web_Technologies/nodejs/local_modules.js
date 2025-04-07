
//Creating Our own modules and accessing it for our requirement.

function addnumber(a,b){
    return a+b;
}
function subNum(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}


module.exports = {addnumber,subNum,mul};