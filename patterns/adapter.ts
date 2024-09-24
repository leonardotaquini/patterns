interface Inventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): { nombre: string; tipo: string; estado: string }[];
  }
  
  class InventarioViejo {
    private items: { nombre: string; tipo: string; estado: string }[] = [];
  
    public agregarItem(item: { nombre: string; tipo: string; estado: string }): void {
      this.items.push(item);
    }
  
    public getItems(): { nombre: string; tipo: string; estado: string }[] {
      return this.items;
    }
  }
  
  class AdaptadorInventario implements Inventario {
    private inventarioViejo: InventarioViejo;
  
    constructor(inventarioViejo: InventarioViejo) {
      this.inventarioViejo = inventarioViejo;
    }
  
    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
      const item = { nombre, tipo, estado };
      this.inventarioViejo.agregarItem(item);
    }
  
    public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
      return this.inventarioViejo.getItems();
    }
  }
  
  // Ejemplo de uso
  const inventarioViejo = new InventarioViejo();
  const adaptador = new AdaptadorInventario(inventarioViejo);
  
  adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
  console.log(adaptador.listarEquipos());
  