import {
  Camera, Bell, Phone, Wifi,
  Shield, ShieldCheck, Lock,
  Wrench, UserCheck, DollarSign,
  type LucideIcon,
} from "lucide-react";

export const BUSINESS = {
  name: "North Side Security",
  phone: "0437 745 101",
  phoneHref: "tel:+61437745101",
  email: "sales@northsidesecurity.com.au",
  hours: "Monday–Sunday, 9am–5pm",
  tagline: "Protection That Works. Service That Lasts.",
  heroTagline: "PROTECTION THAT WORKS. ALWAYS.",
  area: "Perth's Northern Suburbs — Joondalup, Wanneroo & Surrounds",
  facebook: "https://www.facebook.com/profile.php?id=61583481701746",
  instagram: "https://www.instagram.com/northsidesecurity",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
] as const;

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  comingSoon?: boolean;
}

export const SERVICES: ServiceItem[] = [
  { id: "cctv", title: "CCTV Systems", subtitle: "From $1,490 installed", icon: Camera },
  { id: "alarms", title: "Alarm Systems", subtitle: "Hikvision AX Pro", icon: Bell },
  { id: "intercoms", title: "Intercoms", subtitle: "Coming soon", icon: Phone, comingSoon: true },
  { id: "network", title: "Network & WiFi", subtitle: "WiFi & cabling", icon: Wifi },
];

export interface TrustBadge {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export const TRUST_BADGES: TrustBadge[] = [
  { icon: Shield, title: "WA Police Licensed", subtitle: "Security Agent Licence" },
  { icon: ShieldCheck, title: "Fully Insured", subtitle: "Public Liability" },
  { icon: Lock, title: "No Lock-in", subtitle: "Zero subscription fees" },
];

export interface WhyItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WHY_ITEMS: WhyItem[] = [
  { icon: Wrench, title: "Clean, Professional Installs", description: "Neat cable runs, proper mounting, and a tidy finish every time." },
  { icon: Lock, title: "No Ongoing Subscriptions", description: "You own your system outright. No monthly fees, no lock-in contracts." },
  { icon: UserCheck, title: "Your Technician, Your Support", description: "The person who installs your system is the person who supports it." },
  { icon: DollarSign, title: "Fair, Transparent Pricing", description: "We recommend the minimum system for real protection — nothing more." },
];

export interface Package {
  name: string;
  cameras: string;
  nvr: string;
  storage: string;
  price: string;
  popular?: boolean;
}

export const PACKAGES: Package[] = [
  { name: "2 Camera", cameras: "2x 6MP HD", nvr: "4-channel", storage: "2TB", price: "$1,490" },
  { name: "4 Camera", cameras: "4x 6MP HD", nvr: "8-channel", storage: "4TB", price: "$1,990" },
  { name: "6 Camera", cameras: "6x 6MP HD", nvr: "8-channel", storage: "4TB", price: "$2,490", popular: true },
  { name: "8 Camera", cameras: "8x 6MP HD", nvr: "8-channel", storage: "4TB+", price: "$2,990" },
];

export const INCLUSIONS = [
  "Professional installation",
  "24/7 continuous recording",
  "Remote mobile app viewing",
  "Motion detection notifications",
  "Night vision",
  "Cable management",
  "Full system configuration",
  "User training session",
];

export interface ServiceDetail {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  comingSoon?: boolean;
  ctaText?: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "cctv",
    title: "CCTV Systems",
    icon: Camera,
    description: "Most CCTV systems record what already happened. North Side Security installs systems designed to discourage intruders before damage is done. Our active deterrence cameras combine strobe lights and sirens with intelligent motion detection — triggered the moment someone enters your property.",
    features: [
      "6MP HD cameras with active deterrence (strobe + siren)",
      "Network Video Recorder (NVR) with continuous 24/7 recording",
      "Remote viewing via Hik-Connect mobile app",
      "Intelligent motion detection with push notifications",
      "Infrared night vision up to 30m",
      "Weatherproof (IP67 rated) for Australian conditions",
      "Upgrade path: Essential → Premium → Secure+",
    ],
  },
  {
    id: "alarms",
    title: "Alarm Systems",
    icon: Bell,
    description: "The Hikvision AX Pro is a professional-grade wireless alarm system with AES-128 encrypted sensors, built for reliable home and light commercial security. Control it from your phone, integrate it with your CCTV, and never pay a monitoring lock-in fee.",
    features: [
      "Hikvision AX Pro wireless alarm panel",
      "AES-128 encrypted door/window sensors",
      "Pet-friendly PIR motion detectors",
      "Hik-Connect app for arm/disarm and alerts",
      "Integration with Hikvision CCTV systems",
      "No monitoring lock-in contracts",
      "Optional professional monitoring available",
    ],
  },
  {
    id: "intercoms",
    title: "Intercoms",
    icon: Phone,
    description: "We're currently building our intercom offering — video intercom systems for homes and multi-dwelling properties. Register your interest and we'll be in touch when packages are available.",
    features: [],
    comingSoon: true,
    ctaText: "Register Interest",
  },
  {
    id: "network",
    title: "Network & WiFi Installation",
    icon: Wifi,
    description: "Reliable CCTV and security systems need a solid network foundation. We install structured data cabling, wireless access points, and network infrastructure for homes and small businesses across Perth's northern suburbs.",
    features: [
      "WiFi coverage assessment and access point installation",
      "Cat6 data cabling throughout your property",
      "Ceiling and wall-mounted access points",
      "Network rack setup (router, switch, patch panel)",
      "Small business network installation",
      "Integration with CCTV and alarm systems",
    ],
  },
];
