import {
  SERVICE_IDS,
  isServiceId,
  type ServiceId,
} from "@/data/serviceCatalog";

/**
 * Persistence for the service request.
 *
 * Only ids are stored — never labels, never anything the visitor typed. The
 * selection is a browsing convenience, so every read is defensive: an unknown
 * id (a service that was renamed or retired), a stale entry or a blocked
 * storage engine all degrade to "nothing selected" rather than throwing into
 * the page.
 */

export const REQUEST_STORAGE_KEY = "digitalface.service_request";

/** A month is long enough to survive a real decision cycle, short enough that
 *  a forgotten selection does not resurface as a surprise. */
export const REQUEST_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

const VERSION = 1;

type StoredRequest = {
  v: number;
  ids: string[];
  savedAt: number;
};

/** Catalog order, so the review list always reads the way the page does. */
const CATALOG_ORDER = new Map(SERVICE_IDS.map((id, index) => [id, index]));

function sortByCatalog(ids: readonly ServiceId[]): ServiceId[] {
  return [...ids].sort(
    (a, b) => (CATALOG_ORDER.get(a) ?? 0) - (CATALOG_ORDER.get(b) ?? 0),
  );
}

export function addServiceId(
  ids: readonly ServiceId[],
  id: ServiceId,
): ServiceId[] {
  if (ids.includes(id)) return [...ids];
  return sortByCatalog([...ids, id]);
}

export function removeServiceId(
  ids: readonly ServiceId[],
  id: ServiceId,
): ServiceId[] {
  return ids.filter((value) => value !== id);
}

export function parseStoredRequest(
  raw: string | null,
  now = Date.now(),
): ServiceId[] {
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as Partial<StoredRequest>;
    if (parsed?.v !== VERSION || !Array.isArray(parsed.ids)) return [];

    const savedAt = typeof parsed.savedAt === "number" ? parsed.savedAt : 0;
    if (!savedAt || now - savedAt > REQUEST_MAX_AGE_MS) return [];

    const unique = new Set<ServiceId>();
    for (const id of parsed.ids) {
      if (isServiceId(id)) unique.add(id);
    }
    return sortByCatalog([...unique]);
  } catch {
    return [];
  }
}

export function serializeRequest(
  ids: readonly ServiceId[],
  now = Date.now(),
): string {
  const value: StoredRequest = { v: VERSION, ids: [...ids], savedAt: now };
  return JSON.stringify(value);
}

export function readStoredRequest(): ServiceId[] {
  if (typeof window === "undefined") return [];
  try {
    return parseStoredRequest(window.localStorage.getItem(REQUEST_STORAGE_KEY));
  } catch {
    // Private browsing and blocked storage must not break the page.
    return [];
  }
}

export function writeStoredRequest(ids: readonly ServiceId[]): void {
  if (typeof window === "undefined") return;
  try {
    if (ids.length === 0) {
      window.localStorage.removeItem(REQUEST_STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(REQUEST_STORAGE_KEY, serializeRequest(ids));
  } catch {
    /* The selection still works for this session; it just will not persist. */
  }
}
