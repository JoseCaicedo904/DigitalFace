import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useLocale } from "@/i18n/LocaleProvider";
import { notFoundContent } from "@/i18n/content/notFound";

const NotFound = () => {
  const location = useLocation();
  const { locale, path } = useLocale();
  const t = notFoundContent[locale];

  // The SPA answers every unknown URL with a 200, so the noindex directive is the
  // only thing stopping a mistyped or stale link from being indexed as a real page.
  usePageMetadata(t.metadata.title, t.metadata.description, { noindex: true });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-20 text-center text-white">
      <div className="max-w-md">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ocean-200">
          {t.code}
        </p>
        <h1 className="mt-5 text-3xl font-semibold sm:text-4xl">{t.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          {t.description}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to={path("/")}
            className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-ocean-500 px-6 py-3.5 text-sm font-semibold text-white shadow-brand-soft transition hover:-translate-y-0.5 sm:w-auto"
          >
            {t.homeCta}
          </Link>
          <Link
            to={path("/contact")}
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            {t.contactCta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
