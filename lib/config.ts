// lib/config.ts
import type { Config } from "./tipos";

export const CONFIG: Config = {
  marca: {
    negocio: "Moto Flash Canatlán",
    descripcion:
      "Hacemos cualquier mandado en Canatlán y te lo llevamos hasta tu casa por $35.",
    logo: undefined,
    primario: "#dc2626",
    secundario: "#f59e0b",
    fondo: "claro",
    whatsappPrincipal: "5216182825100",
    ciudad: "Canatlán, Durango",
    enlace: undefined,
  },
  vendedores: [
    { slug: "harykzey", nombre: "Harykzey Hernández", whatsapp: "5216182825100", puesto: "Mandados" },
  ],
  categorias: ["Mandados"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y necesito {producto}. ¿Me pueden ayudar?",
};
