import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import {
  clientInitials,
  clientsByTier,
  type ClientRecord,
} from "@/data/clients";
import type { HomeContent } from "@/i18n/content/home";
import { cn } from "@/lib/utils";

type SelectedWorkContent = HomeContent["selectedWork"];

type SelectedWorkProps = {
  content: SelectedWorkContent;
  className?: string;
};

type ClientCopy = SelectedWorkContent["entries"][string];

const featuredClients = clientsByTier("featured");
const selectedClients = clientsByTier("selected");
const rosterClients = clientsByTier("roster");

/**
 * The logo, or a quiet monogram while the file is missing. Light artwork gets a
 * dark tile and dark artwork a pale one, so every logo lands with the same
 * weight regardless of how it was drawn.
 */
function ClientLogo({
  client,
  size = "md",
}: {
  client: ClientRecord;
  size?: "sm" | "md";
}) {
  const tile = cn(
    "flex shrink-0 items-center justify-center overflow-hidden rounded-2xl ring-1",
    size === "sm" ? "h-11 w-11" : "h-14 w-14 sm:h-16 sm:w-16",
  );

  if (!client.logo) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          tile,
          "bg-gradient-to-br from-brand-50 via-white to-ocean-50 font-semibold tracking-wide text-brand-500 ring-brand-100",
          size === "sm" ? "text-xs" : "text-sm",
        )}
      >
        {clientInitials(client.name)}
      </span>
    );
  }

  return (
    <span
      className={cn(
        tile,
        client.logo.tone === "light"
          ? "bg-slate-900 ring-slate-800"
          : "bg-white ring-ink-100",
      )}
    >
      <img
        src={client.logo.src}
        /* Decorative: the client name is rendered right beside it. */
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain p-1.5 sm:p-2"
      />
    </span>
  );
}

function GroupHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-400">
        {label}
      </h3>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gradient-to-r from-ink-200 via-ink-100 to-transparent"
      />
    </div>
  );
}

/**
 * One expandable client. Closed it shows logo, name and category; open it adds
 * the description and, for a featured story, the contribution line.
 */
function ClientAccordionItem({
  client,
  copy,
  featured,
  featuredBadge,
  contributionLabel,
}: {
  client: ClientRecord;
  copy: ClientCopy | undefined;
  featured: boolean;
  featuredBadge: string;
  contributionLabel: string;
}) {
  return (
    <AccordionPrimitive.Item
      value={client.id}
      className={cn(
        "overflow-hidden rounded-3xl border bg-white transition-colors duration-300",
        "border-ink-100 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.4)]",
        "hover:border-brand-200 data-[state=open]:border-brand-200 data-[state=open]:bg-gradient-to-b data-[state=open]:from-white data-[state=open]:to-brand-50/25",
      )}
    >
      {/* Radix renders an h3 by default; asChild drops it to h4 so the card
          headings sit below the group heading rather than beside it. */}
      <AccordionPrimitive.Header asChild>
        <h4 className="flex">
          <AccordionPrimitive.Trigger
            className={cn(
              "group flex w-full items-center gap-4 p-4 text-left sm:gap-5 sm:p-5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
            )}
          >
            <ClientLogo client={client} />

            <span className="min-w-0 flex-1">
              {featured ? (
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  {featuredBadge}
                </span>
              ) : null}
              <span className="block text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                {client.name}
              </span>
              {copy?.category ? (
                <span className="mt-1 block text-xs leading-relaxed text-ink-400 sm:text-[13px]">
                  {copy.category}
                </span>
              ) : null}
            </span>

            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-400 transition-colors duration-300 group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-600"
            >
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180 motion-reduce:transition-none" />
            </span>
          </AccordionPrimitive.Trigger>
        </h4>
      </AccordionPrimitive.Header>

      <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
        <div className="px-4 pb-5 sm:px-5 sm:pb-6">
          <div className="border-t border-ink-100 pt-4">
            <p className="text-sm leading-relaxed text-ink-500">
              {copy?.description}
            </p>

            {copy?.highlight ? (
              <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                  {contributionLabel}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                  {copy.highlight}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}

/**
 * A confirmed client whose public copy is not approved yet. It gets the same
 * card treatment but no chevron, because an accordion that opens onto nothing
 * reads worse than a name presented plainly. Add a description in
 * `selectedWork.entries` and move the client to the `selected` tier to turn it
 * into an expandable card.
 */
function ClientRosterCard({ client }: { client: ClientRecord }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/70 p-3 transition-colors duration-300 hover:border-brand-200 hover:bg-white">
      <ClientLogo client={client} size="sm" />
      <span className="min-w-0 text-sm font-semibold leading-snug text-slate-800">
        {client.name}
      </span>
    </li>
  );
}

export function SelectedWorkSection({ content, className }: SelectedWorkProps) {
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: prefersReducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 } as const,
    transition: { duration: 0.5, delay },
  });

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal()} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
            {content.description}
          </p>
        </motion.div>

        {/* Featured stories: two columns from md up, each card keeping its own
            height so opening one never stretches its neighbour. */}
        <motion.div {...reveal(0.05)} className="mt-14 lg:mt-16">
          <GroupHeading label={content.featuredGroupLabel} />
          <AccordionPrimitive.Root
            type="single"
            collapsible
            className="mt-5 grid items-start gap-4 md:grid-cols-2 md:gap-5"
          >
            {featuredClients.map((client) => (
              <ClientAccordionItem
                key={client.id}
                client={client}
                copy={content.entries[client.id]}
                featured
                featuredBadge={content.featuredBadge}
                contributionLabel={content.contributionLabel}
              />
            ))}
          </AccordionPrimitive.Root>
        </motion.div>

        <motion.div {...reveal(0.05)} className="mt-12 lg:mt-14">
          <GroupHeading label={content.selectedGroupLabel} />
          <AccordionPrimitive.Root
            type="single"
            collapsible
            className="mt-5 space-y-3"
          >
            {selectedClients.map((client) => (
              <ClientAccordionItem
                key={client.id}
                client={client}
                copy={content.entries[client.id]}
                featured={false}
                featuredBadge={content.featuredBadge}
                contributionLabel={content.contributionLabel}
              />
            ))}
          </AccordionPrimitive.Root>
        </motion.div>

        {rosterClients.length > 0 ? (
          <motion.div {...reveal(0.05)} className="mt-12 lg:mt-14">
            <GroupHeading label={content.rosterGroupLabel} />
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {rosterClients.map((client) => (
                <ClientRosterCard key={client.id} client={client} />
              ))}
            </ul>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
