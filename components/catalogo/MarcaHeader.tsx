import { Icon } from "@/components/ui/Icon";
import { CONFIG } from "@/lib/config";

/** Encabezado del catálogo: logo o nombre, una línea de qué haces, y el sello 24/7. */
export function MarcaHeader() {
  const { marca } = CONFIG;
  return (
    <header className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 pt-8 pb-8 text-center sm:pt-10">
      {/* Portada del negocio (su flyer). El nombre ya se ve aquí, por eso el
          <h1> de texto va oculto: sigue ahí para buscadores y lectores. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/portada-hero.jpg"
        alt={`${marca.negocio} — ${marca.descripcion}`}
        className="w-full max-w-sm rounded-3xl border border-line object-contain"
      />
      <h1 className="sr-only">{marca.negocio}</h1>

      <span className="chip no-print">
        <span className="anim-pulse-glow inline-block h-2 w-2 rounded-full" style={{ background: "var(--marca)" }} />
        Catálogo disponible 24/7
      </span>

      <p className="max-w-xl text-lg text-ink-soft">{marca.descripcion}</p>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-ink-mute no-print">
        {marca.ciudad && (
          <span className="inline-flex items-center gap-1.5">
            <Icon name="lucide:map-pin" size={15} /> {marca.ciudad}
          </span>
        )}
        {marca.enlace && (
          <span className="inline-flex items-center gap-1.5">
            <Icon name="lucide:link" size={15} /> {marca.enlace}
          </span>
        )}
      </div>
    </header>
  );
}
