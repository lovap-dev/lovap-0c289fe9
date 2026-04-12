import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const WHATSAPP_URL = "https://wa.me/573006719235";
const MAILTO = "mailto:lovap.dev@gmail.com?subject=Cotización%20desde%20lovap";

const highlights = [
  { icon: "Zap", text: "Respuesta el mismo día hábil" },
  { icon: "FileCheck", text: "Brief claro en dos pasos" },
  { icon: "BadgeCheck", text: "Sin compromiso hasta aceptar propuesta" },
];

const HomeClosingCTA = () => {
  return (
    <section
      className="relative overflow-hidden border-t border-primary/25 bg-gradient-to-b from-slate-950 via-[#1a2744] to-[#0c121f] py-16 text-white lg:py-24"
      aria-labelledby="home-closing-cta-heading"
    >
      {/* fondo: malla + brillo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8FF65' fill-opacity='0.12'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-14"
        >
          {/* Columna copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-sm">
              <Icon name="Rocket" size={16} className="text-primary" aria-hidden />
              <span>Da el siguiente paso</span>
            </div>

            <h2
              id="home-closing-cta-heading"
              className="font-gilroy text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
            >
              Convierte tu idea en un{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">sitio que vende</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-3 rounded-sm bg-primary/25"
                  aria-hidden
                />
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Cuéntanos qué necesitas: te armamos una propuesta con alcance y tiempos. Puedes empezar con el formulario de
              cotización o escribirnos al instante.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-white/90 sm:text-base">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Icon name={item.icon} size={18} aria-hidden />
                  </span>
                  <span className="pt-1 font-inter leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Panel de acciones — borde luminoso sobre fondo oscuro */}
          <div className="rounded-3xl border-2 border-white/10 bg-black/25 p-6 shadow-2xl shadow-black/40 ring-1 ring-inset ring-primary/15 backdrop-blur-md sm:p-8">
              <p className="text-center font-gilroy text-lg font-semibold text-white sm:text-xl">
                ¿Listo para cotizar?
              </p>
              <p className="mt-2 text-center text-sm leading-relaxed text-white/70">
                El formulario tarda menos de dos minutos. También puedes escribirnos directo.
              </p>

              <div className="mt-8 space-y-3">
                <Button
                  asChild
                  variant="default"
                  size="xl"
                  fullWidth
                  className="h-12 rounded-xl border-2 border-primary/50 bg-primary font-gilroy text-base font-bold text-primary-foreground shadow-lg shadow-primary/35 ring-2 ring-primary/20 transition hover:brightness-110 sm:h-14 sm:text-lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={22}
                >
                  <Link to="/contact#quote-form">Solicitar cotización</Link>
                </Button>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    fullWidth
                    className="h-11 rounded-xl border-2 border-white/25 bg-white/5 font-gilroy font-semibold text-white shadow-sm backdrop-blur-sm hover:bg-white/12"
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
                  >
                    WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    fullWidth
                    className="h-11 rounded-xl border-2 border-white/25 bg-white/5 font-gilroy font-semibold text-white shadow-sm backdrop-blur-sm hover:bg-white/12"
                    iconName="Mail"
                    iconPosition="left"
                    onClick={() => {
                      window.location.href = MAILTO;
                    }}
                  >
                    Email
                  </Button>
                </div>
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 text-xs text-white/55 sm:text-sm">
                <Icon name="Clock" size={16} className="shrink-0 text-primary" aria-hidden />
                Te respondemos en menos de 24 horas hábiles
              </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeClosingCTA;
