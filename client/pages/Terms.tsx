import { usePageMetadata } from "@/hooks/usePageMetadata";

const lastUpdated = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function Terms() {
  usePageMetadata(
    "Terms of Service | DigitalFace Marketing",
    "Review the terms and conditions for using DigitalFace Marketing services."
  );

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            Terms of Service
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm font-semibold text-brand-600">
            Last updated: {lastUpdated}
          </p>
          <p className="mt-4 text-lg text-ink-500">
            These Terms of Service govern your use of the DigitalFace Marketing
            website and services. By using our site or engaging our services,
            you agree to these terms.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-sm text-ink-500">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                1. Services
              </h2>
              <p>
                DigitalFace Marketing provides digital services including CRM
                setup and integrations, automation workflows, chatbots and
                messaging systems, paid advertising management, SEO and content
                services, and website, funnel, and landing page development.
                Service scope, timelines, and deliverables are defined in a
                proposal, statement of work, or similar agreement.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                2. Client responsibilities
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Provide accurate information, timely approvals, and required
                  access to accounts, platforms, and assets.
                </li>
                <li>
                  Ensure you have rights to any content, data, or materials you
                  provide to us.
                </li>
                <li>
                  Maintain compliance with applicable laws, platform policies,
                  and marketing regulations.
                </li>
                <li>
                  Maintain backups and administrative access to your systems.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                3. Acceptable use
              </h2>
              <p>
                You agree not to use our website or services for unlawful
                activities, to violate third party rights, or to transmit
                malicious code, spam, or deceptive content. We may suspend or
                terminate services if we believe your use violates these terms
                or applicable laws.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                4. Fees, billing, and refunds
              </h2>
              <p>
                Fees, billing schedules, and payment terms are defined in your
                proposal or agreement. Unless otherwise stated, fees are due
                upon receipt of invoice. Refunds are not guaranteed and are
                handled on a case-by-case basis based on the work completed and
                the terms of the engagement.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                5. Third party platforms
              </h2>
              <p>
                Our services often rely on third party platforms such as CRM,
                marketing, analytics, advertising, automation, and messaging
                tools. Your use of those platforms is governed by their own
                terms and policies, and we are not responsible for their
                performance or availability.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                6. Intellectual property
              </h2>
              <p>
                You retain ownership of your pre-existing content, trademarks,
                and data. We retain ownership of our pre-existing materials,
                templates, methods, and know-how. Upon full payment, you
                receive a license to use the deliverables created specifically
                for your project, except where third party licenses apply.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                7. Confidentiality
              </h2>
              <p>
                We will treat non-public business information shared in the
                course of a project as confidential and use it only to deliver
                services. You agree to treat our non-public information the
                same way.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                8. Results and disclaimers
              </h2>
              <p>
                Marketing results can vary based on many factors, including
                budgets, market conditions, platform changes, and your internal
                processes. We do not guarantee specific outcomes or results.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                9. Disclaimer of warranties
              </h2>
              <p>
                Our website and services are provided on an "as is" and "as
                available" basis. To the maximum extent permitted by law, we
                disclaim all warranties, express or implied, including implied
                warranties of merchantability and fitness for a particular
                purpose.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                10. Limitation of liability
              </h2>
              <p>
                To the maximum extent permitted by law, DigitalFace Marketing
                will not be liable for any indirect, incidental, special, or
                consequential damages. Our total liability for any claim
                arising out of or relating to the services will not exceed the
                fees paid for the services giving rise to the claim during the
                three months before the event.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                11. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold us harmless from claims,
                damages, or expenses arising from your use of the services,
                your content, or your violation of these terms.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                12. Termination
              </h2>
              <p>
                Either party may terminate services as outlined in the project
                agreement or with reasonable notice if no agreement is in
                place. Upon termination, you remain responsible for fees
                incurred through the termination date.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                13. Governing law
              </h2>
              <p>
                These terms are governed by the laws of the State of Florida,
                United States, and the Republic of Colombia, as applicable. If
                you are a business established in the United States, Florida
                law applies. If you are established in Colombia, Colombian law
                applies. Any disputes will be brought in the courts with
                appropriate jurisdiction in those locations, unless your
                agreement specifies otherwise.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                14. Updates to these terms
              </h2>
              <p>
                We may update these Terms of Service from time to time. Updates
                will be posted on this page with a revised effective date.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                15. Contact us
              </h2>
              <p>
                For questions about these terms, contact us at
                sales@digitalfacemarketing.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
