const buttons = document.querySelectorAll("#image-picker li")
const image = document.querySelector("#produto-image")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)

        buttons.forEach((btn) => {
            btn.querySelector(".cor").classList.remove("selecionada")
        })

        const button = e.target

        const id = button.getAttribute("id")

        button.querySelector(".cor").classList.add("selecionada")

        image.classList.add("changing")
        image.setAttribute("src",`img/iphone_${id}.jpg`)

        setTimeout(() => {
            
            image.classList.toggle("changing")
        },200)
    })
})