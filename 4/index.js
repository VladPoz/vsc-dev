
const likes = document.querySelectorAll(".shops__content__button_like")

likes.forEach((like) => {
    like.addEventListener("click", function() {
        like_event(like)
    });
})

function like_event(like){
    if(like.style.color= "white"){
        like.style.color= "red";
        console.log("Like");
    }
    else if(like.style.color= "red"){
        like.style.color= "white";
        console.log("Dont Like");
    }
}