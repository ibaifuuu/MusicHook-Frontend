import { Comentario } from "./comentario";

export class Publicacion {
    private _idPublicacion: number = 0;
    private _nombreUsuario: string = "";
    private _mensaje: string = "";
    private _imagenPerfil?: ImageBitmap;
    private _genero: string = "";
    private _comentarios:Comentario[]=[];

    constructor(idPublicacion: number, nombreUsuario: string, mensaje: string, genero: string,comentarios:Comentario[], imagenPerfil?: ImageBitmap) {
        this._idPublicacion = idPublicacion;
        this._nombreUsuario = nombreUsuario;
        this._mensaje = mensaje;
        this._genero = genero;
        this._imagenPerfil = imagenPerfil;
        this._comentarios = comentarios;
    }
    // Getters
    get comentarios():Comentario[]{
        return this._comentarios;
    }

    get idPublicacion(): number {
        return this._idPublicacion;
    }

    get nombreUsuario(): string {
        return this._nombreUsuario;
    }

    get mensaje(): string {
        return this._mensaje;
    }

    get imagenPerfil(): ImageBitmap | undefined {
        return this._imagenPerfil;
    }

    get genero(): string {
        return this._genero;
    }

    // Setters
    set idPublicacion(value: number) {
        this._idPublicacion = value;
    }

    set nombreUsuario(value: string) {
        this._nombreUsuario = value;
    }

    set mensaje(value: string) {
        this._mensaje = value;
    }

    set imagenPerfil(value: ImageBitmap | undefined) {
        this._imagenPerfil = value;
    }

    set genero(value: string) {
        this._genero = value;
    }

    set comentarios(value:Comentario[]){
        this._comentarios = value;
    }

    public addComentario(value:Comentario){
        this._comentarios.push(value);
    }
}
