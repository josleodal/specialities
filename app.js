const express = require("express")
const app =express()
const usersData =require("./profesiones.js")
app.use(express.static('public'));





app.get("/", (req,res)=>{

    

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/style.css">

        <title>Marketing</title>
    </head>
    <body>
    <h1>Página de de Inicio</h1>
    
    <div id="links">
    <a href="/">Inicio</a>
    
    <a href="/marketing">Marketing</a>
    
    <a href="/developers">Developers</a>

    <a href="/QAs">QAs</a>

    <a href="/ventas">Ventas</a>

    </div>

    
    </body>
    </html>`)


})
/////////////////////////////  

app.get("/marketing", (req,res)=>{

    let template = ''; 
    let num=0

    usersData.forEach((element) => {
      if (element.specialty === 'marketing') {

        num++
        template += `
        <div id="employers">
        <p>Nombre: ${element.name}</p>
        <p>Edad: ${element.age}</p>
        <p>Categoría: ${element.specialty}</p>
        </div>`;
      }

    });

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/style.css">

        <title>Marketing</title>
    </head>
    <body>
    <h1>Página de de marketing</h1>

    <div id="links">
    <a href="/">Inicio</a>
    
    <a href="/marketing">Marketing</a>
    
    <a href="/developers">Developers</a>

    <a href="/QAs">QAs</a>

    <a href="/ventas">Ventas</a>

    </div>

    <p id="numberPeople">Número de personas = ${num}</p>
   <div id="container">
    ${template}
</div>
    
    </body>
    </html>`)



 
})

/////////////////////////////   

app.get("/developers", (req,res)=>{

    let template = ''; 
    let num=0
  
    usersData.forEach((element) => {
      if (element.specialty === 'developers') {
        num++
        template += `
        <div id="employers">
        <p>Nombre: ${element.name}</p>
        <p>Edad: ${element.age}</p>
        <p>Categoría: ${element.specialty}</p>
        </div>`;
      }
    });

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Developers</title>
    </head>
    <body>
    <h1>Página de Developers</h1>
    <div id="links">
    <a href="/">Inicio</a>
    
    <a href="/marketing">Marketing</a>
    
    <a href="/developers">Developers</a>

    <a href="/QAs">QAs</a>

    <a href="/ventas">Ventas</a>

    </div>

    <p id="numberPeople">Número de personas = ${num}</p>
   <div id="container">
    ${template}
</div>
    
    </body>
    </html>`)



});

/////////////////////////////  

app.get("/QAs", (req,res)=>{

  
    let template = ''; 
    let num=0

    usersData.forEach((element) => {
      if (element.specialty === 'QAs') {
        num++
        template += `
        <div id="employers">
        <p>Nombre: ${element.name}</p>
        <p>Edad: ${element.age}</p>
        <p>Categoría: ${element.specialty}</p>
        </div>`;
      }
    });

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>QAs</title>
    </head>
    <body>
    <h1>Página de de QAs</h1>
    <div id="links">
    <a href="/">Inicio</a>
    
    <a href="/marketing">Marketing</a>
    
    <a href="/developers">Developers</a>

    <a href="/QAs">QAs</a>

    <a href="/ventas">Ventas</a>

    </div>

    <p id="numberPeople">Número de personas = ${num}</p>
   <div id="container">
    ${template}
</div>
    
    </body>
    </html>`)


});

/////////////////////////////  

app.get("/ventas", (req,res)=>{

    let template = ''; 
    let num=0

    usersData.forEach((element) => {
      if (element.specialty === 'ventas') {
        num++
        template += `
        <div id="employers">
        <p>Nombre: ${element.name}</p>
        <p>Edad: ${element.age}</p>
        <p>Categoría: ${element.specialty}</p>
        </div>`;
      }
    });

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Ventas</title>
    </head>
    <body>
    <h1>Página de de Ventas</h1>
    <div id="links">
    <a href="/">Inicio</a>
    
    <a href="/marketing">Marketing</a>
    
    <a href="/developers">Developers</a>

    <a href="/QAs">QAs</a>

    <a href="/ventas">Ventas</a>

    </div>

    <p id="numberPeople">Número de personas = ${num}</p>
   <div id="container">
    ${template}
</div>
    
    </body>
    </html>`)


});

/////////////////////////////  

app.use((req,res)=>{

    res.status(404).send(`<h1>Página No encontrada</h1><a href="/">Inicio</a>`)


})

/////////////////////////////  

app.listen(3000, ()=>{

console.log("http://localhost:3000")

})