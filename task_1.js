const obj = {a: 1, b: 2, '': 3, lol: 4, olo: 5,};

const printLogHasOwnObject = (a) => {
  for (let key in a) {
    if (a.hasOwnProperty(key)) {
        console.log(key);
    }
  }
}

printLogHasOwnObject(obj);


/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
и значения только собственных свойств. Данная функция не должна возвращать значение.
*/
