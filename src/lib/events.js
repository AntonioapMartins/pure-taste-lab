import { getAll, put, deleteByKey } from "./indexedDB";

const STORE = "events";

export async function getEvents() {
  const events = await getAll(STORE);
  return events;
}

export async function addEvent(event) {
  const newEvent = {
    ...event,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  await put(STORE, newEvent);
  return newEvent;
}

export async function updateEvent(id, data) {
  const events = await getAll(STORE);
  const existing = events.find((e) => e.id === id);
  if (!existing) return null;
  const updated = { ...existing, ...data };
  await put(STORE, updated);
  return updated;
}

export async function deleteEvent(id) {
  await deleteByKey(STORE, id);
  return true;
}
