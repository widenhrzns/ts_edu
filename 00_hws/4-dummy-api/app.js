"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "female";
    Gender["MALE"] = "male";
})(Gender || (Gender = {}));
var HairType;
(function (HairType) {
    HairType["STRAIGHT"] = "Straight";
    HairType["CURLY"] = "Curly";
    HairType["WAVY"] = "Wavy";
})(HairType || (HairType = {}));
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["MODERATOR"] = "moderator";
    UserRole["USER"] = "user";
})(UserRole || (UserRole = {}));
async function getUsers() {
    try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        const users = data.users;
        console.log(users);
    }
    catch (error) {
        console.warn(error);
    }
}
getUsers();
//# sourceMappingURL=app.js.map