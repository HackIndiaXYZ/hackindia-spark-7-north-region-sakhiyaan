import { Link } from "react-router";
import { ArrowLeft, Users, Scale, MessageCircle, Award, Shield, Vote } from "lucide-react";
import { Card } from "../components/ui/card";

export function SocialEmpowerment() {
  const rights = [
    {
      id: 1,
      icon: Scale,
      title: "Know Your Rights",
      description: "You have equal rights. You can own property, open bank accounts, vote.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      icon: Shield,
      title: "Safety & Protection",
      description: "Domestic violence is illegal. You have the right to be safe.",
      color: "bg-red-100 text-red-600",
    },
    {
      id: 3,
      icon: Vote,
      title: "Participate",
      description: "Vote in elections. Attend community meetings. Your voice matters.",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      icon: Award,
      title: "Leadership",
      description: "Women can be leaders. Start with small roles in your community.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const communityActions = [
    "Join or form women's self-help groups",
    "Participate in local meetings",
    "Support other women in your community",
    "Learn about government schemes for women",
    "Stand up against discrimination",
  ];

  const importantNumbers = [
    { name: "Women Helpline", number: "1091" },
    { name: "Domestic Violence", number: "181" },
    { name: "Child Helpline", number: "1098" },
  ];

  const schemes = [
    { name: "MNREGA", description: "Employment guarantee program" },
    { name: "Beti Bachao Beti Padhao", description: "Education for girls" },
    { name: "Pradhan Mantri Ujjwala", description: "LPG connections" },
    { name: "Sukanya Samriddhi", description: "Savings for daughters" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pb-8">
      {/* Header */}
      <header className="bg-orange-600 text-white py-6 px-6 shadow-lg sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 text-orange-100 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-lg">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <Users className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Social Empowerment</h1>
              <p className="text-orange-100">Community support</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg mb-6">
          <img
            src="https://images.unsplash.com/photo-1770935476487-11899ea1f919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNvbW11bml0eSUyMHN1cHBvcnQlMjBncm91cHxlbnwxfHx8fDE3NzU3NTM4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Women Community"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Motivation */}
        <Card className="bg-orange-50 border-2 border-orange-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-orange-900 mb-2">Together We Are Strong</h2>
          <p className="text-orange-800 text-lg">
            When women support each other, amazing things happen. You are not alone.
          </p>
        </Card>

        {/* Your Rights */}
        <h2 className="text-2xl font-bold text-gray-800 px-2 mb-4">Your Rights</h2>
        <div className="space-y-4 mb-8">
          {rights.map((right) => {
            const Icon = right.icon;
            return (
              <Card key={right.id} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className={`${right.color} rounded-xl p-3 flex-shrink-0 h-fit`}>
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {right.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {right.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Take Action */}
        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="w-6 h-6 text-orange-600" />
            <h2 className="text-xl font-bold text-gray-800">Take Action</h2>
          </div>
          <div className="space-y-3">
            {communityActions.map((action, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-gray-700 text-base">{action}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Government Schemes */}
        <h2 className="text-2xl font-bold text-gray-800 px-2 mb-4">Government Schemes</h2>
        <div className="space-y-3 mb-6">
          {schemes.map((scheme, index) => (
            <Card key={index} className="p-4">
              <h3 className="font-bold text-base text-gray-800 mb-1">
                {scheme.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {scheme.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Helplines */}
        <Card className="bg-red-50 border-2 border-red-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-bold text-red-900">Important Helplines</h2>
          </div>
          <div className="space-y-3">
            {importantNumbers.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-800 text-base">{contact.name}</span>
                <span className="text-2xl font-bold text-red-600">{contact.number}</span>
              </div>
            ))}
          </div>
          <p className="text-red-700 text-sm mt-4 text-center">
            Don't hesitate to call if you need help. You deserve safety and respect.
          </p>
        </Card>
      </main>
    </div>
  );
}
