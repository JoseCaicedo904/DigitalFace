import type { ComponentType, SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement>;

/**
 * Platform marks live outside the translated content so both locales stay
 * visually identical and a translation can never drift away from its logo.
 * Each array is ordered to match the outcome order of that service in every
 * locale's content file.
 */

function MetaMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M12 12C10.2 8.9 8.5 7.2 6.6 7.2 4.1 7.2 2.5 9.4 2.5 12s1.6 4.8 4.1 4.8c1.9 0 3.6-1.7 5.4-4.8c1.8-3.1 3.5-4.8 5.4-4.8 2.5 0 4.1 2.2 4.1 4.8s-1.6 4.8-4.1 4.8c-1.9 0-3.6-1.7-5.4-4.8z"
        fill="none"
        stroke="#0081FB"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TikTokMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <g
        fill="none"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#25F4EE" transform="translate(-1.4 -0.6)">
          <circle cx="9.6" cy="15.2" r="3.6" />
          <path d="M13.2 15.2V4.4" />
          <path d="M13.2 4.4c0.5 2.6 2.4 4.4 5 4.7" />
        </g>
        <g stroke="#FE2C55" transform="translate(1.4 0.6)">
          <circle cx="9.6" cy="15.2" r="3.6" />
          <path d="M13.2 15.2V4.4" />
          <path d="M13.2 4.4c0.5 2.6 2.4 4.4 5 4.7" />
        </g>
        <g stroke="#0F172A">
          <circle cx="9.6" cy="15.2" r="3.6" />
          <path d="M13.2 15.2V4.4" />
          <path d="M13.2 4.4c0.5 2.6 2.4 4.4 5 4.7" />
        </g>
      </g>
    </svg>
  );
}

function GoogleAdsMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <rect
        x="9.25"
        y="3"
        width="5.5"
        height="14"
        rx="2.75"
        fill="#FBBC04"
        transform="rotate(-22 12 4)"
      />
      <rect
        x="9.25"
        y="3"
        width="5.5"
        height="14"
        rx="2.75"
        fill="#4285F4"
        transform="rotate(22 12 4)"
      />
      <circle cx="7.4" cy="16.3" r="2.75" fill="#34A853" />
    </svg>
  );
}

function GoogleAnalyticsMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <rect x="14" y="2.8" width="6" height="18.4" rx="3" fill="#F9AB00" />
      <rect x="4" y="10.2" width="6" height="11" rx="3" fill="#E37400" />
    </svg>
  );
}

export const payPerServiceOutcomeIcons: Record<
  string,
  ComponentType<MarkProps>[]
> = {
  "conversion-tracking": [
    MetaMark,
    TikTokMark,
    GoogleAdsMark,
    GoogleAnalyticsMark,
  ],
};
