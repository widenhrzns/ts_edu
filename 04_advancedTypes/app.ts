// **Описание**: Создайте type guard функцию для проверки типа данных и функцию для безопасной обработки неизвестных значений
//
// **Входные данные**: Встроенные данные - переменные типа unknown с различными значениями (строка, число, булево значение, объект)
//
// **Выходные данные**: Вывод в консоль результата проверки типа и обработанного значения для каждого входного значения
//
// **Ограничения**:
// - Создайте type guard функцию для проверки строкового типа
// - Создайте функцию обработки, принимающую параметр типа unknown
// - Используйте typeof для проверки типов
// - Функции должны иметь тип возвращаемого значения boolean и void соответственно
// - Обрабатывайте случаи: string, number, boolean, остальные типы
//
// **Примеры**:
// Входные данные: "hello"
// Output: Строка: hello
//
// Входные данные: 42
// Output: Число: 42
//
// Входные данные: true
// Output: Булево: true
//
// Входные данные: {name: "test"}
// Output: Неизвестный тип

// Ваш код здесь
function isString(x: unknown): x is string {
  return typeof x === "string";
}

function typeCheck(smth: unknown): void {
  if (isString(smth)) {
    console.log("Строка: " + smth);
  } else if (typeof smth === "number") {
    console.log("Число: " + smth);
  } else if (typeof smth === "boolean") {
    console.log("Булево: " + smth);
  } else console.log("Неизвестный тип");
}

// Тестовые данные
const testData1: unknown = "hello";
const testData2: unknown = 42;
const testData3: unknown = true;
const testData4: unknown = { name: "test" };
