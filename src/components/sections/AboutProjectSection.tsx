import { aboutProject } from "@/data/about";

export function AboutProjectSection() {
  return (
    <section className="w-full border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {aboutProject.title}
        </h2>

        <div className="mt-6 space-y-4">
          {aboutProject.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
