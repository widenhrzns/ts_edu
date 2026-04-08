interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = /* <User> */ {
  name: "Vasya",
  email: "vasya@exp.com",
  login: "vasya228",
};

interface Admin {
  name: string;
  role: number;
}

function logId(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}

function isString(x: string | number): x is string {
  return typeof x === "string";
}

function isAdmin(user: User | Admin): user is Admin {
  return "role" in user;
  // return (user as Admin).role !== undefined
}

function setRole(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error("USER IS NOT ADMIN");
  }
}
