const btn = document.getElementById("btn")
btn.addEventListener("click", () => 
    alert("Click en el botón")
)

// usando JQuery
$(() => {
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando JQuery")
    })
})