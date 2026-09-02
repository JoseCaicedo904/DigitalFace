import { LeadForm } from "@/components/forms/LeadForm";
import { useLocale } from "@/i18n/LocaleProvider";
import { contactContent } from "@/i18n/content/contact";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import type { LeadPageSource } from "@shared/lead";

/**
 * The written route into DigitalFace, as the contact page settled it: the
 * shared lead form, and directly under it the one line that answers what a
 * visitor is actually wondering as they finish typing — what happens next.
 *
 * `LeadForm` already keeps the fields, validation and submission identical
 * everywhere. This section is the rest of that moment: the surface it sits on,
 * the measure it is read at, and the note that closes it. It lives here rather
 * than inline on each page so the contact page and the three industry funnels
 * cannot drift apart the way they had.
 *
 * What differs per placement stays props: the anchor its page links down to,
 * the lead source that keeps reporting able to tell the four placements apart,
 * and the page-level heading a funnel wants over the form. The headings are
 * forwarded straight to `LeadForm`, which falls back to the shared copy when
 * a page has nothing of its own to say.
 */
export type ContactFormSectionProps = {
  /** Anchor for the page's "write instead" links. */
  id?: string;
  /** Which placement this is. Lets reporting separate the four pages. */
  pageSource: LeadPageSource;
  /** Page-level context for the form. Omitted, the shared copy is used. */
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function ContactFormSection({
  id,
  pageSource,
  eyebrow,
  title,
  description,
  className,
}: ContactFormSectionProps) {
  const { locale } = useLocale();
  const t = contactContent[locale];

  return (
    <section
      id={id}
      className={cn("scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28", className)}
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <LeadForm
            pageSource={pageSource}
            eyebrow={eyebrow}
            title={title}
            description={description}
          />

          <div className="space-y-3 rounded-2xl border border-ink-100 bg-white/70 p-6 text-sm text-ink-500">
            <div className="flex items-center gap-3 text-ink-600">
              <Sparkles className="h-5 w-5 shrink-0 text-brand-500" />
              <p className="font-semibold">{t.form.nextTitle}</p>
            </div>
            <p>{t.form.nextBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
