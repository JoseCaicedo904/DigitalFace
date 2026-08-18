import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useLocale } from "@/i18n/LocaleProvider";
import { legalContent } from "@/i18n/content/legal";

/**
 * Date the legal copy was last revised. Update it whenever the wording changes.
 */
const LAST_UPDATED = "2026-08-17";

const dateLocale = { en: "en-US", es: "es-CO" } as const;

export function LegalDocument({ document }: { document: "privacy" | "terms" }) {
  const { locale } = useLocale();
  const t = legalContent[locale][document];

  usePageMetadata(t.metadata.title, t.metadata.description);

  const lastUpdated = new Date(`${LAST_UPDATED}T00:00:00`).toLocaleDateString(
    dateLocale[locale],
    { month: "long", day: "numeric", year: "numeric" },
  );

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {t.eyebrow}
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 text-sm font-semibold text-brand-600">
            {t.lastUpdatedLabel}: {lastUpdated}
          </p>
          <p className="mt-4 text-lg text-ink-500">{t.intro}</p>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-sm text-ink-500">
            {t.sections.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-900">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list.length > 0 ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.subsections.length > 0 ? (
                  <div className="space-y-3">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.title}>
                        <p className="font-semibold text-slate-900">
                          {subsection.title}
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                          {subsection.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
