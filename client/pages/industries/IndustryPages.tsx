import IndustryLandingPage from "./IndustryLandingPage";
import { aestheticData, dentalData, medSpaData } from "./industryData";

export function DentalPracticesPage() {
  return <IndustryLandingPage data={dentalData} />;
}

export function AestheticMedicinePage() {
  return <IndustryLandingPage data={aestheticData} />;
}

export function MedSpasPage() {
  return <IndustryLandingPage data={medSpaData} />;
}
