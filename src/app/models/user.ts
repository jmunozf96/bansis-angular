export class User {
  constructor(
    public id: number,
    public idhacienda: number,
    public nombre: string,
    public apellido: string,
    public correo: string,
    public nick: string,
    public contraseña: string,
    public avatar: string,
    public descripcion: string
  ) {
  }
}
