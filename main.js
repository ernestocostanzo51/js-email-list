const listaEl = document.getElementById("lista")




for (i=0; i<10; i++){
   fetch("https://flynn.boolean.careers/exercises/api/random/mail") 
   .then(res => res.json())
   .then(data =>{
    const mail = data.res
    console.log(data)

    const elementoLista = document.createElement("li")
    listaEl.textContent = mail
    listaEl.appendChild(elementoLista)


   })
}