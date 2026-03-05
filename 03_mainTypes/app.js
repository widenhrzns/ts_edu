"use strict";
// 1 - успех
// 'p' - в процессе
// 'f' - отклонен
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS,
};
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) { }
action(StatusCode.SUCCESS);
action(1); // вот это уже плохо, тут вниматнльно
// action(3);
// action('p') - а вот такое уже не пойдет, особоенность enum
//////////////////
// function compute() {
//   return 3;
// }
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = 2] = "USER";
})(Roles || (Roles = {}));
const res2 = Roles.ADMIN;
/////////////////
// function test(x: { ADMIN: number }) {}
// test(Roles); // допустимо, но ирл не используют (enum ведет себя как объект )
//# sourceMappingURL=app.js.map