const skills: readonly [number, string] = [1, "Dev"];

// skills[0] = 2; теперь нельзя поменять, только чтение

const skill: ReadonlyArray<string> = ["Dev", "DevOps"];

// skill.push('test') не можем :)))
