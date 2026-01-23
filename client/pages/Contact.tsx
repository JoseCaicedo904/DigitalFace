import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Clock3, Mail, MapPin, Sparkles } from "lucide-react";

export default function Contact() {
  usePageMetadata(
    "Contact DigitalFace Marketing",
    "Talk with DigitalFace Marketing about the Sales System and automated lead follow-up.",
  );

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            Contact
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            See the system in action.
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            Send a quick message or book a demo. We reply within one business
            day.
          </p>
          <p className="mt-2 text-sm font-semibold text-brand-600">
            Let's Talk
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-brand-500" />
                    <p className="text-sm font-semibold text-slate-900">
                      Email
                    </p>
                  </div>
                  <a
                    href="mailto:sales@digitalfacemarketing.com"
                    className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    sales@digitalfacemarketing.com
                  </a>
                  <p className="text-xs text-ink-400">
                    Share your business type, lead volume, and what you want
                    automated.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-brand-500" />
                    <p className="text-sm font-semibold text-slate-900">
                      Response time
                    </p>
                  </div>
                  <p className="text-sm text-ink-500">
                    Replies within one business day.
                  </p>
                  <ol className="space-y-2 text-xs text-ink-400">
                    <li>1. We review your lead flow.</li>
                    <li>2. We demo the system for your business.</li>
                    <li>3. You receive a plan and timeline.</li>
                  </ol>
                </CardContent>
              </Card>
              <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-500" />
                    <p className="text-sm font-semibold text-slate-900">
                      Where we work
                    </p>
                  </div>
                  <p className="text-sm text-ink-500">
                    Miami, Florida + Cali, Colombia.
                  </p>
                  <p className="text-xs text-ink-400">
                    Overlapping time zones keep communication smooth for North
                    and South America.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-brand-500" />
                    <p className="text-sm font-semibold text-slate-900">
                      What to include
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs text-ink-400">
                    <li>Business type and services offered.</li>
                    <li>Current lead sources and volume.</li>
                    <li>How you handle follow-up today.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-ink-100 bg-white/95 shadow-brand-card">
              <CardContent className="space-y-4 p-8">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                        Name
                      </label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                        Company
                      </label>
                      <Input placeholder="Business or brand" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      Email
                    </label>
                    <Input type="email" placeholder="name@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      Message
                    </label>
                    <Textarea
                      rows={4}
                      placeholder="Tell us about your business, lead flow, and what you want automated."
                    />
                  </div>
                  <Button className="w-full rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-4 text-sm font-semibold text-white shadow-brand-soft">
                    Send request
                  </Button>
                </form>
                <div className="space-y-3 rounded-2xl border border-dashed border-ink-200 bg-secondary/30 p-6 text-center text-sm font-semibold uppercase tracking-wide text-ink-400">
                  [CALENDAR_INTEGRATION_PLACEHOLDER]
                  <p className="text-xs font-normal normal-case text-ink-500">
                    Embed a booking calendar here to let visitors schedule
                    directly.
                  </p>
                </div>
                <div className="space-y-3 rounded-2xl border border-ink-100 bg-white/70 p-6 text-sm text-ink-500">
                  <div className="flex items-center gap-3 text-ink-600">
                    <Sparkles className="h-5 w-5 text-brand-500" />
                    <p className="font-semibold">What happens next</p>
                  </div>
                  <p>
                    We review your note, map the automation flow, and bring a
                    clear plan to your demo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
