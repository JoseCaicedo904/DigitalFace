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
import { AlertCircle, CheckCircle2, Loader2, Sparkles } from "lucide-react";
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

  const labelClass = cn(
    "block text-xs font-semibold uppercase tracking-[0.14em]",
    dark ? "text-white/60" : "text-ink-400",
  );
  const optionalClass = cn(
    "ml-2 text-[10px] font-medium normal-case tracking-normal",
    dark ? "text-white/35" : "text-ink-300",
  );
  const controlClass = cn(
    "w-full rounded-xl border px-4 py-3 text-sm transition outline-none",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    dark
      ? "border-white/15 bg-white/[0.06] text-white placeholder:text-white/35 focus-visible:border-ocean-300/60 focus-visible:ring-ocean-400/40 focus-visible:ring-offset-slate-950"
      : "border-ink-200 bg-white text-slate-900 placeholder:text-ink-300 focus-visible:border-brand-300 focus-visible:ring-brand-200 focus-visible:ring-offset-white",
  );
  const invalidClass = dark
    ? "border-red-400/70 focus-visible:ring-red-400/40"
    : "border-red-400 focus-visible:ring-red-200";
  const errorTextClass = cn(
    "text-xs font-medium",
    dark ? "text-red-300" : "text-red-600",
  );

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
            ? "border-white/15 bg-white/[0.06]"
            : "border-ink-100 bg-white shadow-brand-card",
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
              "mt-6 text-xs font-semibold uppercase tracking-[0.24em]",
              dark ? "text-ocean-200" : "text-brand-600",
            )}
          >
            {t.successLabel}
          </p>
          <h3
            className={cn(
              "mt-4 text-2xl font-semibold tracking-tight sm:text-3xl",
              dark ? "text-white" : "text-slate-900",
            )}
          >
            {t.successTitle.replace("{name}", submittedName)}
          </h3>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed",
              dark ? "text-white/70" : "text-ink-500",
            )}
          >
            {t.successBody}
          </p>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed",
              dark ? "text-white/55" : "text-ink-500",
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
        "rounded-3xl border p-6 sm:p-8 lg:p-10",
        dark
          ? "border-white/15 bg-white/[0.06]"
          : "border-ink-100 bg-white shadow-brand-card",
        className,
      )}
    >
      <div className="max-w-2xl">
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em]",
            dark
              ? "border-white/20 bg-white/5 text-ocean-200"
              : "border-brand-100 bg-brand-50 text-brand-600",
          )}
        >
          {eyebrow ?? t.eyebrow}
        </span>
        <h2
          className={cn(
            "mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl",
            dark ? "text-white" : "text-slate-900",
          )}
        >
          {title ?? t.title}
        </h2>
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed sm:text-base",
            dark ? "text-white/65" : "text-ink-500",
          )}
        >
          {description ?? t.description}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative mt-8 space-y-5"
      >
        {/* Row 1 */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div id={id("name-field")} className="space-y-2">
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

          <div id={id("business-field")} className="space-y-2">
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
        <div className="grid gap-5 sm:grid-cols-2">
          <div id={id("email-field")} className="space-y-2">
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

          <div id={id("phone-field")} className="space-y-2">
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
        <div className="grid gap-5 sm:grid-cols-2">
          <div id={id("country-field")} className="space-y-2">
            <label htmlFor={id("country")} className={labelClass}>
              {t.countryLabel}
            </label>
            {/* Native select: best mobile picker for a 200-entry list, full
                keyboard type-ahead on desktop, and no extra dependency. */}
            <select
              id={id("country")}
              name="country"
              autoComplete="country"
              required
              aria-invalid={Boolean(errors.country)}
              aria-describedby={describedBy("country")}
              className={cn(control("country"), "appearance-none pr-10")}
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
            {errors.country ? (
              <p id={id("country-error")} className={errorTextClass}>
                {errors.country}
              </p>
            ) : null}
          </div>

          <div id={id("website-field")} className="space-y-2">
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
        <div id={id("goal-field")} className="space-y-2">
          <label htmlFor={id("goal")} className={labelClass}>
            {t.goalLabel}
          </label>
          <select
            id={id("goal")}
            name="goal"
            required
            aria-invalid={Boolean(errors.goal)}
            aria-describedby={describedBy("goal")}
            className={cn(control("goal"), "appearance-none pr-10")}
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
          {errors.goal ? (
            <p id={id("goal-error")} className={errorTextClass}>
              {errors.goal}
            </p>
          ) : null}
        </div>

        {/* Row 5 */}
        <div className="space-y-2">
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
              "min-h-[96px] resize-y leading-relaxed",
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
            "rounded-2xl border p-5 sm:p-6",
            dark
              ? "border-ocean-300/25 bg-gradient-to-br from-brand-500/15 to-ocean-500/10"
              : "border-brand-100 bg-gradient-to-br from-brand-50 to-ocean-50/60",
          )}
        >
          <div className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
                dark ? "bg-white/10 text-ocean-200" : "bg-white text-brand-600",
              )}
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.2em]",
                  dark ? "text-ocean-200" : "text-brand-600",
                )}
              >
                {t.offerLabel}
              </p>
              <p
                className={cn(
                  "mt-2 text-base font-semibold leading-snug sm:text-lg",
                  dark ? "text-white" : "text-slate-900",
                )}
              >
                {t.offerTitle}
              </p>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  dark ? "text-white/60" : "text-ink-500",
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
              "flex items-start gap-3 rounded-2xl border p-4 text-sm",
              dark
                ? "border-red-400/30 bg-red-500/10 text-red-100"
                : "border-red-200 bg-red-50 text-red-700",
            )}
          >
            <AlertCircle
              className="mt-0.5 h-4 w-4 shrink-0"
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
          className="h-auto w-full whitespace-normal rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-4 text-center text-sm font-semibold leading-snug text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:translate-y-0 disabled:opacity-70 sm:text-base"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
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
            "text-[11px] leading-relaxed",
            dark ? "text-white/40" : "text-ink-400",
          )}
        >
          {t.offerTerms}
        </p>
      </form>
    </div>
  );
}
