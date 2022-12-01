// let input = document.querySelector("input")

// input.addEventListener("keyup", function(){
//     console.log(input.value)
// })

// window.addEventListener("keyup", function(event){
//     if(event.key == "Control"){
//         this.alert("Hello user!")
//     }
// })

// window.addEventListener("click", function(e){
//     console.log(e)
// })

// let btn = document.querySelector("button")

// let count = 0;

// btn.addEventListener("click", function Increase() {
//     if (count < 5) {
//         console.log(count)
//         count++;
//     } else {
//         btn.removeEventListener('click', Increase)

//     }
// })

// function Increase(){
//     if(count<5){
//         console.log(count)
//         count++;
//     }else{
//         btn.removeEventListener('click', Increase)
//     }
// }



// let mainImg = document.querySelector("#main img")

// let images = document.querySelectorAll("#down img")
// console.log(images);

// images.forEach(elem => {
//     elem.addEventListener("click", function(){
//         // mainImg.src = this.src

//         mainImg.setAttribute("src", this.getAttribute("src"))
//     })
// })



let form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault()
    let name = document.querySelector("#name")
    let mail = document.querySelector("#mail")
    let message = document.querySelector("#message")
    if(name.value == ""){
        name.nextElementSibling.innerText = "Name is required"
    }
    else{
        name.nextElementSibling.innerText = ""
    }
    if(mail.value == ""){
        mail.nextElementSibling.innerText = "Mail is required"
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)){
        mail.nextElementSibling.innerText = "Mail is not correct"

    }
    else{
        mail.nextElementSibling.innerText = ""
    }
    if(message.value == ""){
        message.nextElementSibling.innerText = "Message is required"
    }
    else{
        message.nextElementSibling.innerText = ""
    }
})
