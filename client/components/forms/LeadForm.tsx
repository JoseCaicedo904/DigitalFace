import { Button } from "@/components/ui/button";
import { getCountryOptions } from "@/data/countries";
import { useLocale } from "@/i18n/LocaleProvider";
import { leadFormContent } from "@/i18n/content/leadForm";
import { readAttribution } from "@/lib/attribution";
import { cn } from "@/lib/utils";
import {
  LEAD_FORM_SOURCE,
  LEAD_GOALS,
  isPlausibleEmail,
  isPlausiblePhone,
  normalizeWebsite,
  type LeadGoal,
  type LeadPageSource,
  type LeadResponse,
  type LeadSubmission,
} from "@shared/lead";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Sparkles,
} from "lucide-react";
import { useId, useMemo, useState, type FormEvent } from "react";

/**
 * The single lead-capture form used by the homepage, the contact page and all
 * three industry landing pages. Field definitions, validation, the offer, the
 * terms, attribution, the payload and every submission state live here so the
 * five placements cannot drift apart; pages only pass their own context.
 */

const LEAD_ENDPOINT = "/api/lead";

type FieldKey =
  | "name"
  | "business"
  | "email"
  | "phone"
  | "country"
  | "website"
  | "goal";

type Values = {
  name: string;
  business: string;
  email: string;
  phone: string;
  country: string;
  website: string;
  goal: "" | LeadGoal;
  message: string;
  /** Honeypot. Never shown, never focusable — only bots fill it. */
  companyFax: string;
};

const EMPTY_VALUES: Values = {
  name: "",
  business: "",
  email: "",
  phone: "",
  country: "",
  website: "",
  goal: "",
  message: "",
  companyFax: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export type LeadFormProps = {
  /** Which placement this is. Lets reporting separate homepage from landings. */
  pageSource: LeadPageSource;
  tone?: "light" | "dark";
  /** Page-level context. Falls back to the shared copy when omitted. */
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function LeadForm({
  pageSource,
  tone = "light",
  eyebrow,
  title,
  description,
  className,
}: LeadFormProps) {
  const { locale } = useLocale();
  const t = leadFormContent[locale];
  const fieldId = useId();
  const countries = useMemo(() => getCountryOptions(locale), [locale]);

  const [values, setValues] = useState<Values>(EMPTY_VALUES);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submittedName, setSubmittedName] = useState("");

  const dark = tone === "dark";
  const id = (key: string) => `${fieldId}-${key}`;

  /* ---------------------------------------------------------------- styles */

  /*
   * Contrast is the whole point of this layer. Each value is picked against the
   * surface it actually sits on, not for subtlety. Labels, placeholders and
   * microcopy previously used ink-300/ink-400 — roughly 1.5:1 and 2.6:1 on
   * white, which reads as a disabled field. Nothing informative is lighter
   * than ink-500 (4.8:1) now, and nothing important is smaller than 13px.
   */
  const labelClass = cn(
    "block text-sm font-bold uppercase tracking-[0.08em]",
    dark ? "text-white/90" : "text-ink-700",
  );
  const optionalClass = cn(
    "ml-2 text-xs font-semibold normal-case tracking-normal",
    dark ? "text-white/60" : "text-ink-500",
  );
  /*
   * 16px input text is deliberate twice over: it is comfortably readable, and
   * anything under 16px makes iOS Safari zoom the page on focus.
   * `focus:` rather than `focus-visible:` so a mouse click on a select shows
   * the ring too — every browser agrees on :focus for form controls.
   */
  const controlClass = cn(
    "w-full rounded-xl border px-4 py-3.5 text-base leading-6 outline-none",
    "transition-[color,border-color,background-color,box-shadow] duration-200",
    "focus:ring-2",
    dark
      ? "border-white/25 bg-white/[0.09] text-white placeholder:text-white/55 hover:border-white/40 focus:border-ocean-300 focus:bg-white/[0.12] focus:ring-ocean-400/35"
      : "border-ink-300 bg-ink-50 text-ink-900 placeholder:text-ink-500 hover:border-ink-400 hover:bg-white focus:border-brand-500 focus:bg-white focus:ring-brand-500/25",
  );
  const invalidClass = dark
    ? "border-red-400 focus:border-red-400 focus:ring-red-400/35"
    : "border-red-500 bg-red-50/50 focus:border-red-500 focus:ring-red-500/25";
  const errorTextClass = cn(
    "text-sm font-semibold",
    dark ? "text-red-300" : "text-red-600",
  );
  /** Keeps an unchosen select visibly a prompt rather than a filled answer. */
  const placeholderTone = dark ? "text-white/55" : "text-ink-500";

  const control = (key: FieldKey) =>
    cn(controlClass, errors[key] && invalidClass);
  const describedBy = (key: FieldKey) =>
    errors[key] ? id(`${key}-error`) : undefined;

  /* ------------------------------------------------------------ validation */

  function setValue<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Clear an error the moment the visitor addresses it, rather than making
    // them submit again to find out.
    if (key in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as FieldKey];
        return next;
      });
    }
  }

  function validate(): Partial<Record<FieldKey, string>> {
    const next: Partial<Record<FieldKey, string>> = {};

    if (!values.name.trim()) next.name = t.errors.name;
    if (!values.business.trim()) next.business = t.errors.business;
    if (!isPlausibleEmail(values.email.trim())) next.email = t.errors.email;
    if (!isPlausiblePhone(values.phone.trim())) next.phone = t.errors.phone;
    if (!values.country) next.country = t.errors.country;
    if (!values.goal) next.goal = t.errors.goal;
    if (values.website.trim() && normalizeWebsite(values.website) === null) {
      next.website = t.errors.website;
    }

    return next;
  }

  /* ------------------------------------------------------------ submission */

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return; // guards double-click duplicates

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      document
        .getElementById(id(`${Object.keys(found)[0]}-field`))
        ?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

    // Silently accept and discard: telling a bot it failed just teaches it.
    if (values.companyFax.trim()) {
      setSubmittedName(values.name.trim().split(/\s+/)[0] ?? "");
      setStatus("success");
      return;
    }

    setStatus("submitting");

    const goal = values.goal as LeadGoal;
    const countryName =
      [...countries.priority, ...countries.rest].find(
        (option) => option.code === values.country,
      )?.name ?? values.country;

    const payload: LeadSubmission = {
      name: values.name.trim(),
      business: values.business.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      country: values.country,
      countryName,
      website: normalizeWebsite(values.website) || "",
      primaryGoal: goal,
      primaryGoalLabel: t.goals[goal],
      message: values.message.trim(),
      locale,
      formSource: LEAD_FORM_SOURCE,
      pageSource,
      submissionTimestamp: new Date().toISOString(),
      ...readAttribution(),
    };

    try {
      const response = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response
        .json()
        .catch(() => ({ ok: false }))) as LeadResponse;

      if (!response.ok || !result.ok) {
        // Never claim success on a failed send — the lead would be lost
        // silently and the visitor would wait for an email that never comes.
        setStatus("error");
        return;
      }

      setSubmittedName(values.name.trim().split(/\s+/)[0] ?? "");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  /* -------------------------------------------------------------- success */

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-3xl border p-8 sm:p-10",
          dark
            ? "border-white/20 bg-white/[0.09]"
            : "border-ink-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]",
          className,
        )}
      >
        <div
          role="status"
          aria-live="polite"
          className="mx-auto max-w-lg text-center"
        >
          <span
            className={cn(
              "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl",
              dark
                ? "bg-ocean-400/15 text-ocean-200"
                : "bg-brand-50 text-brand-600",
            )}
          >
            <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
          </span>
          <p
            className={cn(
              "mt-6 text-sm font-bold uppercase tracking-[0.18em]",
              dark ? "text-ocean-100" : "text-brand-700",
            )}
          >
            {t.successLabel}
          </p>
          <h3
            className={cn(
              "mt-4 text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-4xl",
              dark ? "text-white" : "text-slate-900",
            )}
          >
            {t.successTitle.replace("{name}", submittedName)}
          </h3>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              dark ? "text-white/85" : "text-ink-700",
            )}
          >
            {t.successBody}
          </p>
          <p
            className={cn(
              "mt-3 text-base leading-relaxed",
              dark ? "text-white/75" : "text-ink-600",
            )}
          >
            {t.successEmailNote}
          </p>
        </div>
      </div>
    );
  }

  /* ----------------------------------------------------------------- form */

  const submitting = status === "submitting";

  return (
    <div
      className={cn(
        "rounded-3xl border p-7 sm:p-9 lg:p-11",
        dark
          ? "border-white/20 bg-white/[0.09]"
          : "border-ink-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]",
        className,
      )}
    >
      <div className="max-w-2xl">
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-full border px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.16em]",
            dark
              ? "border-white/25 bg-white/10 text-ocean-100"
              : "border-brand-200 bg-brand-50 text-brand-700",
          )}
        >
          {eyebrow ?? t.eyebrow}
        </span>
        <h2
          className={cn(
            "mt-6 text-balance text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-4xl",
            dark ? "text-white" : "text-slate-900",
          )}
        >
          {title ?? t.title}
        </h2>
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/80" : "text-ink-600",
          )}
        >
          {description ?? t.description}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative mt-10 space-y-6"
      >
        {/* Row 1 */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div id={id("name-field")} className="space-y-2.5">
            <label htmlFor={id("name")} className={labelClass}>
              {t.nameLabel}
            </label>
            <input
              id={id("name")}
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy("name")}
              placeholder={t.namePlaceholder}
              className={control("name")}
              value={values.name}
              onChange={(event) => setValue("name", event.target.value)}
            />
            {errors.name ? (
              <p id={id("name-error")} className={errorTextClass}>
                {errors.name}
              </p>
            ) : null}
          </div>

          <div id={id("business-field")} className="space-y-2.5">
            <label htmlFor={id("business")} className={labelClass}>
              {t.businessLabel}
            </label>
            <input
              id={id("business")}
              name="business"
              type="text"
              autoComplete="organization"
              required
              aria-invalid={Boolean(errors.business)}
              aria-describedby={describedBy("business")}
              placeholder={t.businessPlaceholder}
              className={control("business")}
              value={values.business}
              onChange={(event) => setValue("business", event.target.value)}
            />
            {errors.business ? (
              <p id={id("business-error")} className={errorTextClass}>
                {errors.business}
              </p>
            ) : null}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div id={id("email-field")} className="space-y-2.5">
            <label htmlFor={id("email")} className={labelClass}>
              {t.emailLabel}
            </label>
            <input
              id={id("email")}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy("email")}
              placeholder={t.emailPlaceholder}
              className={control("email")}
              value={values.email}
              onChange={(event) => setValue("email", event.target.value)}
            />
            {errors.email ? (
              <p id={id("email-error")} className={errorTextClass}>
                {errors.email}
              </p>
            ) : null}
          </div>

          <div id={id("phone-field")} className="space-y-2.5">
            <label htmlFor={id("phone")} className={labelClass}>
              {t.phoneLabel}
            </label>
            <input
              id={id("phone")}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy("phone")}
              placeholder={t.phonePlaceholder}
              className={control("phone")}
              value={values.phone}
              onChange={(event) => setValue("phone", event.target.value)}
            />
            {errors.phone ? (
              <p id={id("phone-error")} className={errorTextClass}>
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div id={id("country-field")} className="space-y-2.5">
            <label htmlFor={id("country")} className={labelClass}>
              {t.countryLabel}
            </label>
            {/* Native select: best mobile picker for a 200-entry list, full
                keyboard type-ahead on desktop, and no extra dependency. */}
            {/* `appearance-none` removes the native arrow, so one has to be
                drawn back in or the control reads as a plain text field. */}
            <div className="relative">
              <select
                id={id("country")}
                name="country"
                autoComplete="country"
                required
                aria-invalid={Boolean(errors.country)}
                aria-describedby={describedBy("country")}
                className={cn(
                  control("country"),
                  "cursor-pointer appearance-none pr-11",
                  !values.country && placeholderTone,
                )}
                value={values.country}
                onChange={(event) => setValue("country", event.target.value)}
              >
                <option value="">{t.countryPlaceholder}</option>
                <optgroup label={t.countryPriorityGroup}>
                  {countries.priority.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label={t.countryAllGroup}>
                  {countries.rest.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.name}
                    </option>
                  ))}
                </optgroup>
              </select>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2",
                  dark ? "text-white/70" : "text-ink-600",
                )}
              />
            </div>
            {errors.country ? (
              <p id={id("country-error")} className={errorTextClass}>
                {errors.country}
              </p>
            ) : null}
          </div>

          <div id={id("website-field")} className="space-y-2.5">
            <label htmlFor={id("website")} className={labelClass}>
              {t.websiteLabel}
              <span className={optionalClass}>{t.websiteOptional}</span>
            </label>
            <input
              id={id("website")}
              name="website"
              type="url"
              inputMode="url"
              autoComplete="url"
              aria-invalid={Boolean(errors.website)}
              aria-describedby={describedBy("website")}
              placeholder={t.websitePlaceholder}
              className={control("website")}
              value={values.website}
              onChange={(event) => setValue("website", event.target.value)}
            />
            {errors.website ? (
              <p id={id("website-error")} className={errorTextClass}>
                {errors.website}
              </p>
            ) : null}
          </div>
        </div>

        {/* Row 4 — business outcomes, never product or platform names */}
        <div id={id("goal-field")} className="space-y-2.5">
          <label htmlFor={id("goal")} className={labelClass}>
            {t.goalLabel}
          </label>
          <div className="relative">
            <select
              id={id("goal")}
              name="goal"
              required
              aria-invalid={Boolean(errors.goal)}
              aria-describedby={describedBy("goal")}
              className={cn(
                control("goal"),
                "cursor-pointer appearance-none pr-11",
                !values.goal && placeholderTone,
              )}
              value={values.goal}
              onChange={(event) =>
                setValue("goal", event.target.value as Values["goal"])
              }
            >
              <option value="">{t.goalPlaceholder}</option>
              {LEAD_GOALS.map((goal) => (
                <option key={goal} value={goal}>
                  {t.goals[goal]}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2",
                dark ? "text-white/70" : "text-ink-600",
              )}
            />
          </div>
          {errors.goal ? (
            <p id={id("goal-error")} className={errorTextClass}>
              {errors.goal}
            </p>
          ) : null}
        </div>

        {/* Row 5 */}
        <div className="space-y-2.5">
          <label htmlFor={id("message")} className={labelClass}>
            {t.messageLabel}
            <span className={optionalClass}>{t.messageOptional}</span>
          </label>
          <textarea
            id={id("message")}
            name="message"
            rows={3}
            placeholder={t.messagePlaceholder}
            className={cn(
              controlClass,
              "min-h-[120px] resize-y leading-relaxed",
            )}
            value={values.message}
            onChange={(event) => setValue("message", event.target.value)}
          />
        </div>

        {/* Honeypot — off-screen rather than display:none, which some bots skip */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-hidden opacity-0"
        >
          <label htmlFor={id("fax")}>Company fax</label>
          <input
            id={id("fax")}
            name="company_fax"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.companyFax}
            onChange={(event) => setValue("companyFax", event.target.value)}
          />
        </div>

        {/* Offer — a benefit, not a coupon */}
        <div
          className={cn(
            "rounded-2xl border p-6 sm:p-7",
            dark
              ? "border-ocean-300/40 bg-gradient-to-br from-brand-500/20 to-ocean-500/15"
              : "border-brand-200 bg-gradient-to-br from-brand-50 to-ocean-50/70 shadow-sm",
          )}
        >
          <div className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                dark
                  ? "bg-white/15 text-ocean-100"
                  : "bg-white text-brand-600 shadow-sm",
              )}
            >
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.18em]",
                  dark ? "text-ocean-100" : "text-brand-700",
                )}
              >
                {t.offerLabel}
              </p>
              <p
                className={cn(
                  "mt-2.5 text-lg font-bold leading-snug sm:text-xl",
                  dark ? "text-white" : "text-slate-900",
                )}
              >
                {t.offerTitle}
              </p>
              <p
                className={cn(
                  "mt-2.5 text-sm leading-relaxed sm:text-base",
                  dark ? "text-white/75" : "text-ink-600",
                )}
              >
                {t.offerBody}
              </p>
            </div>
          </div>
        </div>

        {status === "error" ? (
          <div
            role="alert"
            className={cn(
              "flex items-start gap-3 rounded-2xl border p-5 text-sm sm:text-base",
              dark
                ? "border-red-400/50 bg-red-500/15 text-red-100"
                : "border-red-300 bg-red-50 text-red-800",
            )}
          >
            <AlertCircle
              className="mt-0.5 h-5 w-5 shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold">{t.failureTitle}</p>
              <p className="mt-1 leading-relaxed opacity-90">{t.failureBody}</p>
            </div>
          </div>
        ) : null}

        {Object.keys(errors).length > 0 ? (
          <p role="alert" className={errorTextClass}>
            {t.errors.summary}
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="h-auto w-full whitespace-normal rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-5 text-center text-base font-bold leading-snug text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:translate-y-0 disabled:opacity-80 disabled:hover:translate-y-0 sm:text-lg"
        >
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              {t.submitting}
            </>
          ) : status === "error" ? (
            t.retry
          ) : (
            <>
              {/* Full label wherever it fits; the short one only on narrow phones. */}
              <span className="hidden min-[420px]:inline">{t.submit}</span>
              <span className="min-[420px]:hidden">{t.submitShort}</span>
            </>
          )}
        </Button>

        <p
          className={cn(
            "border-t pt-5 text-xs leading-relaxed",
            dark
              ? "border-white/10 text-white/65"
              : "border-ink-100 text-ink-500",
          )}
        >
          {t.offerTerms}
        </p>
      </form>
    </div>
  );
}
