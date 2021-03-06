class FourFooted {
    _weightMin;
    _weightMax;
    isSwim;
    sex;
    animalName;

    constructor(name) {
        this.name = name;
    }

    get weight() {
        return 'от ' + this._weightMin + ' до ' + this._weightMax + ' кг';
    }

    get weightMin() {
        return this._weightMin;
    }
    get weightMax() {
        return this._weightMax;
    }

    set weightMin(min) {
        this._weightMin = min;
    }
    set weightMax(max) {
        this._weightMax = max;
    }

    makeVoice() {}
}

class Cat extends FourFooted {
    animalName = 'cat';

    constructor(name) {
        super(name);
    }

    static whatIs() {
        return 'A cat is a beautiful animal!';
    }

    makeVoice() {
        console.log('Мур-Мяу');
        return 'Мур-Мяу';
    }
}

class Dog extends FourFooted {
    animalName = 'dog';

    constructor(name) {
        super(name);
    }

    static whatIs() {
        return 'A dog is a beautiful animal!';
    }

    makeVoice() {
        console.log('Гав-Гав');
        return 'Гав-Гав';
    }
}

function Init() {

    alert('Ответьте на несколько вопросов про кота и собаку! :)');

    let name1 = prompt('Как назовем кота?', 'Макс');
    let cat1 = new Cat(name1 ?? 'Никак ¯\\_(ツ)_/¯');
    cat1.isSwim = false;
    confirm((name1 ?? 'Это') + ' - мальчик?\r\n[OK - мальчик, Отмена - девочка]') ? cat1.sex = 'male' : cat1.sex = 'female';
    cat1.weightMin = +prompt('Минимальный вес животного? (кг)', '2') ?? 0;
    cat1.weightMax = +prompt('Максимальный вес животного? (кг)', '10') ?? 0;

    let name2 = prompt('Как назовем собаку?', 'Боб');
    let dog1 = new Dog(name2 ?? 'Никак ¯\\_(ツ)_/¯');
    dog1.isSwim = true;
    confirm((name2 ?? 'Это') + ' - кабель?\r\n[OK - кабель, Отмена - сука]') ? dog1.sex = 'male' : dog1.sex = 'female';
    dog1.weightMin = +prompt('Минимальный вес животного? (кг)', '4') ?? 0;
    dog1.weightMax = +prompt('Максимальный вес животного? (кг)', '20') ?? 0;

    introduce(cat1);
    introduce(dog1);
}

function introduce(obj) {
    let whoAmI = 'кто-то четвероногий ¯\\_(ツ)_/¯';
    if (obj.animalName === 'cat') {
        switch (obj.sex) {
            case 'male':
                whoAmI = 'кот';
                break;
            case 'female':
                whoAmI = 'кошка';
                break;
            default:
                whoAmI = 'кошара';
        }
    }
    if (obj.animalName === 'dog') {
        whoAmI = 'собака';
    }
    let info = 'Я <b>' + whoAmI + '</b> по имени ' + obj.name + '!<br>';
    info += 'Я <b>' + (obj.isSwim ? '' : 'не ') + 'умею плавать</b> и говорю <b>&laquo;' + obj.makeVoice() + '&raquo;</b>!<br>';
    info += (obj.weightMin && obj.weightMax) ? 'Мой вес достигает ' + obj.weight : '';
    document.querySelector('#root').innerHTML += '<div class="item">' + info + '</div>';
}