


function exercise1(){
    console.log('1 задание : ');
    let i = 0;
    while(i<100){
        ++i;
        let n = 0;
        let c=0;
        while(n<i){
            ++n;
            let t = i/n;
            let u = Math.floor(i/n);
            if(t == u){
                c=c+1;
                
            }
        }
        if(c==2){
                        console.log(i);
                    }
    }
}


function exercise2(){
    console.log('задание 2');

    let N = [5,5,5,5];
    let sum = 0;
    console.log('цена товаров: ' + N);
    for(let i = 0; i <N.length;++i){
        sum+=N[i];
    }
    console.log('Их общая сумма: ' + sum);

}


function exercise3(){
    console.log('Задание 3 : ')
    var L = ['товар 1', 'товар 2', 'товар 3', 'товар 4'];
    console.log('название товаров: ' + L);
    let N = [5,5,5,5];
    console.log('цена товаров: ' + N)
    var countBasketPrice = function (m){
        let sum1 = 0;
        for(let i = 0; i <m.length;++i){
            sum1+=m[i];
        }
        return (sum1);
    }
    console.log('Их общая сумма: ' + countBasketPrice(N));
}



function exercise4(){
    console.log('4 задание');

    for(let i=0;i<10; console.log(i++)){

    }
}


function exercise5(){
    console.log('5 задание');

    var M = [];

    var var1;


    for(let i=0;i<20;++i){
        M.push('x');
        var1=M.join('');
        console.log(var1);
    }
}





