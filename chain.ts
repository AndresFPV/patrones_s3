//ESTE MODELO ESTA INCOMPLETO VER EL GIT DEL CURSO www.github.com/ulima-is2/is2_patrones1

interface Reclamo
{
    monto : number
}

abstract class Empleado
{
    sucesor : Empleado

    abstract analizarReclamo(reclamo : Reclamo)

    addSucesor(sucesor : Empleado)
    {   
        this.sucesor = sucesor
    }
}

class Cajero extends Empleado
{
    analizarReclamo(reclamo : Reclamo)
    {
        if (reclamo.monto >= 300)
        {
            //No lo puede resolver y tiene que derivarlo
            this.sucesor.analizarReclamo(reclamo)
        }else{
            console.log("El cajero resolvio el reclamo")
        }

    }
}

class Administrador extends Empleado
{
    analizarReclamo(reclamo : Reclamo)
    {
        if (reclamo.monto >= 1000)
        {
            //No lo puede resolver y tiene que derivarlo
            this.sucesor.analizarReclamo(reclamo)
        }else{
            console.log("El administrador resolvio el reclamo")
        }

    }
}

class Gerente extends Empleado
{
    analizarReclamo(reclamo : Reclamo)
    {
        console.log("El problema se ha resuleto")
    }
}

let mainChain = () => {
    //1. Definir la estructura de mi cadena de responsabilidad
    let cajero = new Cajero()
    let administrador = new Administrador()
    let gerente = new Gerente()

    cajero.addSucesor(administrador)
    administrador.addSucesor(gerente)

    //2. Ejecutar la peticion
    let rec1 : Reclamo = {
        monto : 150
    }
    cajero.analizarReclamo(rec1)

    let rec2 : Reclamo = {
        monto : 500
    }
    cajero.analizarReclamo(rec2)
}

mainChain()