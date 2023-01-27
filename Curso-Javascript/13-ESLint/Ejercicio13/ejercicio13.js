let nombre = "Kiara"
let apellido = "Mimbela"

let estudiante = `${nombre} ${apellido}`

let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

var numLetrasEstudiante = estudiante.length

var primLetraNombre = nombre.charAt(0)
var ultLetraApellido = apellido.charAt(6)

var sinEspacios = estudiante.replace(/ /g, "")

var booleana = estudiante.includes(nombre)
console.log(booleana)