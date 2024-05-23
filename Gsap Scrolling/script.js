var arrow = document.getElementsByTagName("i")

window.addEventListener("wheel",function(e){
    if(e.deltaY>0){
        gsap.to(arrow,{
            rotate:180
        })
    }else{
        gsap.to(arrow,{
            rotate:0
        })
    }
})