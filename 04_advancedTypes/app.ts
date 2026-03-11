let input: unknown;

input = 3;
input = ["dsf", "dsfsd"];

let res: any = input;

function run(i: unknown) {
  if (typeof i === "number") {
    i++;
  } else {
    i;
  }
}

run(input);

/** */
async function getData() {
  try {
    fetch("");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

async function getDataForce() {
  try {
    fetch("");
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
}

/** */
type U1 = unknown | string;

type I1 = unknown & string;
