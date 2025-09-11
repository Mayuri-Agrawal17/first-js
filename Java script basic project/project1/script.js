const body = document.querySelector("body")
const button = document.querySelectorAll(".button")

button.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        switch (e.target.id) {
            case "gray":
                body.style.backgroundColor=e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor="rgb(242, 242, 33)";
                break;
            case "purple":
                body.style.backgroundColor=e.target.id;
                break;
            case "brown":
                body.style.backgroundColor=e.target.id;
                break;
            case "orange":
                body.style.backgroundColor=e.target.id;
                break;

        }
    });
});