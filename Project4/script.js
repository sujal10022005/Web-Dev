var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
        crsr.style.left=dets.x+"px"
        crsr.style.top=dets.y+"px"
        blur.style.left=dets.x-250+"px"
        blur.style.top=dets.y-250+"px"
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:.5,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})