class Inventario {
    private static instancia: Inventario;
    private equipos: { nombre: string; tipo: string; estado: string }[] = [];
  
    private constructor() {}
  
    static obtenerInstancia(): Inventario {
      if (!Inventario.instancia) {
        Inventario.instancia = new Inventario();
      }
      return Inventario.instancia;
    }
  
    agregarEquipo(nombre: string, tipo: string, estado: string): void {
      this.equipos.push({ nombre, tipo, estado });
    }
  
    listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
      return [...this.equipos]; 
    }
  }
  
  // Uso del Singleton
  const inventario = Inventario.obtenerInstancia();
  inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
  console.log(inventario.listarEquipos());


// ------------------------------------------------------------------------------------------



