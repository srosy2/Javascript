function exercise1(){
    let helloTag = document.getElementById('change');
    helloTag.innerText = 'Привет';
}


function exercise2(){
    let h3 = document.createElement('h3');
    h3.innerText = 'Hello';
    let b = document.getElementById('teg');
    let parentDiv = document.getElementById('exercise_2');
    parentDiv.replaceChild(h3,b);
}

function exercise_3(){
    let li = document.getElementsByTagName('li');
    for(let i = 0; i < 4; ++i){
        li[i].innerText = i+1;
    }
}



function add(){
    let first_number = document.getElementsByTagName('input')[0];
    let val1 = parseInt(first_number.value); 
    let second_number = document.getElementsByTagName('input')[1];
    let val2 = parseInt(second_number.value); 
    let score = document.getElementById('score');
    score.innerText = val1 + val2;
}

function difference(){
    let first_number = document.getElementsByTagName('input')[0];
    let val1 = parseInt(first_number.value); 
    let second_number = document.getElementsByTagName('input')[1];
    let val2 = parseInt(second_number.value); 
    let score = document.getElementById('score');
    score.innerText = val1 - val2;
}

function multiplication(){
    let first_number = document.getElementsByTagName('input')[0];
    let val1 = parseInt(first_number.value); 
    let second_number = document.getElementsByTagName('input')[1];
    let val2 = parseInt(second_number.value); 
    let score = document.getElementById('score');
    score.innerText = val1 * val2;
}

function division(){
    let first_number = document.getElementsByTagName('input')[0];
    let val1 = parseInt(first_number.value); 
    let second_number = document.getElementsByTagName('input')[1];
    let val2 = parseInt(second_number.value); 
    let score = document.getElementById('score');
    score.innerText = val1 / val2;
}


function exercise_5(){
    let li = document.createElement('li');
    li.innerText =  'Первый элемент списка';
    let li_1 = document.getElementById('list');
    let ul = document.getElementsByTagName('ul')[1];
    ul.insertBefore(li,li_1);
}



// function exercise_6(){
    for(let i = 0; i<8;++i){
        for(let j = 0; j<8;++j){
           let white = document.createElement('div');
           let black = document.createElement('div');
           let chess = document.getElementById('exercise_6')
           white.classList.add('white');
           black.classList.add('black');
           if((i+j)%2==0){
                chess.appendChild(white);
           }
           else {
                chess.appendChild(black);
           }
        }
    }
// }
// exercise_6();