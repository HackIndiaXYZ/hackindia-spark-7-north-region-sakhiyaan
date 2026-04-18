import { Link } from "react-router";
import { ArrowLeft, Heart, Stethoscope, Apple, Baby, Activity, Phone } from "lucide-react";
import { Card } from "../components/ui/card";

export function Health() {
  const resources = [
    {
      id: 1,
      icon: Stethoscope,
      title: "Regular Check-ups",
      description: "Visit a health center every 6 months for a general check-up.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: 2,
      icon: Apple,
      title: "Nutrition Tips",
      description: "Eat colorful fruits and vegetables daily. Drink 8 glasses of water.",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      icon: Baby,
      title: "Maternal Health",
      description: "Prenatal care is essential. Visit clinic during pregnancy.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      icon: Activity,
      title: "Stay Active",
      description: "Walk 30 minutes daily. Stretch and move your body.",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const emergencyContacts = [
    { name: "Emergency", number: "108" },
    { name: "Women Helpline", number: "1091" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pb-8">
      {/* Header */}
      <header className="bg-pink-600 text-white py-6 px-6 shadow-lg sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 text-pink-100 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-lg">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <Heart className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Health</h1>
              <p className="text-pink-100">Your wellness matters</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-6">
          <img
            src="https://images.unsplash.com/photo-1687180948607-9ba1dd045e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhlYWx0aCUyMHdlbGxuZXNzfGVufDF8fHx8MTc3NTczOTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Health and Wellness"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Important Message */}
        <Card className="bg-pink-50 border-2 border-pink-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-pink-900 mb-2">Remember</h2>
          <p className="text-pink-800 text-lg">
            Your health is your wealth. Taking care of yourself helps you take care of your family.
          </p>
        </Card>

        {/* Resources Grid */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 px-2">Health Tips</h2>
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card key={resource.id} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className={`${resource.color} rounded-xl p-3 flex-shrink-0 h-fit`}>
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Emergency Contacts */}
        <Card className="bg-red-50 border-2 border-red-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Phone className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-bold text-red-900">Emergency Numbers</h2>
          </div>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-800 text-lg">{contact.name}</span>
                <span className="text-2xl font-bold text-red-600">{contact.number}</span>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
