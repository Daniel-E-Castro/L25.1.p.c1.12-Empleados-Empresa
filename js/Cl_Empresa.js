export default class Cl_Empresa {
    constructor(){
        this.conMujeres = 0
        this.conHombres = 0
        this.conPersonas = 0
    }
    procesar(Emple){
        this.conPersonas++

        if(Emple.sexo === "M")
            this.conHombres++
        else{
            if(Emple.sexo === "F")
                this.conMujeres++
        }
    }
    cantidadHombresEmpresa(){
        return this.conHombres
    }
    porcentaje(){
        return (this.conMujeres / this.conPersonas) * 100
    }
}