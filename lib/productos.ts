// lib/productos.ts
import type { Producto } from "./tipos";

export const PRODUCTOS: Producto[] = [
  {
    slug: "mandado-general",
    nombre: "El mandado que sea",
    categoria: "Mandados",
    imagen: undefined,
    paraQuien: "Para cuando necesitas algo y no puedes salir o no te da tiempo.",
    beneficio: "Nosotros vamos por ti y te lo dejamos en tu puerta.",
    caracteristicas: ["El mandado que sea, un solo precio", "$35 aunque sea grande, mientras quepa en la moto", "En Canatlán"],
    precio: "$35",
    destacado: true,
  },
  {
    slug: "super-y-tienda",
    nombre: "Súper y tienda",
    categoria: "Mandados",
    imagen: undefined,
    paraQuien: "Para cuando te falta algo del súper o la tienda y no puedes ir.",
    beneficio: "Nos pasas tu lista, hacemos la compra y te la llevamos.",
    caracteristicas: ["Súper, tienda o abarrotes", "Tú nos pasas la lista", "$35 el viaje"],
    precio: "$35",
  },
  {
    slug: "farmacia",
    nombre: "Farmacia",
    categoria: "Mandados",
    imagen: undefined,
    paraQuien: "Para cuando necesitas tu medicina o algo de la farmacia y no puedes salir.",
    beneficio: "Vamos por lo que necesitas y te lo llevamos rápido.",
    caracteristicas: ["Vamos a la farmacia por ti", "Te lo dejamos en tu casa", "$35"],
    precio: "$35",
  },
  {
    slug: "comida-y-antojo",
    nombre: "Comida y antojo",
    categoria: "Mandados",
    imagen: undefined,
    paraQuien: "Para cuando se te antoja algo del restaurante y no quieres salir.",
    beneficio: "Te lo traemos hasta tu casa sin que muevas un dedo.",
    caracteristicas: ["Comida o antojo de cualquier lugar de Canatlán", "Lo recogemos y te lo llevamos", "$35"],
    precio: "$35",
  },
  {
    slug: "paquetes-y-documentos",
    nombre: "Paquetes y documentos",
    categoria: "Mandados",
    imagen: undefined,
    paraQuien: "Para cuando necesitas mandar o recoger un paquete o un papel dentro del pueblo.",
    beneficio: "Lo recogemos y lo entregamos por ti.",
    caracteristicas: ["Paquetes y documentos", "Recogemos y entregamos en Canatlán", "$35"],
    precio: "$35",
  },
];

/** Productos de una categoría, con el destacado primero. */
export function productosPorCategoria(categoria: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === categoria).sort(
    (a, b) => Number(b.destacado ?? false) - Number(a.destacado ?? false)
  );
}

/** Busca un producto por su slug (para la ficha individual). */
export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
