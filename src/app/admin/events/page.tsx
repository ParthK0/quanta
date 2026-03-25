"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Calendar as CalendarIcon } from "lucide-react";

const INITIAL_EVENTS = [
  { id: 1, title: "Intro to Deep Learning", date: "Aug 15, 2026", type: "Workshop", status: "upcoming" },
  { id: 2, title: "Quanta Datathon 2026", date: "Sep 20-22, 2026", type: "Hackathon", status: "upcoming" },
];

export default function AdminEvents() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-syne text-white mb-2">Manage Events</h1>
          <p className="text-muted-foreground">Create, update, or delete club events.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" /> New Event
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 border-b border-white/10 text-white/70">
            <tr>
              <th className="px-6 py-4 font-medium">Event Title</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Type</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-white font-medium flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-3 text-muted-foreground" />
                  {event.title}
                </td>
                <td className="px-6 py-4 text-muted-foreground">{event.date}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-xs">
                    {event.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs ${event.status === 'upcoming' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/10 text-white/50'}`}>
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-2 text-muted-foreground hover:text-white transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(event.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {events.length === 0 && (
          <div className="p-12 text-center text-muted-foreground">
            No events found. Click "New Event" to add one.
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card w-full max-w-lg border border-border rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Create New Event</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Event Title" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-white outline-none focus:border-primary" />
              <input type="date" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-white outline-none focus:border-primary" />
              <select className="w-full bg-background border border-border rounded-lg px-4 py-2 text-white outline-none focus:border-primary">
                <option>Workshop</option>
                <option>Hackathon</option>
                <option>Talk</option>
              </select>
            </div>
            <div className="mt-8 flex justify-end space-x-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-muted-foreground hover:text-white">Cancel</button>
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90">Save Event</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
