//https://learn.javascript.ru/array-methods

//Типы данных: number, string, boolean, null, undefined, NaN
//object, array, function

const a = 4;
const b = a;

const user1 = {
    name: 'Bob',
    age: 23,
    isStudent: true, // это ключи объекта.
}; // - это литерал объекта (Сам объект в оперативке, мы его не видим)

const user2 = user1;
user2.name = 'Ann';
console.log(user2);

// const copyUser = {} //new Object()
// copyUser.name = user1.name
// copyUser.age = user1.age
// copyUser.isStudent = user1.isStudent //но так делать не надо сейчас, объект может быть большой, 21 строка.

const copyUser = {...user1}; // Создание копии объекта, теперь у нас 2 объекта copyUser и user1

console.log(copyUser);
console.log(copyUser === user2); //false

copyUser.isStudent = false; // выключаем isStudent.

const copyUser1 = {...user1, isStudent: false}; // ключи объекта с одинакоым названием не создаются, значение меняется.
const copyUser2 = {...user1, isMarried: false}; // мы также можем добавить свойство.

const address = {
    country: 'Thailand',
    city: 'Bangkok',
};

const copyUser3 = {...user1, ...address}; //мы создали новый объект из двух созданых ранее.

console.log(copyUser3);

const student = {
    name: 'Bob',
    age: 23,
    isStudent: true,
    address: {
        country: 'Thailand',
        city: 'Bangkok',
    },
    courses: ['HTML', 'CSS', 'JS'],
};

const copyStudent = {...student};
copyStudent.courses.push('React'); // поверхостное копирование (без учета вложенности).

console.log(copyStudent);

const copyStudent2 = {...student, courses: [...student.courses, 'Redux']};

console.log(student.courses);
console.log(copyStudent2.courses);

const nickName = 'Hook';

const copyStudent3 = {...student, nickName};

// CRUD массива:

const users = [
    {
        id: 1,
        name:"Bob",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }

    },
    {
        id: 2,
        name:"Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 3,
        name:"Ann",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 4,
        name:"Donald",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
] // массив объектов.

const newUsers = {
    id: 5,
    name:"Donald",
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum",
    }
}; // это новый объект.

const users2 = [...users, newUsers]; // объеденяем их в новый массив.

//если нам нужно delete id === 3

const users3 = users.filter(user => user.id !== 3); // тут стрелочная функция.

console.log(users3)

//id = 1, new city = 'Sudan'; изменение в массиве

const users4 = users.map(u => u.id === 1 ? {...u, address: {...u.address, city: 'Sudan'}} : u );
console.log(users4);

const users5 = users5.map(u => u.id === 1 ? {...u, name: 'Ali'} : u );
