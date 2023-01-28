// $(selector).acción() => función para selectores especificos

// $(document).ready(() => {función que se realiza cuando el documento ya está cargado por completo})

// forma abreviada
$(() => {
    // funciónes a realizar
    // selecotres: id => # / class => .
    $(".hide-btn").click(() => {
        //$("h1").hide() => muy brusco
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        //$("h1").show()
        $("h1").fadeIn() // hace el mismo efecto solo más suave
    })
    $("li").dblclick(() => {
        // al hacer doble click cambia una propiedad de css
        $("h1").css({ color: "red" })
    })
    $(".new-element").click(() => {
        // $("ul").append("<li>New Element</li>") // agrega al final
        $("ul").prepend("<li>New Element</li>") // agrega al principio
    })
    $("li").mouseenter((elem) => {
        // como hover usando js
        elem.target.style.color = "blue"
    })
    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    })
})