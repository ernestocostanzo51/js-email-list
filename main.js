
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(res => res.json())
.then(email => {
    
    for(i=0;i<10;i++){
        console.log(email)
    }

})