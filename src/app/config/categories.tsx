import { Briefcase, Brain, GraduationCap, Heart, Home, MessageCircle, Users } from "lucide-react";

export const categories = [
  { id: "home", title: "Home", icon: Home, path: "/" },
  { id: "health", title: "Health", icon: Heart, path: "/health" },
  { id: "business", title: "Business", icon: Briefcase, path: "/business" },
  { id: "education", title: "Education", icon: GraduationCap, path: "/education" },
  { id: "mental-wellness", title: "Mental Wellness", icon: Brain, path: "/mental-wellness" },
  { id: "community", title: "Community", icon: Users, path: "/social-empowerment" },
  { id: "chat", title: "Direct Chat", icon: MessageCircle, path: "/chat" },
] as const;
