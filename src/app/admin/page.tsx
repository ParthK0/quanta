"use client";

import { motion } from "framer-motion";
import { Users, Calendar, FileText, TrendingUp, TrendingDown } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { name: "Total Members", value: "342", change: "+12%", trend: "up", icon: Users },
    { name: "Active Events", value: "4", change: "Same as last month", trend: "neutral", icon: Calendar },
    { name: "Blog Posts", value: "18", change: "+3 this week", trend: "up", icon: FileText },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-syne text-white mb-2">Welcome Back, Admin</h1>
        <p className="text-muted-foreground">Here's what's happening in Quanta today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              {stat.trend === "up" ? (
                <span className="flex items-center text-xs font-medium text-emerald-400">
                  {stat.change} <TrendingUp className="w-3 h-3 ml-1" />
                </span>
              ) : stat.trend === "down" ? (
                <span className="flex items-center text-xs font-medium text-red-400">
                  {stat.change} <TrendingDown className="w-3 h-3 ml-1" />
                </span>
              ) : (
                <span className="text-xs font-medium text-muted-foreground">{stat.change}</span>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">{stat.value}</h2>
              <p className="text-sm text-muted-foreground">{stat.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <h2 className="text-xl font-bold font-syne text-white mb-6">Recent Activity</h2>
        <div className="space-y-6">
          {[
            { action: "New Member Registration", desc: "Jane Smith joined the club", time: "2 mins ago" },
            { action: "Event Updated", desc: "Alex changed timing for Intro to DL", time: "1 hour ago" },
            { action: "Blog Published", desc: "Understanding Transformers goes live", time: "3 hours ago" },
          ].map((activity, i) => (
            <div key={i} className="flex border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-4" />
              <div className="flex-1">
                <p className="text-sm font-medium text-white">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.desc}</p>
              </div>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
