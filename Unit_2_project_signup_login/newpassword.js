 
 //*************************************************** */
 var sum=document.querySelector("form");
sum.addEventListener("submit",function (event){
    event.preventDefault();
    var mon={
   man:sum.inpu.value,
   nam:sum.password.value,

    };
    console.log(mon);
    if ((mon.man=="") || (mon.man.length<8)) {
    alert("suggest you minimum 8 digit password") 
}
else if(mon.nam==""){
    alert("enter confirm password")
}

else if (mon.man!=mon.nam){
    alert("fill the same password")
}
else {
    // alert("successe")
    swal("thanks for Ashish", "...give me suggest!");


    window.location.href=""

}
});