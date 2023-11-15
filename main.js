setInterval(() => {
    let hh;
    let mm;
    
    if(new Date().getHours()<=9){
        hh = '0' + new Date().getHours();
    }else{
        hh = new Date().getHours();
    }

    if(new Date().getMinutes()<=9){
        mm = '0' + new Date().getMinutes();
    }else{
        mm = new Date().getMinutes();
    }
    document.querySelectorAll('.side').forEach((e) => {
        e.innerHTML = `${hh} : ${mm}`;
    })
}, 1000);