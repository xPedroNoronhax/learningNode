// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     introduce(){
//         console.log(`Olá, meu nome ${this.name} e tenho ${this.age} anos`);
//     }

//     birthday(){
//         this.age++
//     }
// }

// class Student extends Person {
//     constructor(name,age, course){
//         super(name,age)
//         this.course = course
//     }

//     studying(){
//         console.log(`Aluno ${this.name} está estudando ${this.course}`);
//     }
// }

// const student1 = new Student(person1.name,person1.age,'Programação')

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isOnState = false;
  }

  on() {
    this.isOnState = true;
  }

  off() {
    this.isOnState = false;
  }

  isOn() {
    return this.isOnState;
  }
}

let carOne = new Car("volks", "gol", 2007);

class EletricCar extends Car {
    constructor(brand, model, year,batteryLevel=100){
        super(brand, model, year)
        this.batteryLevel = batteryLevel
    }

    discharge(){
        if(this.batteryLevel === 0){
            this.batteryLevel = 0
            console.log('Bateria acabou');
        }else{
            this.batteryLevel = this.batteryLevel - 10
            console.log('Bateria está em ' + this.batteryLevel + ' %');
        }
    }

    charge(){
        if(this.batteryLevel === 100){
            return 'Bateria está no máximo'
        }else{
            this.batteryLevel = 100
            console.log('Bateria está 100%');
        }
    }

    checking(){
        console.log('Seu nível de bateria é de: ' + this.batteryLevel + ' %');
    }
}

let carTwo = new EletricCar('tesla','tesla',2022)

carTwo.checking()
carTwo.discharge()
carTwo.discharge()
carTwo.discharge()
carTwo.discharge()
carTwo.discharge()
carTwo.discharge()
carTwo.discharge()
carTwo.discharge()
carTwo.discharge()
carTwo.discharge()
carTwo.discharge()
carTwo.charge()