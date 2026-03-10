type httpMethod = "post" | "get";

function fetchWithAuth(url: string, method: httpMethod): 1 | 0 {
  return 1;
}

type coolString = string; // ничего не сужаем, но можем подобное вытворять

/* */

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  name: string; // ПЛОХО - другой смысл
  id: number;
};

type UserWithRole = User & Role;

const user: UserWithRole = {
  name: "asd",
  age: 33,
  skills: ["1", "2"],
  id: 3,
};
