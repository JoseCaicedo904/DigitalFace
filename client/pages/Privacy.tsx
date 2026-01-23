import { usePageMetadata } from "@/hooks/usePageMetadata";

const lastUpdated = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function Privacy() {
  usePageMetadata(
    "Privacy Policy | DigitalFace Marketing",
    "Learn how DigitalFace Marketing collects, uses, and protects personal information."
  );

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            Privacy Policy
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-semibold text-brand-600">
            Last updated: {lastUpdated}
          </p>
          <p className="mt-4 text-lg text-ink-500">
            This Privacy Policy explains how DigitalFace Marketing collects,
            uses, and shares information when you visit our website or engage
            our services. We operate remotely and serve clients in the United
            States and Colombia.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-sm text-ink-500">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                1. Information we collect
              </h2>
              <p>
                We collect information that helps us respond to inquiries,
                deliver services, and improve our website and operations.
                Categories may include:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Contact and business details such as name, email address,
                  phone number, company name, job title, and website.
                </li>
                <li>
                  Project and service details such as goals, budgets, campaign
                  preferences, and operational requirements.
                </li>
                <li>
                  Communications such as emails, form submissions, meeting
                  notes, and chat or messaging content.
                </li>
                <li>
                  Usage and device data such as IP address, browser type,
                  device identifiers, pages viewed, and referral sources.
                </li>
                <li>
                  Marketing and advertising data such as UTM parameters,
                  conversion events, and ad interaction data.
                </li>
                <li>
                  Client data processed on behalf of our customers in the
                  course of delivering services (for example, lead data or
                  CRM records). In these cases, our clients control the data.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                2. How we collect information
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Directly from you through forms, email, or calls.</li>
                <li>
                  Through scheduling tools or embedded booking experiences.
                </li>
                <li>
                  From chat and messaging platforms connected to our services.
                </li>
                <li>
                  Automatically through cookies and analytics tools on our
                  website.
                </li>
                <li>
                  From third party platforms you connect for a project, such as
                  CRM, email, advertising, or automation tools.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                3. How we use information
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Respond to inquiries and provide customer support.</li>
                <li>Plan, deliver, and manage services and projects.</li>
                <li>Process billing, payments, and contract administration.</li>
                <li>
                  Improve our website, communications, and service delivery.
                </li>
                <li>
                  Send marketing or service updates when you have opted in or
                  where permitted by law.
                </li>
                <li>Protect against fraud, abuse, and security incidents.</li>
              </ul>
              <p>
                Where required by law, including Colombia, we rely on your
                consent, our contractual obligations, legitimate interests, and
                legal requirements as the legal basis for processing.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                4. Sharing and disclosure
              </h2>
              <p>
                We do not sell personal information. We may share information
                with:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Service providers and subcontractors who help us operate and
                  deliver services (for example, hosting, analytics, payment
                  processing, CRM, automation, and messaging platforms).
                </li>
                <li>
                  Advertising and analytics platforms used to measure and
                  optimize campaigns, subject to your preferences and choices.
                </li>
                <li>
                  Professional advisors and legal authorities when required to
                  comply with law or protect our rights.
                </li>
                <li>
                  Clients and partners as needed to fulfill a project you
                  request.
                </li>
              </ul>
              <p>
                Depending on your project, integrations may include tools such
                as CRM platforms, email or SMS providers, analytics services,
                scheduling tools, and advertising platforms. We only share
                information needed to deliver the service.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                5. Cookies and tracking technologies
              </h2>
              <p>
                We use cookies and similar technologies to operate our website,
                remember preferences, analyze traffic, and measure marketing
                performance. You can control cookies through your browser
                settings and, where available, opt out of analytics or
                advertising cookies.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                6. Marketing communications
              </h2>
              <p>
                You can opt out of marketing emails at any time by using the
                unsubscribe link in our messages or contacting us. We may still
                send non-marketing communications related to your services.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                7. Data retention
              </h2>
              <p>
                We keep personal information only as long as necessary to
                provide services, meet legal obligations, resolve disputes, and
                enforce agreements. Retention periods vary by data type and
                purpose.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                8. Security
              </h2>
              <p>
                We maintain administrative, technical, and physical safeguards
                designed to protect personal information. No system can be
                guaranteed secure, so please use caution when sharing sensitive
                data.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                9. International transfers
              </h2>
              <p>
                We operate in the United States and Colombia, and may store or
                process information in either country or where our service
                providers operate. We take steps to protect information during
                cross-border transfers as required by law.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                10. Your privacy rights
              </h2>
              <p>
                You may have rights to access, correct, delete, or object to
                processing of your personal information. To exercise your
                rights, contact us at the email below.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-slate-900">
                    United States (including California)
                  </p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Request access to or deletion of personal information.
                    </li>
                    <li>Request correction of inaccurate information.</li>
                    <li>
                      Opt out of the sale or sharing of personal information.
                      We do not sell personal information.
                    </li>
                    <li>
                      Limit the use of sensitive personal information where
                      applicable.
                    </li>
                    <li>
                      Receive non-discriminatory treatment for exercising
                      privacy rights.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Colombia (Ley 1581 de 2012)
                  </p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Know, update, rectify, and delete personal data.
                    </li>
                    <li>Revoke consent or request suppression.</li>
                    <li>
                      Request proof of authorization and be informed about how
                      data is used.
                    </li>
                    <li>
                      File complaints with the Superintendence of Industry and
                      Commerce (SIC).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                11. Children
              </h2>
              <p>
                Our services are not directed to children under 13, and we do
                not knowingly collect personal information from children.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                12. Updates to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Updates
                will be posted on this page with a revised effective date.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                13. Contact us
              </h2>
              <p>
                For privacy questions or requests, contact us at
                sales@digitalfacemarketing.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
