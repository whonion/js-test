'use strict'//Включить строгий режим, запрещает использование необъявленных перемеменных
const personOne = {
    name : 'Bob',
    age : 21
}
function increaPersonAge(person) {//Внешний объект 'Person' мутирует внутри функции
    person.age +=1
    return person
}
increaPersonAge(personOne)
console.log(personOne.age);//22