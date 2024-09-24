
interface Equipo {
    tipo?: string;
    nombre: string;
    detalles(): string;
  }
  
  class Notebook implements Equipo {
    constructor(public nombre: string, public ram: string, public procesador: string) {}
    detalles() {
      return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
  }
  
  class Desktop implements Equipo {
    constructor(public nombre: string, public ram: string, public procesador: string) {}
    detalles() {
      return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
  }
  

  
  class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
      switch (tipo.toLowerCase()) {
        case 'notebook':
          return new Notebook(nombre, ram, procesador);
        case 'desktop':
          return new Desktop(nombre, ram, procesador);
        default:
          throw new Error('Tipo de equipo no válido');
      }
    }
  }
  
  // Uso de la fábrica
  const factory = new EquipoFactory();
  const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
  console.log(notebook.detalles()); 