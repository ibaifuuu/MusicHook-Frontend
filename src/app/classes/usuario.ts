export class Usuario {
    private _nombre: string = "";
    private _apellido: string = "";
    private _nombreUsuario: string = "";
    private _fechaNacimiento: string = "";
    private _pais: string = "";
    private _comunidad: string = "";
    private _localidad: string = "";
    private _telefono: string = "";
    private _mail: string = "";

    constructor(nombre: string, apellido: string, nombreUsuario: string, fechaNacimiento: string, pais: string, comunidad: string, localidad: string, telefono: string, mail: string) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._nombreUsuario = nombreUsuario;
        this._fechaNacimiento = fechaNacimiento;
        this._pais = pais;
        this._comunidad = comunidad;
        this._localidad = localidad;
        this._telefono = telefono;
        this._mail = mail;
    }

    // Getters
    get nombre(): string {
        return this._nombre;
    }

    get apellido(): string {
        return this._apellido;
    }

    get nombreUsuario(): string {
        return this._nombreUsuario;
    }

    get fechaNacimiento(): string {
        return this._fechaNacimiento;
    }

    get pais(): string {
        return this._pais;
    }

    get comunidad(): string {
        return this._comunidad;
    }

    get localidad(): string {
        return this._localidad;
    }

    get telefono(): string {
        return this._telefono;
    }

    get mail(): string {
        return this._mail;
    }

    // Setters
    set nombre(value: string) {
        this._nombre = value;
    }

    set apellido(value: string) {
        this._apellido = value;
    }

    set nombreUsuario(value: string) {
        this._nombreUsuario = value;
    }

    set fechaNacimiento(value: string) {
        this._fechaNacimiento = value;
    }

    set pais(value: string) {
        this._pais = value;
    }

    set comunidad(value: string) {
        this._comunidad = value;
    }

    set localidad(value: string) {
        this._localidad = value;
    }

    set telefono(value: string) {
        this._telefono = value;
    }

    set mail(value: string) {
        this._mail = value;
    }
}
