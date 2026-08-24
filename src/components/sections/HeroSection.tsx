import Image from "next/image";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
        <div className="shrink-0">
          <Image
            src={profile.photoUrl}
            alt={profile.photoAlt}
            width={256}
            height={256}
            priority
            className="h-48 w-48 rounded-full object-cover shadow-md sm:h-56 sm:w-56 md:h-64 md:w-64"
          />
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-indigo-600 sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-6 space-y-4">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          <nav aria-label="Links de perfil" className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            {profile.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-indigo-600 hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
