let timer = document.querySelectorAll('.countdown div')
let num = document.querySelectorAll('.time-design p')

let inicio = new Date().getTime()
let fim = new Date('08/03/2022').getTime()

let distance = fim - inicio
    
let y = setInterval(() => {
    
    
    if(distance <= 0){
    
        distance = fim - inicio
        fim += 86400000 * 14
    
    } else{

        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
        if(days < 10){
    
            num[0].textContent = `0`+ days
    
        } else{
            num[0].textContent = days
        }
    
        if(hours < 10){
    
            num[1].textContent = `0`+ hours
    
        } else{
            num[1].textContent = hours
        }
    
        if(minutes < 10){
    
            num[2].textContent = `0`+ minutes
    
        } else{
            num[2].textContent = minutes
        }
    
        if(seconds < 10){
    
            num[3].textContent = `0`+ seconds
    
        } else{
            num[3].textContent = seconds
        }

    }

    distance = distance - 1000
    
}, 1000);
    



