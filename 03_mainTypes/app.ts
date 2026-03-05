// 1 - успех
// 'p' - в процессе
// 'f' - отклонен

enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = "p",
  FAILED = "f",
}

const res = {
  message: "Платеж успешен",
  statusCode: StatusCode.SUCCESS,
};

if (res.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}
action(StatusCode.SUCCESS);
action(1); // вот это уже плохо, тут вниматнльно
// action(3);
// action('p') - а вот такое уже не пойдет, особоенность enum

//////////////////

// function compute() {
//   return 3;
// }

const enum Roles {
  ADMIN = 1,
  USER = 2, //compute(),
}

const res2 = Roles.ADMIN;

/////////////////

// function test(x: { ADMIN: number }) {}

// test(Roles); // допустимо, но ирл не используют (enum ведет себя как объект )
