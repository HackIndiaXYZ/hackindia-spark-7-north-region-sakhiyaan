import { Link } from "react-router";
import { ArrowLeft, Languages, Calculator, Smartphone, FileText, GraduationCap } from "lucide-react";
import { Card } from "../components/ui/card";

export function Education() {
  const learningAreas = [
    {
      id: 1,
      icon: Languages,
      title: "Reading & Writing",
      description: "Learn to read and write in your language. Practice every day.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      icon: Calculator,
      title: "Basic Math",
      description: "Numbers help in daily life. Count money, measure, calculate.",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Digital Skills",
      description: "Learn to use phone, send messages, use helpful apps.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Life Skills",
      description: "Health, finance, legal rights - knowledge that empowers you.",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const tips = [
    "Learn at your own pace - there's no rush",
    "Ask questions - no question is too small",
    "Practice daily - even 15 minutes helps",
    "Teach others what you learn",
    "Education has no age limit",
  ];

  const resources = [
    { title: "Adult Literacy Programs", description: "Contact your local community center" },
    { title: "Online Learning", description: "Free apps and videos to learn" },
    { title: "Community Classes", description: "Join local women's groups" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-8">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 px-6 shadow-lg sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 text-blue-100 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-lg">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            {/* <BookOpen className="w-10 h-10" /> */}
            <div>
              <h1 className="text-3xl font-bold">Education</h1>
              <p className="text-blue-100">Learn and grow</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-6">
          <img
            src="https://images.unsplash.com/photo-1700756739057-f6ec705ffc1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVkdWNhdGlvbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NTc1Mzg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Women Learning"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Motivation */}
        <Card className="bg-blue-50 border-2 border-blue-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-2">It's Never Too Late</h2>
          <p className="text-blue-800 text-lg">
            Education opens doors. Learning new skills makes you confident and independent.
          </p>
        </Card>

        {/* Learning Areas */}
        <h2 className="text-2xl font-bold text-gray-800 px-2 mb-4">What You Can Learn</h2>
        <div className="space-y-4 mb-8">
          {learningAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Card key={area.id} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className={`${area.color} rounded-xl p-3 flex-shrink-0 h-fit`}>
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Learning Tips */}
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-800">Learning Tips</h2>
          </div>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-gray-700 text-base">{tip}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Resources */}
        <h2 className="text-2xl font-bold text-gray-800 px-2 mb-4">Find Help</h2>
        <div className="space-y-3">
          {resources.map((resource, index) => (
            <Card key={index} className="p-5">
              <h3 className="font-bold text-lg text-gray-800 mb-1">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-base">
                {resource.description}
              </p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
