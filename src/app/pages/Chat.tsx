import { Link } from "react-router";
import { ArrowLeft, MessageCircle, Phone, SendHorizontal, ShieldCheck, Sparkles } from "lucide-react";
import { Card } from "../components/ui/card";

const conversations = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Tailoring & Embroidery Specialist",
    lastMessage: "I can help you with blouse stitching and custom designs this week.",
    time: "2 min ago",
    unread: 2,
  },
  {
    id: 2,
    name: "Anjali Patel",
    role: "Handmade Jewelry Creator",
    lastMessage: "Let me share a few affordable necklace options for your shop.",
    time: "18 min ago",
    unread: 0,
  },
  {
    id: 3,
    name: "Lakshmi Reddy",
    role: "Home Food Business",
    lastMessage: "We can discuss pricing for bulk snack orders tomorrow morning.",
    time: "1 hr ago",
    unread: 1,
  },
];

export function Chat() {
  return (
    <div className="aurora-page pb-8">
      <header className="aurora-header py-6 px-6">
        <div className="aurora-shell">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 text-[#e8fbf8] hover:text-white">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-lg">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/12 p-3">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#c6d9cf]">Chat</h1>
              <p className="text-[#dff8f3]">Stay connected with mentors, neighbors, and buyers</p>
            </div>
          </div>
        </div>
      </header>

      <main className="aurora-shell px-4 py-6 space-y-6">
        <Card className="hero-panel floating-card border-0">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-[#fff1d9] p-3 text-[#e1842c]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#17363f]">Direct support in one place</h2>
              <p className="mt-1 text-sm leading-6 text-[#55696d]">
                Ask questions, check on orders, or connect with women in your area through a simple conversation feed.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#114a56]">
                <span className="rounded-full bg-white/70 px-3 py-1.5">Voice call support</span>
                <span className="rounded-full bg-white/70 px-3 py-1.5">Trusted community help</span>
                <span className="rounded-full bg-white/70 px-3 py-1.5">Safe business follow-up</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="glass-card floating-card rounded-[2rem] p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-[#def4ef] p-2.5 text-[#0d7c74]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-[#17363f]">Safety reminder</h2>
              <p className="text-sm text-[#55696d]">Share only the details you are comfortable with and meet in public spaces when needed.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="pill-button teal-button rounded-2xl px-4 py-3 text-sm font-semibold">
              Start new chat
            </button>
            <button className="pill-button sunrise-button rounded-2xl px-4 py-3 text-sm font-semibold">
              View requests
            </button>
          </div>
        </Card>

        <div className="space-y-4">
          {conversations.map((conversation) => (
            <Card key={conversation.id} className="glass-card floating-card rounded-[2rem] p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-[#17363f]">{conversation.name}</h3>
                  <p className="text-sm text-[#0d7c74]">{conversation.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#7f7366]">{conversation.time}</p>
                  {conversation.unread > 0 ? (
                    <span className="mt-2 inline-flex min-w-6 justify-center rounded-full bg-[#0d7c74] px-2 py-1 text-xs font-bold text-white">
                      {conversation.unread}
                    </span>
                  ) : null}
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[#55696d]">{conversation.lastMessage}</p>

              <div className="mt-4 flex gap-3">
                <button className="pill-button teal-button flex-1 px-4 py-2.5 text-sm font-medium">
                  <span className="inline-flex items-center gap-2">
                    <SendHorizontal className="w-4 h-4" />
                    Reply
                  </span>
                </button>
                <button className="pill-button soft-button flex-1 px-4 py-2.5 text-sm font-medium">
                  <span className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call
                  </span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
