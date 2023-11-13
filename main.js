setInterval(() => {
    let mm;
    if(new Date().getMinutes()<=9){
        mm = '0' + new Date().getMinutes();
    }else{
        mm = new Date().getMinutes();
    }
    document.querySelectorAll('.side').forEach((e) => {
        e.innerHTML = `${new Date().getHours()} : ${mm}`;
    })
}, 1000);