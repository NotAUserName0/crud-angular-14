export class Alumno {
    id:string;
    nombre:string;
    grupo:string;
    grado:string;

    public constructor(init? : Partial<Alumno>){
        Object.assign(this,init);
    }
}
