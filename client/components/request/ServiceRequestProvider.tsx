import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  resolveServices,
  type ResolvedService,
  type ServiceId,
} from "@/data/serviceCatalog";
import {
  addServiceId,
  readStoredRequest,
  removeServiceId,
  writeStoredRequest,
} from "./requestStorage";

/**
 * The visitor's service request: which DigitalFace services they want to talk
 * about, kept as they move around the site.
 *
 * Deliberately small. Only stable ids live in state and in storage; the visible
 * names are derived from the active locale on every read, so switching language
 * renames the selection instead of duplicating or losing it.
 */

type ServiceRequestValue = {
  /** Stable ids, in catalog order. */
  ids: ServiceId[];
  /** The same selection with names resolved for the active locale. */
  services: ResolvedService[];
  count: number;
  has: (id: ServiceId) => boolean;
  add: (id: ServiceId) => void;
  remove: (id: ServiceId) => void;
  toggle: (id: ServiceId) => void;
  clear: () => void;
  /** Review panel. Owned here so the launcher and the panel cannot disagree. */
  isPanelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
};

const ServiceRequestContext = createContext<ServiceRequestValue | null>(null);

export function ServiceRequestProvider({ children }: { children: ReactNode }) {
  const { locale } = useLocale();
  // Read once, synchronously, so a selection made on the previous page is
  // already on screen for the first paint rather than appearing a frame later.
  const [ids, setIds] = useState<ServiceId[]>(() => readStoredRequest());
  const [isPanelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    writeStoredRequest(ids);
  }, [ids]);

  const add = useCallback((id: ServiceId) => {
    setIds((current) => addServiceId(current, id));
  }, []);

  const remove = useCallback((id: ServiceId) => {
    setIds((current) => removeServiceId(current, id));
  }, []);

  const toggle = useCallback((id: ServiceId) => {
    setIds((current) =>
      current.includes(id)
        ? removeServiceId(current, id)
        : addServiceId(current, id),
    );
  }, []);

  const clear = useCallback(() => setIds([]), []);

  const openPanel = useCallback(() => setPanelOpen(true), []);
  const closePanel = useCallback(() => setPanelOpen(false), []);

  const value = useMemo<ServiceRequestValue>(
    () => ({
      ids,
      services: resolveServices(ids, locale),
      count: ids.length,
      has: (id) => ids.includes(id),
      add,
      remove,
      toggle,
      clear,
      isPanelOpen,
      openPanel,
      closePanel,
    }),
    [
      ids,
      locale,
      add,
      remove,
      toggle,
      clear,
      isPanelOpen,
      openPanel,
      closePanel,
    ],
  );

  return (
    <ServiceRequestContext.Provider value={value}>
      {children}
    </ServiceRequestContext.Provider>
  );
}

export function useServiceRequest(): ServiceRequestValue {
  const value = useContext(ServiceRequestContext);
  if (!value) {
    throw new Error(
      "useServiceRequest must be used inside <ServiceRequestProvider>.",
    );
  }
  return value;
}
