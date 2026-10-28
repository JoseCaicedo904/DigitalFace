import { Navigate, useLocation } from "react-router-dom";

/** A short QR-friendly alias; the event has only one Spanish document. */
export function LabsSummitRedirect() {
  const { search, hash } = useLocation();
  return <Navigate to={`/es/labs-summit-2026${search}${hash}`} replace />;
}
