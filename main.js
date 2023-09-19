let sideLeft = document.getElementById("sidebar-left");
let btnOpen = document.getElementById("open");
let siderihgt = document.getElementById("sidebar-right");
let btnClose = document.getElementById("close");
var searchCurrent = document.getElementsByTagName("h2");



btnOpen.addEventListener("click", function open(){
    openNav()
})

btnClose.addEventListener("click", function close(){
   closeNav()
})

function openNav() {
   document.getElementById("sidebar-left").style.width = "250px";
   document.getElementById("sidebar-right").style.marginLeft = "250px";
   btnOpen.classList.add("disabel");
   btnClose.classList.remove("disabel")
}

function closeNav() {
   document.getElementById("sidebar-left").style.width = "0";
   document.getElementById("sidebar-right").style.marginLeft= "0";
   btnClose.classList.add("disabel")
   btnOpen.classList.remove("disabel");
}


// btnOpen.addEventListener( "click" , function openside() {
//     disabe()
//     sideLeft.classList.toggle("disabel")
//     if (sideLeft.classList.contains("disabel")) {
//         siderihgt.style.marginLeft="0"
//     } else {
//         siderihgt.style.marginLeft="250px"
        
//     }
// })

// btnClose.addEventListener( "click" , function closeside() {
//     disabe()
//     sideLeft.classList.toggle("disabel")
//     if (sideLeft.classList.contains("disabel")) {
//         siderihgt.style.marginLeft="0"
//     } else {
//         siderihgt.style.marginLeft="250px"
        
//     }
// })

// function disabe() {
//     if (siderihgt.style.marginLeft= "250px") {
//         btnOpen.classList.add("disabel")
//         btnClose.classList.remove("disabel")
//     } else {
//         btnOpen.classList.remove("disabel")
//         btnClose.classList.add("disabel")
//     }
// }


