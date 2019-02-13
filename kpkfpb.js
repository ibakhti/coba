function kpk(num1, num2){
    let range = num1 * num2
    let r1 = [];
    let r2 = [];
    for(i = 1; i <= range; i++){
        r1.push(num1*i);
        r2.push(num2*i);
    }
    for(i = 0; i < r2.length; i++){
        if(r1.includes(r2[i])){
            return r2[i];
        }
    }
}

function fpb(num1, num2) {
    let r1 = [];
    let r2 = [];
    let x
    for(i = 1; i <= num1; i++){
        if(num1 % i == 0){
            r1.push(i)
        }
    }
    for(i = 1; i <= num2; i++){
        if(num2 % i == 0){
            r2.push(i)
        }
    }
    if(r1.length > r2.length) {
        x = r1.filter((i) => r2.includes(i))

    }else {
        x = r2.filter((i) => r1.includes(i))
        
    }
    x.sort(function (a,b) {
        return b-a});

    return x[0]
}
console.log(fpb(18, 24));
