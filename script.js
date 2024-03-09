let buttons = document.querySelectorAll(".button");
buttons.forEach((button)=>{
    button.addEventListener("mouseover", ()=>{
        button.style.cursor="pointer";
        button.style.backgroundColor="#2b85b1";
    });

    button.addEventListener("mouseout", ()=>{
        button.style.backgroundColor="#0f79af";
    });
});

let boxAll= document.querySelectorAll(".box");
boxAll.forEach((box)=>{
    box.addEventListener("mouseover", ()=>{
        box.style.boxShadow="0 0 0.5rem rgba(0,0,0,1)";
        box.style.cursor="pointer";
        div2.style.transitionDuration = "0.8s";

    });

    box.addEventListener("mouseout", ()=>{
        box.style.boxShadow="none";
        box.style.cursor="pointer";
    });
});
