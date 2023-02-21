setInterval(function() 
{
    const clockdate = document.getElementById('clock-date')
    const time = new Date()
    const hr = time.getHours()
    const min = time.getMinutes()
    const s = time.getSeconds()
    const d = time.getDate()
    const m = (time.getMonth() + 1)
    const y = time.getFullYear()
    clockdate.innerHTML = `${hr.toString().padStart(2, 0)}:${min.toString().padStart(2, 0)}:${s.toString().padStart(2, 0)} | ${d.toString().padStart(2, 0)}日 ${m.toString().padStart(2, 0)}月 ${y.toString()}年`
})

    