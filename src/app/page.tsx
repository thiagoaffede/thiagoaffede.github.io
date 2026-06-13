"use client";

import { useState, FormEvent } from "react";

const projects = [
  {
    title: "K9 — Gestión Canina",
    desc: "Sistema completo para unidades caninas militares y policiales. Gestiona perros, vacunas, controles veterinarios, alimentación, entrenamiento, incidentes y asignación de guías con roles de acceso.",
    tags: ["Node.js", "React", "Express", "PostgreSQL", "Supabase", "Tailwind"],
    href: "https://github.com/thiagoaffede/K9",
    icon: "🐾",
  },
  {
    title: "Contenedores — ERP",
    desc: "Sistema de gestión para alquiler de contenedores. Maneja pedidos, obradores, liquidaciones automáticas con prorrateo, choferes y clientes. En producción en Bahía Blanca, Argentina.",
    tags: ["VB.NET", "ASP.NET", "SQL Server", "Bootstrap", "jQuery"],
    href: "https://github.com/thiagoaffede/Contenedores",
    icon: "🗄️",
  },
  {
    title: "Fixaro — Marketplace",
    desc: "Plataforma inversa de servicios del hogar. Los usuarios publican su problema y profesionales cercanos responden con presupuestos. Geolocalización con privacidad y chat integrado.",
    tags: ["Laravel", "PHP", "Livewire", "Alpine.js", "MySQL", "OpenStreetMap"],
    href: "https://github.com/thiagoaffede/Fixaro",
    icon: "🔧",
  },
  {
    title: "Qzero SyS — ERP Climatización",
    desc: "ERP completo para Qzero Energy Building. Gestiona productos, stock, hojas de obra, cuadros de potencia, encomiendas, precios y tickets de soporte con API REST.",
    tags: ["Laravel", "PHP", "Blade", "MySQL", "DOMPDF", "PhpSpreadsheet"],
    href: "https://github.com/thiagoaffede/Qzero-SyS",
    icon: "⚡",
  },
  {
    title: "Qzero Energy Building",
    desc: "Plataforma web con configurador interactivo de espejos touch. Vista previa en tiempo real, selección de temperatura LED, y sistema de presupuestos por email.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind", "Nodemailer"],
    href: "https://github.com/thiagoaffede/Qzero",
    icon: "🪞",
  },
];

const skills = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Laravel", icon: "laravel" },
  { name: "PHP", icon: "php" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: ".NET / VB.NET", icon: "dotnet" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Git & GitHub", icon: "git" },
  { name: "HTML & CSS", icon: "html5" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/thiagoaffede",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/thiagoaffede",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:thiagoaffede@hotmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Home() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/ajax/thiagoaffede@hotmail.com", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setFormState("sent");
        form.reset();
        setTimeout(() => setFormState("idle"), 4000);
      }
    } catch {
      setFormState("idle");
      alert("Error al enviar. Intenta de nuevo.");
    }
  };

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-surface-900/70 border-b border-surface-700/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            TA<span className="text-accent">.</span>
          </span>
          <div className="flex gap-6 text-sm font-medium text-surface-300">
            <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-surface-600 rounded-full px-4 py-1.5 text-xs text-surface-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para proyectos
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
              Thiago Affede
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-surface-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Full-stack developer y creador de startups. Construyo sistemas web completos — desde
            ERPs y marketplaces hasta plataformas interactivas — con{" "}
            <span className="text-white font-medium">React</span>,{" "}
            <span className="text-white font-medium">Laravel</span> y{" "}
            <span className="text-white font-medium">TypeScript</span>.
            Cada proyecto es una nueva oportunidad de resolver problemas reales.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              Ver proyectos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-surface-500 hover:border-surface-300 text-surface-300 hover:text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">Proyectos</h2>
            <p className="text-surface-400 max-w-lg mx-auto">
              Startups y sistemas que he construido de punta a punta.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-xl border border-surface-700 bg-surface-800/50 hover:border-surface-500 hover:bg-surface-800 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-700 flex items-center justify-center text-lg group-hover:bg-accent/20 transition-colors">
                    {p.icon}
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-accent transition-colors leading-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-surface-400 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-surface-700 text-surface-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-surface-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Tecnologías</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">Skills</h2>
            <p className="text-surface-400 max-w-lg mx-auto">
              Tecnologías y herramientas que uso en el día a día.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-center gap-4 p-6 rounded-xl border border-surface-700 bg-surface-800/50 hover:border-accent/40 hover:bg-surface-800 hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.15)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={`https://cdn.simpleicons.org/${s.icon}/ffffff`}
                    alt={s.name}
                    className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-medium text-surface-400 group-hover:text-white transition-colors text-center">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Contacto</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">Hablemos</h2>
            <p className="text-surface-400 max-w-md mx-auto">
              Si tenés un proyecto en mente o querés saber más sobre mi trabajo, escribime.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-surface-300 mb-1.5">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg bg-surface-800 border border-surface-600 text-white text-sm placeholder-surface-400 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-surface-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-surface-800 border border-surface-600 text-white text-sm placeholder-surface-400 outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-surface-300 mb-1.5">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Contame de qué se trata..."
                className="w-full px-4 py-3 rounded-lg bg-surface-800 border border-surface-600 text-white text-sm placeholder-surface-400 outline-none focus:border-accent transition-colors resize-y"
              />
            </div>
            <input type="text" name="_honey" className="hidden" />
            <button
              type="submit"
              disabled={formState === "sending"}
              className="w-full py-3.5 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              {formState === "sending" ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : formState === "sent" ? (
                "✓ Mensaje enviado!"
              ) : (
                "Enviar mensaje"
              )}
            </button>
          </form>

          <div className="flex justify-center gap-4 mt-10">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-full border border-surface-600 bg-surface-800/50 flex items-center justify-center text-surface-400 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-surface-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-surface-500">
          <span>© {new Date().getFullYear()} Thiago Affede</span>
          <span className="text-xs">
            Hecho con Next.js · TypeScript · Tailwind CSS
          </span>
        </div>
      </footer>
    </>
  );
}
