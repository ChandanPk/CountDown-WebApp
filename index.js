const timeOut = () => {
    const destinationTime = new Date("oct 2 2021 00:00:00").getTime();
    let presenTime = new Date().getTime();
    
    let difference = destinationTime - presenTime;
    
    let day = 1000 * 60 * 60 * 24;
    let hour = 1000 * 60 * 60;
    let minute = 1000 * 60;
    let second = 1000;
    
    let dayText = Math.floor(difference / day);
    let hourText = Math.floor((difference % day) / hour) ;
    let minuText = Math.floor((difference % hour) / minute);
    let secondsText = Math.floor((difference % minute) / second);
    
    
        document.querySelector('.days').innerText = dayText;
        document.querySelector('.hours').innerText = hourText;
        document.querySelector('.minutes').innerText = minuText;
        document.querySelector('.seconds').innerText = secondsText;
        console.log();
    }
    setInterval(timeOut, 1000);