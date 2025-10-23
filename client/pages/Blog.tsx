import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Calendar, PenSquare, Tags, Zap } from "lucide-react";

const categories = [
  {
    icon: Zap,
    title: "Marketing Automation Tips",
    description:
      "Practical guides on chatbots, workflows, CRM integrations, and ManyChat tricks to keep your marketing running around the clock.",
  },
  {
    icon: Tags,
    title: "Advertising Strategies",
    description:
      "We share creative angles, data-backed experiments, and platform updates across Meta, TikTok, Google, LinkedIn, and beyond.",
  },
  {
    icon: PenSquare,
    title: "Web Design & CRO",
    description:
      "From conversion best practices to UX trends, we unpack what makes websites win—and how to iterate with testing.",
  },
];

const posts = [
  {
    date: "October 10, 2025",
    title: "How to Increase E-commerce Sales by 30% with Chatbots",
    summary:
      "See the exact ManyChat flow we used to recover abandoned carts, recommend products, and turn browsers into buyers.",
    tags: ["Automation", "E-commerce"],
  },
  {
    date: "September 28, 2025",
    title: "Facebook vs. TikTok Ads: Where to Spend Your Budget in 2025",
    summary:
      "We compare audiences, costs, and creative considerations to help you invest your ad dollars wisely this year.",
    tags: ["Paid Media", "Strategy"],
  },
  {
    date: "September 15, 2025",
    title: "5 Website Design Trends to Implement Now",
    summary:
      "AI personalization, scroll storytelling, and accessibility-first design—here’s how to apply them without fluff.",
    tags: ["Web Design", "CRO"],
  },
  {
    date: "August 30, 2025",
    title: "$5k Ad Spend, $25k Revenue: Anatomy of a Winning Campaign",
    summary:
      "Get a behind-the-scenes look at the data, creative iterations, and automation tie-ins that fueled a 5× ROAS launch.",
    tags: ["Paid Media", "Automation"],
  },
];

export default function Blog() {
  usePageMetadata(
    "Digital Marketing Insights & Resources – The DigitalFace Blog",
    "Read automation, advertising, and web design tips from DigitalFace Marketing. Tutorials, case studies, and trend reports to sharpen your strategy."
  );

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Insights to ignite your marketing
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            The DigitalFace blog: practical strategies for automation-first growth.
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            We publish guides, tutorials, data-backed experiments, and behind-the-scenes stories to help marketers,
            founders, and operators move faster with confidence.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full bg-indigo-600 px-6 py-5 text-sm font-semibold text-white hover:bg-indigo-700">
              Subscribe for updates
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 border-slate-200 px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Suggest a topic
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.title} className="border-slate-200 bg-white">
                <CardContent className="space-y-3 p-6">
                  <category.icon className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-base font-semibold text-slate-900">{category.title}</h3>
                  <p className="text-sm text-slate-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Latest from the blog
          </span>
          <h2 className="text-3xl font-semibold text-slate-900">Fresh drops from our strategy and creative teams.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.title} className="border-slate-200 bg-white transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10">
              <CardContent className="space-y-4 p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-slate-500">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
                <p className="text-sm text-slate-600">{post.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-indigo-600">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700" href="#">
                  Read article
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <Card className="border-indigo-100 bg-indigo-50/80">
            <CardContent className="flex flex-col gap-6 p-10 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                  Stay in the loop
                </span>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Join 3,000+ marketers receiving automation, ads, and web insights monthly.
                </h2>
                <p className="text-sm text-slate-600">
                  No fluff, just actionable breakdowns, swipe files, and growth experiments straight to your inbox.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  className="h-12 w-full rounded-full border border-slate-200 px-4 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 sm:w-72"
                  placeholder="Your email address"
                />
                <Button className="h-12 rounded-full bg-indigo-600 px-6 text-sm font-semibold text-white hover:bg-indigo-700">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

