"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = /* <User> */ {
    name: "Vasya",
    email: "vasya@exp.com",
    login: "vasya228",
};
function logId(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isString(x) {
    return typeof x === "string";
}
function isAdmin(user) {
    return "role" in user;
    // return (user as Admin).role !== undefined
}
function setRole(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error("USER IS NOT ADMIN");
    }
}
//# sourceMappingURL=app.js.map