import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Mail, MessageCircle, Phone, MapPin, Sparkles } from "lucide-react";

export default function Contact() {
  usePageMetadata(
    "Contact DigitalFace Marketing | Book your strategy session",
    "Talk with DigitalFace Marketing about automation, paid media, and conversion-first web projects. Book a free consultation today."
  );

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            Let us collaborate
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl md:text-5xl">
            Ready to elevate your marketing? Let's talk about what is next.
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            Share your goals and we will prepare quick-win ideas before the call. Expect a response within one business day from our Cali or Miami team.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
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
                      href="mailto:hello@digitalfacemarketing.com"
                      className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      hello@digitalfacemarketing.com
                    </a>
                    <p className="text-xs text-ink-400">
                      Prefer async? Drop context and we will reply within one business day.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                  <CardContent className="space-y-3 p-6">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-brand-500" />
                      <p className="text-sm font-semibold text-slate-900">
                        WhatsApp
                      </p>
                    </div>
                    <a
                      href="https://wa.me/573001112233"
                      className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      +57 300 111 2233
                    </a>
                    <p className="text-xs text-ink-400">
                      English or Spanish. Monday to Friday, 9am - 6pm EST.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                  <CardContent className="space-y-3 p-6">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-brand-500" />
                      <p className="text-sm font-semibold text-slate-900">
                        Call us
                      </p>
                    </div>
                    <p className="text-sm text-ink-500">USA: +1 (305) 555-0134</p>
                    <p className="text-sm text-ink-500">COL: +57 (2) 555 4411</p>
                    <p className="text-xs text-ink-400">
                      Leave a voicemail after hours and we will call back within one business day.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                  <CardContent className="space-y-3 p-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-brand-500" />
                      <p className="text-sm font-semibold text-slate-900">
                        Offices
                      </p>
                    </div>
                    <p className="text-xs text-ink-400">
                      Miami, Florida - Remote across the East Coast
                      <br />
                      Cali, Colombia - Zona Rosa innovation hub
                    </p>
                    <p className="text-xs text-ink-400">
                      Visits by appointment. Let's grab coffee if you are nearby.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-ink-100 bg-white/95 shadow-brand-card">
                <CardContent className="space-y-4 p-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                    What happens next
                  </p>
                  <ol className="space-y-3 text-sm text-ink-500">
                    <li>1. We review your goals, current stack, and timeline.</li>
                    <li>2. You receive a response within 24 hours (business days).</li>
                    <li>3. We schedule a 30-minute strategy session or send a tailored proposal.</li>
                  </ol>
                  <p className="rounded-xl border border-ink-100 bg-white p-4 text-xs text-ink-400">
                    No pressure, no fluff - only thoughtful recommendations from a team obsessed with automation, ads, and conversion design.
                  </p>
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
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                        Email
                      </label>
                      <Input type="email" placeholder="name@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                        Phone / WhatsApp
                      </label>
                      <Input placeholder="+1 555 123 4567" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      How can we help?
                    </label>
                    <Textarea
                      rows={4}
                      placeholder="Tell us about goals, timelines, and services of interest."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      Approximate budget (optional)
                    </label>
                    <Input placeholder="Share a range if you have one" />
                  </div>
                  <Button className="w-full rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-4 text-sm font-semibold text-white shadow-brand-soft">
                    Send message
                  </Button>
                </form>
                <div className="space-y-3 rounded-2xl border border-ink-100 bg-white/70 p-6 text-sm text-ink-500">
                  <div className="flex items-center gap-3 text-ink-600">
                    <Sparkles className="h-5 w-5 text-brand-500" />
                    <p className="font-semibold">What clients love</p>
                  </div>
                  <ul className="space-y-2 text-xs text-ink-400">
                    <li>Weekly updates and transparent dashboards.</li>
                    <li>Bilingual support (English and Spanish).</li>
                    <li>Automation-first mindset with creative execution.</li>
                  </ul>
                  <p className="text-xs text-ink-400">
                    We respect your privacy and never share your information. Review our privacy policy for details.
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
