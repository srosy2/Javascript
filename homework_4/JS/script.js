function exercise1(){
    console.log('первое задание : ');


    var a = + prompt('Введите трехзначное число');

    function getUnits(b) {
        return (b%10);
    }

    function getDecades(b) {
        return (Math.floor(b%100/10));
    }

    function getHundreds(b) {
        return (Math.floor(b/100));
    }



    var number = {
        единицы: 0, 
        десятки: 0,
        сотни: 0
    };


    number.единицы = getUnits(a);
    number.десятки = getDecades(a);
    number.сотни = getHundreds(a);

    console.log(number);
};


function exercise2(){
    
		var QUESTIONS = [
			{
				number: 1,
				text: 'Какой город является столицей Российской Федерации?',
				answers: ['Москва', 'Лондон', 'Калининград', 'ТАГИИИЛ'],
				correct: 1

			},
			{
				number: 2,
				text: 'Что кричат десантники в Париже?',
				answers: ['tu rêvais de moi', 'Можем повторить!', 'Ква-ква', 'ТАГИИИЛ'],
				correct: 4

			},
			{
				number: 3,
				text: 'Сколько дней у православных продолжается Рождественский пост?',
				answers: ['30', '40', '20', '50'],
				correct: 2

			},
			{
				number: 4,
				text: 'Какие пальцы рук не участвуют при игре на современной арфе?',
				answers: [ 'Большие' ,'Указательные' ,'Безымянные' ,'Мизинцы'],
				correct: 4

			},
			{
				number: 5,
				text: 'Для кого были изготовлены первые шариковые ручки?',
				answers: ['Для лётчиков', 'Для подводников', 'Для танкистов', 'Для артиллеристов'],
				correct: 1

			},
			{
				number: 6,
				text: 'Какую обувь приобрёл к зиме Шарик из мультфильма про Простоквашино?',
				answers: ['Чешки', 'Сабо', 'Кеды', 'Пуанты'],
				correct: 3

			},
			{
				number: 7,
				text: 'С какой фигуры начинаются соревнования по городошному спорту?',
				answers: ['Часовые', 'Артиллерия', 'Пулемётное гнездо', 'Пушка'],
				correct: 4

			},
			{
				number: 8,
				text: 'В каком городе был проведён первый международный кинофестиваль?',
				answers: ['Канн', 'Венеция', 'Париж', 'Берлин'],
				correct: 2

			},
			{
				number: 9,
				text: 'Кто из участников вытягивания репки имел собственное имя?',
				answers: ['Дедка', 'Кошка', 'Мышка', 'Собачка'],
				correct: 4

			},
			{
				number: 10,
				text: 'У какой повозки два колеса, а не четыре?',
				answers: ['Карета', 'Тарантас', 'Таратайка', 'Пролётка'],
				correct: 3

			},
			{
				number: 11,
				text: 'Кто является главой государства Монако?',
				answers: ['Король', 'Князь', 'Великий герцог', 'Султан'],
				correct: 2

			},
			{
				number: 12,
				text: 'Что журнал «Тайм» однажды признал «Человеком года»?',
				answers: ['Телефон', 'Телевизор', 'Компьютер', 'Космический корабль'],
				correct: 3

			},
			{
				number: 13,
				text: 'Как называют открытого, простого в общении человека?',
				answers: ['Футболка-мальчик', 'Рубаха-парень', 'Пижама-мужик', 'Жилетка-старик'],
				correct: 2

			},
			{
				number: 14,
				text: 'Что является характеристикой коллекционного вина?',
				answers: ['Стойкость', 'Выдержка', 'Выносливость', 'Трезвость'],
				correct: 2

			},
			{
				number: 15,
				text: 'Ну и самый сложный вопрос какого цвета мультипликационный герой Шрек?',
				answers: ['Синего', 'Красного', 'Зелёного', 'Жёлтого'],
				correct: 3

			}
		];
		console.log(QUESTIONS);

		
		var cost = [0 , 500 ,1000, 2000, 3000, 5000 ,10000, 15000, 25000, 50000, 100000, 200000, 400000, 800000, 1500000, 3000000];	 
		var prize = [0];
		for(let i = 1;i<cost.length; ++i ){
			prize.push(cost[i]-cost[i-1]);
		};
		

		var game = function (questions) {
			let begin = prompt('Ну что же, начнем игру кто хочет стать миллионером?\nда или нет');
			let play = true;
			if(begin=='да'){
				play = true;
			}
			else if(begin=='нет'){
				play = false;
				alert('Ну тогда в другой раз');
			}
			else{
				play = false;
				alert('Я смотрю вы настолько взволнованы, что даже руки нормально писать не могут, ну тогда лучше сыграем в другой раз');
			}
			let round = 0;
			while (play == true && round < QUESTIONS.length) {
				let quest = generateQuestion (questions, round);
				let answer = prompt (quest.qText);
				play = check (answer, round);
				round++;
			}
		}; 

		var generateQuestion = function (mas, qNumber) {
			let answers = '';
			for (let i = 0; i < 4; i++) {
				answers = answers + (i + 1) + ' - ' + mas[qNumber].answers[i] + '\n';
			}

			let text = (qNumber + 1) + ' вопрос на ' + prize[qNumber+1] + ' рублей :' + '\n' + mas[qNumber].text + '\n' + answers + 'Введите правильный ответ';

			let right = mas[qNumber].correct;
			return {
				qText: text,
			};
		};

		var check = function (answer, round) {
			if (answer == QUESTIONS[round].correct) {
				if(round == (cost.length - 1)){
					alert('Поздравляю, Вы стали миллионером!!!!!!!!! Забирайте свои 30000000 рублей и валите пока мы их у вас не отняли.......\n Упс походу не успели');
				}
				else{
					alert('Правильно! Ваш общий банк ' + cost[round + 1] + ' рублей');
					return true;
				}
			} else {
				alert('НЕПРАВИЛЬНО! Вы потеряли ' + cost[round] + ' рублей');
				return false;
			}
		};
		game(QUESTIONS);
}



