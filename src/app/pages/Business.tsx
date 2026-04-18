import { Link } from "react-router";
import { ArrowLeft, Briefcase, TrendingUp, Lightbulb, Users, PiggyBank } from "lucide-react";
import { Card } from "../components/ui/card";

export function Business() {
  const resources = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Business Ideas",
      ideas: ["Tailoring & Sewing", "Food Products", "Handicrafts", "Small Shop", "Farming"],
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 2,
      icon: PiggyBank,
      title: "Save Money",
      description: "Start small. Save a little every day. Join a savings group.",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      icon: Users,
      title: "Join Groups",
      description: "Connect with other women entrepreneurs. Share ideas and support.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Keep track of money. Treat customers well. Quality matters.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const steps = [
    { step: 1, text: "Find what you're good at" },
    { step: 2, text: "Start small with what you have" },
    { step: 3, text: "Learn from others" },
    { step: 4, text: "Save and reinvest profits" },
    { step: 5, text: "Believe in yourself" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-8">
      {/* Header */}
      <header className="bg-cyan-700 text-white py-6 px-6 shadow-lg sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 text-purple-100 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-lg">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <Briefcase className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Business</h1>
              <p className="text-purple-100">Start and grow</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-6">
          <img
            src="https://images.unsplash.com/photo-1562071707-7249ab429b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVudHJlcHJlbmV1ciUyMGJ1c2luZXNzfGVufDF8fHx8MTc3NTc1Mzg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Women in Business"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Motivation */}
        <Card className="bg-purple-50 border-2 border-purple-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-purple-900 mb-2">You Can Do This!</h2>
          <p className="text-purple-800 text-lg">
            Every big business started small. Your skills and hard work can create income for your family.
          </p>
        </Card>

        {/* Steps to Start */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 px-2 mb-4">Steps to Start</h2>
          <div className="space-y-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4"
              >
                <div className="bg-cyan-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <p className="text-gray-800 text-lg font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <h2 className="text-2xl font-bold text-gray-800 px-2 mb-4">Resources</h2>
        <div className="space-y-4">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card key={resource.id} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className={`${resource.color} rounded-xl p-3 flex-shrink-0 h-fit`}>
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {resource.title}
                    </h3>
                    {resource.ideas ? (
                      <div className="flex flex-wrap gap-2">
                        {resource.ideas.map((idea, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {idea}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-base leading-relaxed">
                        {resource.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
