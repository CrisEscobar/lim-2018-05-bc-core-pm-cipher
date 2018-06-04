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

## Definición del producto

#### ¿Cómo pensaste en los usuarios al desarrollar tu producto?
Esta aplicación tuvo que ser diseñada con bastante precisión y simpleza para el usuario pueda entenderla

#### ¿cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz

* quiénes son los principales usuarios de producto
* cuáles son los objetivos de estos usuarios en relación con el producto
* cómo crees que el producto que estás creando les está resolviendo sus
  problemas

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
Por medio de la aplicación se realizó un prototipado de cómo sería la interfaz:

***Prototipo 1***
[cifrado César](https://crisescobar.files.wordpress.com/2018/06/prot-1.png)

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
