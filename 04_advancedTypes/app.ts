const n: null = null;
// const n1: null = undefined;
const n2: any = null;
// const n3: number = null
// const n4: boolean = null
// const n5: string = null
// const n6: undefined = null

interface User {
  name: string;
}

function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: "Vasya",
    } as User;
  }
}

const user = getUser();
if (user) {
  const name = user.name;
}
