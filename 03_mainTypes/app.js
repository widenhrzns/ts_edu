"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: "widen",
    surname: "hrzns",
    city: "Moscow",
    age: 20,
};
console.log(getFullName(user));
//# sourceMappingURL=app.js.map