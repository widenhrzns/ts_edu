function logId(id: string | number): void {
  console.log(id);
}

const a = logId(1);

function multiply(first: number, second?: number) {
  if (!second) {
    return first * first;
  }
}

/**/
type voidFunc = () => void;

const f1: voidFunc = () => {};

const f2: voidFunc = () => true;
const b = f2();

/** */
const skills = ["Dev", "DevOps"];

const user = {
  s: ["s"],
};

skills.forEach((skill) => user.s.push(skill));
