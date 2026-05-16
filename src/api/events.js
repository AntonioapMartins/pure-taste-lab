import api from './api';

export const getEvents = () => api.get('/events');

export const addEvent = (formData) =>
  api.post('/events', formData);

export const updateEvent = (id, formData) =>
  api.put(`/events/${id}`, formData);

export const deleteEvent = (id) =>
  api.delete(`/events/${id}`);