function getFullName(userEntity: {
  firstname: string;
  surname: string;
}): string {
  return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
  firstname: "widen",
  surname: "hrzns",
  city: "Moscow",
  age: 20,
};

console.log(getFullName(user));
