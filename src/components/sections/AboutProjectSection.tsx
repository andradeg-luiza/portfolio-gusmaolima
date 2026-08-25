import { aboutProject } from "@/data/about";

export function AboutProjectSection() {
  return (
    <section className="w-full border-t border-slate-200 bg-slate-100/60 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="border-l-4 border-brand pl-4 font-heading text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {aboutProject.title}
        </h2>

        <div className="mt-6 space-y-4">
          {aboutProject.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
