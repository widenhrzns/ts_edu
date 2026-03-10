interface User {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}

type User2 = {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
};

interface Role {
  roleId: number;
}

interface UserWithRole extends User, Role {
  createdAt: Date;
}

const user: UserWithRole = {
  name: "asd",
  age: 33,
  skills: ["1", "2"],
  roleId: 123,
  createdAt: new Date(),

  log(id) {
    return "";
  },
};

/* */
interface UserDictionary {
  [index: number]: User;
}

type UserDictionary2 = {
  [index: number]: User;
};

type UserDictionary3 = Record<number, User>;
