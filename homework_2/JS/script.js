
function exercise1(){
    console.log('1 задание');
    console.log('a) в 1 случает будет равно 2 т.к. сначала прибавляют 1 к a ,а потом выводят ,а во втором случае сначала выводят ,а потом прибавляют 1 к b');
    console.log('b)  с будет равно 4, так как сначала к a прибавляют еще 1, а потом складывают с 2, а во втором случае сначала прибавляют к 2-ке a, а потом к a прибавляют 1');
    console.log('c) и в конце выводится конечные a и b');
}


function exercise2(){
    console.log('2 задание');
    console.log('будет равен 5');
}

function exercise3(){
    console.log('3 задание');
    var a=parseInt(prompt('Введите а')) ;
    var b=parseInt(prompt('Введите b')) ;
    if(a>=0 && b>=0){
        console.log('Два положительных числа: a-b=' + (a - b));
    }
    else if(a<0 && b<0){
        console.log('Два отрицательных числа: a*b=' + (a * b));
    }
    else{
        console.log('Два числа разных знаков a+b=' + (a + b));
    }
}
    



function exercise4(){
    console.log('4 задание');
    a = Math.floor(15 * Math.random()) + 1;
    switch(a){
        case 1:
        console.log(a);
        ++a;
        case 2:
        console.log(a);
        ++a;
        case 3:
        console.log(a);
        ++a;
        case 4:
        console.log(a);
        ++a;
        case 5:
        console.log(a);
        ++a;
        case 6:
        console.log(a);
        ++a;
        case 7:
        console.log(a);
        ++a;
        case 8:
        console.log(a);
        ++a;
        case 9:
        console.log(a);
        ++a;
        case 10:
        console.log(a);
        ++a;
        case 11:
        console.log(a);
        ++a;
        case 12:
        console.log(a);
        ++a;
        case 13:
        console.log(a);
        ++a;
        case 14:
        console.log(a);
        ++a;
        case 15:
        console.log(a);
        break;
    }
}



function exercise5(){
    console.log('5 задание');
    var c=parseInt(prompt('Введите c')) ;
    var d=parseInt(prompt('Введите d')) ;
    function add(a,b){
        return(a+b);
    }
    function difference(a,b){
        return(a-b);
    }
    function multiplication(a,b){
        return(a*b);
    }
    function division(a,b){
        return(a/b);
    }

    
    console.log('сумма c+d = ' + add(c,d));
    console.log('разность c-d = ' + difference(c,d));
    console.log('умножение c*d = ' + multiplication(c,d));
    console.log('деление c/d = ' + division(c,d));
}





function exercise6(){
    console.log('6 задание');

    function add(a,b){
        return(a+b);
    }
    function difference(a,b){
        return(a-b);
    }
    function multiplication(a,b){
        return(a*b);
    }
    function division(a,b){
        return(a/b);
    }


    var arg1=parseInt(prompt('Введите arg1'));
    var arg2=parseInt(prompt('Введите arg2'));
    var operation=prompt('Введите опреацию : + , - , * , /');

    function mathOperation(arg1, arg2, operation){
        switch(operation){
            case '+':
            console.log(add(arg1,arg2)); 
            break;
            case '-':
            console.log(difference(arg1,arg2));
            break;
            case '*':
            console.log(multiplication(arg1,arg2));
            break;
            case '/':
            console.log(division(arg1,arg2));
            break;
        }
    }
    mathOperation(arg1,arg2,operation);
}


 

function exercise7(){
    console.log('Задание 7');
    console.log('null>0 ' + (null>0));
    console.log('null<0 ' + (null<0));
    console.log('null==0 ' + (null==0));
    console.log('null>=0 ' + (null>=0));
    console.log('null<=0 ' + (null<=0));
    console.log('Это происходит из-за того, что при сравнение >,<,<=,>= null привращается в число 0, а при сравнение это разный тип данных');

}

function exercise8(){
    console.log('Задание 8');
    var a = parseInt(prompt('Введите число')) ;
    var b = parseInt(prompt('Введите в какую степень его надо возвести')) ;
    var c = a;

    function power_false(val, pow){
        if(pow==1) {
            return (val);
        }
        else {
            val=val*c;
            power_false(val,pow-1);
        }
    }
    console.log(power_false(a,b));
    console.log(' почему выводит undefined, если я делаю как в power_false? 171-185 строка');
    function power_true(val, pow){
        if(pow==1) {
            console.log(val);
        }
        else {
            val=val*c;
            power_true(val,pow-1);
        }
    }
    power_true(a,b);
}






function practice(){
    console.log('Практикум. Угадай число');

    var a = Math.floor(9000 * Math.random()) + 1000;
    var i=1;

    function possible_height(number){
        ++i;
        let n = parseInt(prompt('Указаное вами число больше, чем мы задумывали, попробуйте еще раз'));
        if(number<n) {
            possible_height(number);
        }
        else if(number>n) {
            possible_down(number);
        }
        else{
                console.log('поздавляю вы угадали число ' + a + ' на это вам потребовалось всего ' + i + ' попытки');
            } 
    }
    function possible_down(number){
        ++i;
        let n = parseInt(prompt('Указаное вами число меньше, чем мы задумывали, попробуйте еще раз'));
        if(number<n) {
            possible_height(number);
        }
        else if(number>n) {
            possible_down(number);
        }
        else{
                console.log('поздавляю вы угадали число ' + a + ' на это вам потребовалось всего ' + i + ' попытки');
            } 
    }

    function possible(number){
        let n = parseInt(prompt('Угадайте число четырех значимое число'));
        if(number<n) {
            possible_height(number);
        }
        else if(number>n) {
            possible_down(number);
        }
        else{
                console.log('поздавляю вы угадали число ' + a + ' на это вам потребовалось всего ' + i + ' попытки');
            } 
        
    }

    possible(a);
}
