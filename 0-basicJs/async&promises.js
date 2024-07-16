function manipulaTempo(time) {
    console.log(`em ${time/1000} segundos irá aparecer algo`)
    setTimeout(() => {
        console.log('algo');
    }, time);
}

manipulaTempo(5000)