class User {
  constructor(
    public id: number,
    public name: string,
    public location: string,
    public salary: number
  ) {}

  public UserDetails(): void {
    console.log(
      `Id:${this.id},Name:${this.name} and Location:${this.location}`
    );
  }

  public SalaryDetails(salary: number): number {
    return salary * 2;
  }
}

let arun = new User(1, "Arun", "Chennai", 50000);

arun.UserDetails();

console.log(arun.SalaryDetails(40000));
