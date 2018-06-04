# Cifrado César

## Bienvenidos
¿Quieres una aplicación que te permita cifrar y descifrar mensajes mediante el `Cifrado César` ?
Pues has llegado al lugar indicado 😃

### Con esta aplicación podrás:

| Interfaz | Sí o No |
|--------------------------|----------------|
| Cifrar los mensajes en MAYÚSCULAS | ✅
| Cifrar los mensajes en MINÚSCULAS | ✅
| Descifrar los mensajes en MAYÚSCULAS | ✅
| Descifrar los mensajes en MINÚSCULAS | ✅
| Reconocer espacios para el cifrado y descifrado | ✅
| Resetear Cifrado | ✅
| Resetear Descifrado | ✅
| Interactuar con un menú | ✅
| Reconocer símbolos |❌

## ¿Cómo funciona?
1. Primero el usuario debe ingresar el mensaje que desea cifrar en el primer recuardo del cifrado o descifrado.
2. Después tiene que elegir la cantidad de espacios a desplazar en el segundo recuadro que indica "N° de espacios".
3. Se deberá dar click en el botón resultado para ejectuar el mensaje cifrado o descifrado
4. El resultado se mostrará en el recuadro de abajo que indica "Aquí se verá tu resultado"
5. Si el usuario quiere ingresar otro mensaje para cifrar o descifrar, puede hacerlo dando click en el botón "Cifra otro mensaje" o "Descifrar otro mensaje. 


## Definición del producto

#### ¿Cómo pensaste en los usuarios al desarrollar tu producto?
Esta aplicación tuvo que ser diseñada con bastante precisión y simpleza para que el usuario pueda entenderla, es por ello que se optó por separar el **Cifrado** del **Descifrado**. 
Ambas funciones tienen sus botones y casillas respectivas para poder ejecutuar las funciones de cifrar o descifrar, para dar el resultado y para resetear el mensaje.

#### ¿Cuál fue el proceso para definir el producto final a nivel de experiencia y de interfaz?

* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Los objetivos de los usuarios son:
1) Poder cifrar y descifrar mensajes en una aplicación que esté a su alcance
2) Encontrar la aplicación en un navegador web a la cual pueden acceder desde cualquier lugar
3) Cifrar y descifrar los mensajes de manera rápida y sencilla

* ¿Cómo crees que el producto que estás creando les está resolviendo sus problemas?
Este producto cumple el objetivo de ser una aplicación eficaz, rápida, sencilla, donde el usuario únicamente va a tener que colocar el mensaje y cantidad de espacios, para poder obtener los mensajes cifrados y descifrados.

### Interfaz

La interfaz permite al usuario:

▶️ ***Cifrado***
* Insertar un mensaje (texto) en un textarea
* Elegir un `offset` que permite al usuario indicar cuántas posiciones se debe desplazar el carácter del mensaje
* Ver el resultado del mensaje cifrado en un text area
* Ejecutar el resultado del cifrado haciendo click en un botón
* Resetear el cifrado haciendo click en un botón

◀️ ***Descifrado***
* Insertar un mensaje (texto) en un textarea
* Elegir un `offset` que permite al usuario indicar cuántas posiciones se debe desplazar el carácter del mensaje
* Ver el resultado del mensaje descifrado en un text area
* Ejecutar el resultado del descifrado haciendo click en un botón
* Resetear el descifrado haciendo click en un botón

📋 ***Menú***
* El menú está conformado por:
1. `Home`
2. `Conoce los códigos`
3. `Historia`
4. `Cifra y descifra tus mensajes`

* ↪️ El usuario podrá hacer click en `Conoce los códigos` para redigirse a un enlace con la información referida a este apartado.
* ↪️ El usuario podrá hacer click en `Historia` para redigirse a un enlace con la información referida a este apartado.

## Sketching y prototipado
Por medio de una aplicación web se realizó un prototipado de cómo sería la interfaz:

***Prototipo 1***
Este prototipo fue diseñado para dar una idea de como sería la maquetación de la interfaz. Se colocó un menú con el fin de brindar más información y se diseño dos columnas (una para cifrado y otra para decifrado) donde se ejecutarían las funciones. Los colores y el formato de letra todavía estaban en prueba. 

![prototipo-uno](https://crisescobar.files.wordpress.com/2018/06/prot-1.png)



***Prototipo Final***
Este es el prototipo final. Se mantuvo el menú inicial con los enlaces correctos y se mantuvieron también las dos columnas (una para cifrado y otra para decifrado), para ejecutar las funciones. Los colores fuertes buscan la diferenciación para cifrado y descifrado, asimismo las mayúsculas de ambas palabras buscan impacto en el usuario. 

Se optó por colocar un "placeholder" para que el usuario pueda identificar fácilmente dónde se coloca el número de espacios y el lugar del resultado.

![prototipo-final](https://crisescobar.files.wordpress.com/2018/06/interfaz-final.png)






## Código















### Estructura de la carpeta

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

## Test
Para el testeo de la aplicación se ejecutó npm con la dependencia Mocha. 

**Los resultados fueron:**

| Test unitarios | Requeridos |Resultado  |
|--------------------------|----------------|-------|
| Statements, functions y lines | 70% | 100% ✅
| Branches | 50% |90% ✅

***
