import { Link } from "react-router";
import { Heart, MessageCircle, MapPin, MoreVertical, Home as HomeIcon, Plus, Sparkles, Compass, BadgeCheck, GraduationCap } from "lucide-react";
import { Card } from "../components/ui/card";

export function Home() {
  const serviceProviders = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      service: "Tailoring & Embroidery Specialist",
      description: "Custom clothing and traditional embroidery work. 10+ years experience.",
      profileImage: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzc1NzUwNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      workImages: [
        "https://images.unsplash.com/photo-1744808336885-c6b2425c3f1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3JpbmclMjBzZXdpbmclMjBjbG90aGVzfGVufDF8fHx8MTc3NTc1NDM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1744808336885-c6b2425c3f1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3JpbmclMjBzZXdpbmclMjBjbG90aGVzfGVufDF8fHx8MTc3NTc1NDM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1744808336885-c6b2425c3f1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3JpbmclMjBzZXdpbmclMjBjbG90aGVzfGVufDF8fHx8MTc3NTc1NDM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      skills: ["Tailoring", "Embroidery", "Design"],
    },
    {
      id: 2,
      name: "Anjali Patel",
      location: "Gujarat, India",
      service: "Handmade Jewelry Creator",
      description: "Traditional and modern jewelry designs using sustainable materials.",
      profileImage: "https://images.unsplash.com/photo-1672675611932-9d722165f0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc3NTc1NDM3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      workImages: [
        "https://images.unsplash.com/photo-1619605401830-5430fea8d41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMGpld2Vscnl8ZW58MXx8fHwxNzc1NjYzNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1619605401830-5430fea8d41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMGpld2Vscnl8ZW58MXx8fHwxNzc1NjYzNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1619605401830-5430fea8d41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMGpld2Vscnl8ZW58MXx8fHwxNzc1NjYzNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      skills: ["Jewelry Making", "Crafts", "Design"],
    },
    {
      id: 3,
      name: "Lakshmi Reddy",
      location: "Hyderabad, India",
      service: "Home Food Business",
      description: "Homemade snacks, sweets, and healthy meal prep services.",
      profileImage: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTc1NDM3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      workImages: [
        "https://images.unsplash.com/photo-1612807216087-03678501f4a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGZvb2QlMjBjb29raW5nfGVufDF8fHx8MTc3NTc1NDM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1612807216087-03678501f4a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGZvb2QlMjBjb29raW5nfGVufDF8fHx8MTc3NTc1NDM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1612807216087-03678501f4a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGZvb2QlMjBjb29raW5nfGVufDF8fHx8MTc3NTc1NDM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      skills: ["Cooking", "Food Safety", "Business"],
    },
  ];

  const skillsDirectory = [
    "Tailoring", "Handicrafts", "Cooking", "Farming", "Teaching", "Health Worker", "Beautician", "Childcare"
  ];

  const quickActions = [
    { id: 1, label: "Direct Chat", path: "/chat", icon: MessageCircle, style: "teal-button" },
    { id: 2, label: "Find Nearby", path: "/social-empowerment", icon: Compass, style: "sunrise-button" },
    { id: 3, label: "Learn Skills", path: "/education", icon: GraduationCap, style: "soft-button" },
  ];

  return (
    <div className="aurora-page pb-28">
      <header className="aurora-header py-4 px-6">
        <div className="aurora-shell flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Rise Together</h1>
          </div>
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
            Live Community
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="aurora-shell px-4 py-8">
        <section className="hero-panel floating-card mb-6">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-[#114a56]">
                <Sparkles className="h-4 w-4" />
                Stronger income, health, and community
              </div>
              <h2 className="text-4xl font-bold leading-tight text-[#17363f]">A warmer, brighter home for support, learning, and direct connection.</h2>
              <p className="mt-3 text-base leading-7 text-[#4b5f63]">
                Discover mentors, learn practical skills, and start conversations with women who can help you move forward.
              </p>
            </div>
            <div className="grid min-w-[220px] gap-3 text-sm text-[#114a56]">
              <div className="glass-card rounded-[1.5rem] p-4">
                <p className="text-3xl font-bold">240+</p>
                <p className="mt-1">community exchanges this month</p>
              </div>
              <div className="glass-card rounded-[1.5rem] p-4">
                <p className="text-3xl font-bold">18</p>
                <p className="mt-1">skill groups active nearby</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="section-title text-lg font-semibold">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link key={action.id} to={action.path} className={`pill-button ${action.style} floating-card min-h-28 rounded-[1.75rem] px-4 py-4 shadow-sm`}>
                  <div className="flex w-full items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide opacity-75">Open</p>
                      <p className="text-left text-base font-bold">{action.label}</p>
                    </div>
                    <div className="rounded-2xl bg-white/25 p-2.5">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <Card className="glass-card floating-card p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-2xl bg-[#ffedd7] p-3 text-[#cb7a25]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-[#6f6457]">Hotspot</p>
                <p className="font-bold text-[#17363f]">Gujarat Makers</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-[#57686b]">Craft sellers and food founders are collaborating on shared orders this week.</p>
          </Card>
          <Card className="glass-card floating-card p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-2xl bg-[#dbf4ef] p-3 text-[#0d7c74]">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-[#6f6457]">Trusted Circle</p>
                <p className="font-bold text-[#17363f]">Safe referrals</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-[#57686b]">Verified women-led services and nearby recommendations are easier to reach from one place.</p>
          </Card>
          <Card className="glass-card floating-card p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-2xl bg-[#fff2dc] p-3 text-[#e1842c]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-[#6f6457]">Today’s Focus</p>
                <p className="font-bold text-[#17363f]">Learn and earn</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-[#57686b]">Jump into digital skills, practical business tips, and direct chat with local experts.</p>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="section-title text-lg font-semibold">Women You Can Connect With</h2>
          <div className="space-y-6">
          {serviceProviders.map((provider) => (
            <Card key={provider.id} className="glass-card floating-card overflow-hidden rounded-[2rem]">
              <div className="p-5 pb-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="relative">
                    <img
                      src={provider.profileImage}
                      alt={provider.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#0d7c74]"
                    />
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#ffb86c] border-2 border-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#17363f]">{provider.name}</h3>
                    <p className="text-sm font-medium text-[#0d7c74]">{provider.service}</p>
                    <div className="flex items-center gap-1 text-[#7b6955] text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{provider.location}</span>
                    </div>
                  </div>
                  <button className="text-[#114a56] p-1">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-[#57686b] text-sm mb-3 leading-6">{provider.description}</p>
                <div className="mb-3 flex flex-wrap gap-2">
                  {provider.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#114a56]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 px-1 mb-4">
                {provider.workImages.map((image, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`Work sample ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5 flex gap-2">
                <Link to="/chat" className="pill-button teal-button flex-1 py-2.5 px-4">
                  <MessageCircle className="w-4 h-4" fill="currentColor" />
                  <span>Connect</span>
                </Link>
                <Link to="/chat" className="pill-button sunrise-button flex-1 py-2.5 px-4">
                  <MessageCircle className="w-4 h-4" />
                  <span>Message</span>
                </Link>
                <button className="pill-button soft-button flex-1 py-2.5 px-4">
                  <Heart className="w-4 h-4" />
                  <span>Endorse</span>
                </button>
              </div>
            </Card>
          ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="section-title text-lg font-semibold">Skills Directory</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {skillsDirectory.map((skill, idx) => (
              <button
                key={idx}
                className="pill-button soft-button px-4 py-2 text-sm font-medium"
              >
                {skill}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="section-title text-lg font-semibold">People Nearby</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card className="glass-card floating-card rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzc1NzUwNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Meera"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#ffb86c] border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#17363f] text-sm">Meera K.</h4>
                  <p className="text-[#0d7c74] text-xs">Teacher</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card floating-card rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1672675611932-9d722165f0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc3NTc1NDM3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sunita"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#ffb86c] border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#17363f] text-sm">Sunita R.</h4>
                  <p className="text-[#0d7c74] text-xs">Farmer</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-transparent p-3">
        <div className="aurora-shell">
          <div className="glass-card rounded-full px-4 py-3">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center gap-1 text-[#0d7c74] p-2 transition-transform hover:-translate-y-1">
              <HomeIcon className="w-6 h-6" fill="currentColor" />
            </button>
            <button className="flex flex-col items-center gap-1 text-[#114a56] p-2 transition-transform hover:-translate-y-1">
              <Heart className="w-6 h-6" />
            </button>
            <button className="flex flex-col items-center gap-1 rounded-full bg-gradient-to-br from-[#ff9b54] to-[#ffbf69] p-3 -mt-8 text-[#5b3417] shadow-lg transition-transform hover:-translate-y-1">
              <Plus className="w-6 h-6" />
            </button>
            <button className="flex flex-col items-center gap-1 text-[#114a56] p-2 transition-transform hover:-translate-y-1">
              <MapPin className="w-6 h-6" />
            </button>
            <Link to="/chat" className="flex flex-col items-center gap-1 text-[#114a56] p-2 transition-transform hover:-translate-y-1">
              <MessageCircle className="w-6 h-6" />
            </Link>
          </div>
        </div>
        </div>
      </nav>
    </div>
  );
}
