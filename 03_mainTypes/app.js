"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skills = ["Dev", "DevOps", "Testing"];
try {
    for (const skill of skills) {
        console.log(skill);
    }
}
finally {
    console.log("~~~~~~~~~~~~~~~~~~");
}
const res = skills
    .filter((s) => s !== "DevOps")
    .map((s) => s + "! ")
    .reduce((a, b) => a + b);
console.log(res);
//# sourceMappingURL=app.js.map