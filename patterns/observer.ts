interface Observador {
    actualizar(equipo: Equipo): void;
}

class Equipo {
    private observadores: Observador[] = [];
    constructor(public nombre: string, public tipo?: string, public estado?: string) {}

    agregarObservador(observador: Observador) {
        this.observadores.push(observador);
    }

    quitarObservador(observador: Observador) {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    cambiarEstado(nuevoEstado: string) {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores() {
        this.observadores.forEach(observador => observador.actualizar(this));
    }
}

class Soporte implements Observador {
    actualizar(equipo: Equipo) {
        console.log(`Soporte notificado: ${equipo.nombre} ha cambiado su estado a ${equipo.estado}.`);
    }
}

// Uso del patrón
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");