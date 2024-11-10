interface IVehicle {
  modelName: string;
  year: number;
  broken: boolean;
  details(): string;
}

const oldCivic: IVehicle = {
  modelName: "civic",
  year: 2000,
  broken: false,
  details(): string {
    return `Name:${this.modelName},Year:${this.year}`;
  },
};

console.log(oldCivic.details());

//Extends
interface IBaseModel {
  id: number;
}
interface Iperson {
  name: string;
  age: number;
}

interface Iuser extends IBaseModel, Iperson {
  userDetails(): void;
}

const sathish: Iuser = {
  id: 1,
  name: "Sathish",
  age: 28,
  userDetails(): void {
    console.log(this.name);
  },
};

sathish.userDetails();
console.log(sathish);
