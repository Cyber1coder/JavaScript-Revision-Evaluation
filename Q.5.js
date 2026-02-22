function createCountdown(seconds,onTick,onComplete){
    let time = seconds;

    let timer = setInterval(()=>{
        time--;


        if(time>0){
            onTick(time);
        }
        else{
            clearInterval(timer);
            onComplete();
        }
    },1000);
}