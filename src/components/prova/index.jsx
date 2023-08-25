import React from 'react'
import './main.css'

export default function prova() {
    return (
        <section>
           <header>
               <h1>Prova Prática</h1>
           </header>

           <footer><h2>Thiago ama batata</h2></footer>
        </section>
    )
}
function primaryRequest() {
    const valores= fetch(':https://opentdb.com/api.php?amount=30&category=18,').then(batata=>{

    batata.json().then(bacon=>{

        console.log(bacon.data)
        
        var btn=document.querySelector('.botao')

    }) 

    })
      
}


//Não consegui abrir o projeto entao nao consegui testar desculpinha