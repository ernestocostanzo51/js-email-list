


const containerEl = document.getElementById("container")
function generazioneEmail(){
    for (i=0; i<10; i++){
   fetch("https://flynn.boolean.careers/exercises/api/random/mail") 
   .then(response  => response.json())
   .then(dato =>{
    const mail = dato.response
    console.log(mail)

    const listaEl = document.createElement("ul")
    const elementoLista = document.createElement("li")
   
    listaEl.textContent = mail
    listaEl.appendChild(elementoLista)
    containerEl.appendChild(listaEl)
   
   })
    
}
}

generazioneEmail()



const bottoneEl = document.createElement("button")
bottoneEl.textContent ="Rigenera"
containerEl.appendChild(bottoneEl)



bottoneEl.addEventListener('click', function(e){
    e.preventDefault()
    containerEl.innerText=""
    containerEl.appendChild(bottoneEl)
    generazioneEmail()
})