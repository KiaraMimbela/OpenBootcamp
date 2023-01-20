// set o conjuntos, un array de valores únicos y no repetidos

const array = [1, 2, 3, 4, "Hola", {id: 5}, "Hola"];

const miSet = new Set(array);

console.log(array);
console.log(miSet);

// agregar valores => .add()
miSet.add(6);
console.log(miSet);
//  no se agrega un valor repartido
miSet.add(2);
console.log(miSet);

// eliminar valores => .delete()
miSet.delete("Hola");
console.log(miSet);

// borrar todo el set => .clear()
// miSet.clear();
// console.log(miSet);

// saber si existe un elemento en el set => .has()
console.log(miSet.has(2));
console.log(miSet.has(9));

// saber el tamaño del set => .size
console.log(miSet.size)

miSet.forEach(valor => {console.log(valor)});

// iterando el set => .values()
const it_miSet = miSet.values();
console.log(it_miSet);

// convirtiendo el set a un array de valores únicos
const ar_miSet = [...miSet]; // factor de propagación
console.log(ar_miSet);
console.log(ar_miSet[3]); // acceder a sus valores