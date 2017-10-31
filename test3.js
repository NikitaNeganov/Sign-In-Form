for (i = 1; i < 101; i++){
    if (i % 3 === 0){
        if (i % 5 === 0){
            console.log('MontyPython');
        }else {
        console.log('Monty');
        }
    }else if (i % 5 === 0){
        console.log('Python');
    }else {
        console.log(i);
    }
}
