import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";

export default function Contact() {
  usePageMetadata(
    "Contact Us – Start Your Marketing Transformation | DigitalFace",
    "Get in touch with DigitalFace Marketing. Book a free consultation for automation, social media ads, and web design services."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Let’s collaborate
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Ready to elevate your marketing? Let’s talk about what’s next.
            </h1>
            <p className="max-w-3xl text-lg text-slate-600">
              Book a free consultation and we’ll dive into your goals, tech stack, and quick wins. Whether you need
              automation, ads, web, or all three, we’ll craft a roadmap tailored to your growth ambitions.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-slate-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                  </div>
                  <a
                    href="mailto:hello@digitalfacemarketing.com"
                    className="text-sm text-indigo-600 hover:text-indigo-700"
                  >
                    hello@digitalfacemarketing.com
                  </a>
                  <p className="text-xs text-slate-500">
                    Prefer async? Drop an email with your goals and we’ll respond within one business day.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm font-semibold text-slate-900">WhatsApp</p>
                  </div>
                  <a
                    href="https://wa.me/573001112233"
                    className="text-sm text-indigo-600 hover:text-indigo-700"
                  >
                    +57 300 111 2233
                  </a>
                  <p className="text-xs text-slate-500">
                    Quick questions? Message us in English or Spanish—we reply Monday to Friday, 9am–6pm EST.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm font-semibold text-slate-900">Call us</p>
                  </div>
                  <p className="text-sm text-slate-600">USA: +1 (305) 555-0134</p>
                  <p className="text-sm text-slate-600">COL: +57 (2) 555 4411</p>
                  <p className="text-xs text-slate-500">
                    Leave a voicemail after hours—we’ll return it within one business day.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="space-y-2 p-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                    <p className="text-sm font-semibold text-slate-900">Offices</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    Miami, Florida · Remote-first across the East Coast
                    <br />
                    Cali, Colombia · Zona Rosa innovation hub
                  </p>
                  <p className="text-xs text-slate-500">
                    Visits by appointment—let’s grab coffee if you’re nearby.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card className="border-indigo-100 bg-indigo-50/80">
            <CardContent className="space-y-4 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                What happens next?
              </p>
              <ol className="space-y-3 text-sm text-slate-700">
                <li>1. We review your goals and current marketing presence.</li>
                <li>2. You’ll receive a response within 24 hours (business days).</li>
                <li>3. We’ll schedule a 30-minute strategy session or send a tailored proposal.</li>
              </ol>
              <p className="rounded-xl border border-indigo-100 bg-white p-4 text-xs text-slate-500">
                No pressure, no fluff—just thoughtful recommendations from a team who lives and breathes automation,
                ads, and conversion design.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <Card className="border-slate-200 bg-white shadow-lg">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[minmax(0,1fr)_360px]">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Name
                    </label>
                    <Input placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Company
                    </label>
                    <Input placeholder="Business or brand" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Email
                    </label>
                    <Input type="email" placeholder="name@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Phone / WhatsApp
                    </label>
                    <Input placeholder="+1 555 123 4567" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    How can we help?
                  </label>
                  <Textarea
                    rows={4}
                    placeholder="Tell us about your goals, timelines, and the services you're interested in."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Approximate budget (optional)
                  </label>
                  <Input placeholder="Select a range or share what feels right" />
                </div>
                <Button className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700">
                  Send message
                </Button>
                <p className="text-xs text-slate-500">
                  Prefer to email us directly? Reach out at{" "}
                  <a href="mailto:hello@digitalfacemarketing.com" className="text-indigo-600 hover:text-indigo-700">
                    hello@digitalfacemarketing.com
                  </a>
                  .
                </p>
              </form>
              <div className="space-y-4 rounded-2xl border border-indigo-100 bg-indigo-50/80 p-6 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                  <p className="text-sm font-semibold text-slate-900">What clients love</p>
                </div>
                <ul className="space-y-3">
                  <li>• Weekly updates and transparent dashboards.</li>
                  <li>• Bilingual support (English & Spanish).</li>
                  <li>• Boutique partnership with enterprise-level execution.</li>
                </ul>
                <p className="text-xs text-slate-500">
                  We respect your privacy and will never share your information. See our privacy policy for details.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

