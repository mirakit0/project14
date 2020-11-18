export interface MyWorker {
  id?: number;
  name: string;
  surname: string; 
  number: string;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

// export let MyWorkersDatabase: MyWorker[] = [


//   // { id: 1, name: 'Иван', surname: 'Иванов', number: '+79192345632', type: 0 },
//   // { id: 3, name: 'Петр', surname: 'Петров', number: '+79642345632', type: 1 },
//   // { id: 2, name: 'Сидор', surname: 'Сидоров', number: '+79122345632', type: 2 },
//   // { id: 4, name: 'Василий', surname: 'Васильев', number: '+79192645632', type: 3 },
// ];
