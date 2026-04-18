import { Link } from "react-router";
import { ArrowLeft, Brain, Heart, Smile, Sun, Moon, Wind } from "lucide-react";
import { Card } from "../components/ui/card";

export function MentalWellness() {
  const practices = [
    {
      id: 1,
      icon: Wind,
      title: "Deep Breathing",
      description: "Breathe in slowly, hold, breathe out. Repeat 5 times when stressed.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      id: 2,
      icon: Sun,
      title: "Positive Thoughts",
      description: "Start each day with something you're grateful for.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 3,
      icon: Heart,
      title: "Talk to Someone",
      description: "Share your feelings with a friend or family member you trust.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: 4,
      icon: Moon,
      title: "Rest Well",
      description: "Try to sleep at the same time each night. Rest is important.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  const quickTips = [
    { icon: "🌸", text: "Take short breaks during work" },
    { icon: "🎵", text: "Listen to music you enjoy" },
    { icon: "🌳", text: "Spend time in nature" },
    { icon: "💪", text: "Move your body - walk, dance" },
    { icon: "📝", text: "Write down your feelings" },
    { icon: "😊", text: "Laugh - watch something funny" },
  ];

  const affirmations = [
    "I am strong",
    "I am worthy",
    "I can handle this",
    "I am doing my best",
    "I deserve peace",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-8">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 px-6 shadow-lg sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 text-green-100 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-lg">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <Brain className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Mental Wellness</h1>
              <p className="text-green-100">Peace of mind</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-6">
          <img
            src="https://images.unsplash.com/photo-1758274539654-23fa349cc090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcGVhY2VmdWwlMjB3b21hbnxlbnwxfHx8fDE3NzU3MDQ0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mental Wellness"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Important Message */}
        <Card className="bg-green-50 border-2 border-green-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-green-900 mb-2">Your Mind Matters</h2>
          <p className="text-green-800 text-lg">
            Taking care of your mental health is just as important as physical health. You deserve peace and happiness.
          </p>
        </Card>

        {/* Wellness Practices */}
        <h2 className="text-2xl font-bold text-gray-800 px-2 mb-4">Daily Practices</h2>
        <div className="space-y-4 mb-8">
          {practices.map((practice) => {
            const Icon = practice.icon;
            return (
              <Card key={practice.id} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className={`${practice.color} rounded-xl p-3 flex-shrink-0 h-fit`}>
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {practice.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {practice.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Tips */}
        <h2 className="text-2xl font-bold text-gray-800 px-2 mb-4">Quick Relief Tips</h2>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {quickTips.map((tip, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">{tip.icon}</div>
              <p className="text-gray-700 text-sm font-medium">{tip.text}</p>
            </Card>
          ))}
        </div>

        {/* Daily Affirmations */}
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Smile className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-800">Daily Affirmations</h2>
          </div>
          <p className="text-gray-700 mb-4">Say these to yourself each morning:</p>
          <div className="space-y-3">
            {affirmations.map((affirmation, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <p className="text-gray-800 text-lg font-medium text-center">
                  {affirmation}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Helpline */}
        <Card className="bg-blue-50 border-2 border-blue-200 p-6 mt-6">
          <h3 className="font-bold text-lg text-blue-900 mb-2">Need Someone to Talk To?</h3>
          <p className="text-blue-800 mb-3">Mental Health Helpline:</p>
          <div className="bg-white rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">1800-599-0019</p>
          </div>
        </Card>
      </main>
    </div>
  );
}
