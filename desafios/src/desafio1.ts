// Como podemos rodar isso em um arquivo .ts sem causar erros?
//desafio 1

interface IEmpoyee {
  code: number;
  name: string;
}

let employee = {} as IEmpoyee;
employee.code = 10;
employee.name = "John";

console.log(employee);
