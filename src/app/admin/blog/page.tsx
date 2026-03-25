"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, FileText } from "lucide-react";

const INITIAL_POSTS = [
  { id: 1, title: "Understanding Transformer Architectures in 2026", author: "Alex Rahman", date: "March 20, 2026", status: "Published" },
  { id: 2, title: "Recap: Quanta Spring Datathon", author: "David Kim", date: "March 15, 2026", status: "Published" },
  { id: 3, title: "Draft: The Future of Deep Learning", author: "Sarah Chen", date: "Draft", status: "Draft" }
];

export default function AdminBlog() {
  const [posts, setPosts] = useState(INITIAL_POSTS);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-syne text-white mb-2">Manage Blog</h1>
          <p className="text-muted-foreground">Publish tutorials and news articles.</p>
        </div>
        <button 
          className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" /> New Post
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 border-b border-white/10 text-white/70">
            <tr>
              <th className="px-6 py-4 font-medium">Post Title</th>
              <th className="px-6 py-4 font-medium">Author</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-white font-medium flex items-center">
                  <FileText className="w-4 h-4 mr-3 text-muted-foreground" />
                  {post.title}
                </td>
                <td className="px-6 py-4 text-muted-foreground">{post.author}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs ${post.status === 'Published' ? 'bg-accent/10 text-accent' : 'bg-yellow-500/10 text-yellow-500'}`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-2 text-muted-foreground hover:text-white transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => setPosts(posts.filter(p => p.id !== post.id))} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
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
