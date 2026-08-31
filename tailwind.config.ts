import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        ocean: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        sunset: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        ink: {
          50: "#f8fafc",
          100: "#eef2f6",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        journey: {
          "0%": {
            top: "-8%",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            top: "108%",
            opacity: "0",
          },
        },
        shimmer: {
          "0%": {
            opacity: "0.35",
          },
          "50%": {
            opacity: "0.9",
          },
          "100%": {
            opacity: "0.35",
          },
        },
        "typing-dot": {
          "0%, 60%, 100%": {
            transform: "translateY(0)",
            opacity: "0.35",
          },
          "30%": {
            transform: "translateY(-3px)",
            opacity: "1",
          },
        },
        /* About hero atmosphere. Every clock here is deliberately slow: the
           band has to read as a dark hero first and a moving one second. */
        "hero-drift": {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) scale(1)",
          },
          "50%": {
            transform: "translate3d(26px, -20px, 0) scale(1.06)",
          },
        },
        "hero-pulse": {
          "0%, 100%": {
            opacity: "0.12",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        /* Matches `stroke-dasharray: 10 2200` — one period, so a single dash
           travels the whole path per cycle. */
        "hero-trace": {
          "0%": {
            strokeDashoffset: "2210",
          },
          "100%": {
            strokeDashoffset: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        journey: "journey 7s linear infinite",
        "journey-slow": "journey 11s linear infinite",
        shimmer: "shimmer 4s ease-in-out infinite",
        "typing-dot": "typing-dot 1.2s ease-in-out infinite",
        "hero-drift": "hero-drift 22s ease-in-out infinite",
        "hero-pulse": "hero-pulse 6s ease-in-out infinite",
        "hero-trace": "hero-trace 28s linear infinite",
      },
      backgroundImage: {
        "glow-radial":
          "radial-gradient(circle at top, rgba(124,58,237,0.18), rgba(14,165,233,0))",
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, rgba(124,58,237,0.12), rgba(239,68,68,0.08), rgba(14,165,233,0.12))",
      },
      boxShadow: {
        "brand-soft": "0 25px 70px -30px rgba(124,58,237,0.45)",
        "brand-card": "0 25px 55px -35px rgba(15,23,42,0.35)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
