import Image from "next/image";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[280px_1fr]">
          <div className="mx-auto shrink-0 md:mx-0">
            <Image
              src={profile.photoUrl}
              alt={profile.photoAlt}
              width={280}
              height={280}
              priority
              className="h-56 w-56 rounded-full object-cover shadow-md ring-4 ring-brand/20 sm:h-64 sm:w-64 md:h-[280px] md:w-[280px]"
            />
          </div>

          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-3">
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
                {profile.tagline}
              </span>
            </p>

            <div className="mt-6 space-y-3 font-sans">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <nav
              aria-label="Links de perfil"
              className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
            >
              {profile.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-brand hover:text-brand"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
