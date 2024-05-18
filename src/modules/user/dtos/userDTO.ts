export class UserDTO {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public isAdmin: boolean;

    constructor(firstName: string, lastName: string, email: string, password: string, isAdmin: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}