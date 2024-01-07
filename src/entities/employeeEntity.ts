export class EmployeeEntity {
    public readonly name: string; 
    public readonly email: string;
    public readonly id?: string;
    
    constructor(id: string, name: string, email: string) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }