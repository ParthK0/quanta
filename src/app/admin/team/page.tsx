"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, User } from "lucide-react";

const INITIAL_MEMBERS = [
  { id: 1, name: "Alex Rahman", role: "President & AI Lead", email: "alex@quanta.edu", status: "Active" },
  { id: 2, name: "Sarah Chen", role: "Vice President", email: "sarah@quanta.edu", status: "Active" },
  { id: 3, name: "David Kim", role: "Events Coordinator", email: "david@quanta.edu", status: "Inactive" }
];

export default function AdminMembers() {
  const [members, setMembers] = useState(INITIAL_MEMBERS);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-syne text-white mb-2">Manage Members</h1>
          <p className="text-muted-foreground">Add, update, or remove core team members.</p>
        </div>
        <button 
          className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Member
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 border-b border-white/10 text-white/70">
            <tr>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Role</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-white font-medium flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  {member.name}
                </td>
                <td className="px-6 py-4 text-muted-foreground">{member.role}</td>
                <td className="px-6 py-4 text-muted-foreground">{member.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs ${member.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-destructive/10 text-destructive'}`}>
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-2 text-muted-foreground hover:text-white transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => setMembers(members.filter(m => m.id !== member.id))} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
