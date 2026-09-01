/**
 * The id of the selected-services block inside the contact form.
 *
 * It lives in its own module because both the review panel (which links to it)
 * and the form field (which owns it) need it, and importing one from the other
 * would drag the whole panel into every page that renders the form.
 */
export const REQUEST_SERVICES_ANCHOR = "request-services";
