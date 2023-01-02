// document.querySelector(".iconbar").addEventListener("click",()=>{
//     document.querySelector(".sidebar").style.display="block";
//     document.querySelector(".sidebar").classList.add("animonsidebar");
    
//       document.querySelector(".overlay").style.display="block";
//       document.html.style.overflow="hidden";
//       document.body.style.overflow="hidden !important";

//     console.log(" the burger button is pressed");
// })
// document.querySelector(".cross").addEventListener("click",()=>{
//     document.querySelector(".sidebar").style.display="none";
//     document.querySelector(".overlay").style.display="none"
//     document.html.style.overflow="visible";
//     document.body.style.overflow="visible";
//     console.log(" the cross button is pressed")
// })


// from here the java script is apllied for the user sign in page

function validations()
{

  document.getElementById("btnsubmition").addEventListener("click",()=>{
    let target=document.getElementById("semail");
    if(target.value=="")
    {
      alert(" the field must have to be filled");
      console.log("inside the conditional block");
    }
    else if(target.value.length < 20)
    {
      alert(" the length is very low chose the valid email")
    }
    console.log("button has been clicked");
   
  });
}
validations();