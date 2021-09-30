export class Student {
    codigo: string;
    cedula: string;
    edad: number;
    direccion: string;
    telefono: string;

    constructor(codigo: string, cedula: string, edad: number, direccion: string, telefono: string){
        this.codigo = codigo;
        this.cedula = cedula;
        this.direccion = direccion;
        this.edad = edad;
        this.telefono = telefono;

    }
}