setInterval(function() {
    const background = document.querySelector('body')
    const clock = document.getElementById('clock')
    const date = document.getElementById('date')
    const time = new Date()
    const hr = time.getHours()
    const min = time.getMinutes()
    const s = time.getSeconds()
    const d = time.getUTCDate()
    const m = (time.getUTCMonth() + 1)
    const y = time.getUTCFullYear()
    clock.innerHTML = `${hr}:${min.toString().padStart(2, 0)}:${s.toString().padStart(2, 0)}`
    date.innerHTML = `${d.toString().padStart(2, 0)}日 ${m.toString().padStart(2, 0)}月 ${y.toString()}年`
    if(hr >= 5 && hr < 16){
        background.classList.remove('afternoon', 'night')
    }
    else if(hr >= 16 && hr < 18){
       background.classList.remove('day', 'night')
    }
    else if(hr >= 18 || hr < 5){
       background.classList.remove('day', 'afternoon')
    } 
    
})

    