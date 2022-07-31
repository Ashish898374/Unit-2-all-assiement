// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction);
let newobj=JSON.parse(localStorage.getItem("setDAta"))||[]
console.log(newobj);
function myFunction(event){
    event.preventDefault();
    let juneong={ 
      names:document.querySelector("#name").value,
     employee:document.querySelector("#employeeID").value,
     departs:document.querySelector("#department").value,
     expe:document.querySelector("#exp").value,
     emails:document.querySelector("#email").value,
      mobile:document.querySelector("#mbl").value,
     // console.log(names,employee,departs,expe,emails,mobile),
};
   newobj.push(juneong);
   //window.location.r
  // localStorage.setItem("setData",JSON.stringify(newobj));

}
    newobj.forEach(function(elem,index){

    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=elem.names
    var td2=document.createElement("td");
    td2.innerTexte=elem.mployee
    var td3=document.createElement("td");
    td3.innerText=elem.departs
    var td4=document.createElement("td");
    td4.innerText=elem.expe
    var td5=document.createElement("td");
    td5.innerText=elem.emails
    var td6=document.createElement("td");
    td6.innerText=elem.mobile
    var experience=Number(expe)

    var td7=document.createElement("td");
    if (experience>5){
        td7.innerText="senior";
    }
    else if (experience>2 && experience <=5){
        td7.innerText="junior";
    }
    else {
        td7.innerText="fresher";
    }
    var td8=document.createElement("button");
  // var de= document.createElement("button")
    td8.innerText="Delete";
    td8.style.color="red"

    td8.addEventListener("click",function(){
       det(elem,index)
    })
    
   

   // td8.addEventListener("click",function())
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
   document.querySelector("tbody").append(tr);
});
 
function det(elem,index){
    newobj.splice(index,1);
    console.log(newobj);
    localStorage.setItem("setData",JSON.stringify(newobj));
   // console.log()


}
