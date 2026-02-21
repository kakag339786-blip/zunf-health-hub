import { motion } from "framer-motion";
import { ArrowRight, Upload, ShieldCheck, Microscope, Clock, UserCheck, Activity, Shield, ShoppingCart, Heart, Stethoscope, Sparkles, Syringe, MonitorPlay, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

// Lab logos
import chughtaiLogo from "@/assets/labs/chughtai.jpeg";
import dressaLogo from "@/assets/labs/dressa.jpeg";
import testzoneLogo from "@/assets/labs/testzone.jpeg";
import biotechLogo from "@/assets/labs/biotech.jpeg";
import ayzalLogo from "@/assets/labs/ayzal.jpeg";
import jinnahLogo from "@/assets/labs/jinnahmri.jpeg";
import esthetiqueLogo from "@/assets/labs/esthetique.jpeg";

// Client logos
import artemisLogo from "@/assets/clients/artemis.jpeg";
import pitbLogo from "@/assets/clients/pitb.png";
import kheltaLogo from "@/assets/clients/kheltapunjab.png";
import niclLogo from "@/assets/clients/nicl.jpeg";
import moittLogo from "@/assets/clients/moitt.jpeg";

// Team
import noorImg from "@/assets/team/noor.jpeg";
import faisalImg from "@/assets/team/faisal.png";
import ahsanImg from "@/assets/team/ahsan.png";
import muqeemImg from "@/assets/team/muqeem.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Hero ────────────────────────────────
function HeroSection() {
  return (
    <section className="relative bg-medical-blue-light overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-sage-green-light text-sage-green text-sm font-semibold mb-6">
              ✦ Har Qadam Pe Aapkay Saath
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary leading-tight">
              Hospital Quality Diagnostics, in the Comfort of Your Home.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Official Partners of Chughtai Lab & IDC. Get 20% OFF instantly on all lab tests booked through Zunf Medicare.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Book a Service
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-semibold border-primary/20 text-primary hover:bg-primary/5 gap-2">
                <Upload className="h-5 w-5" />
                Upload Prescription
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex gap-8">
              {[
                { label: "Affordable", icon: "💰" },
                { label: "Easily Accessible", icon: "📍" },
                { label: "Convenient", icon: "⏰" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Zunf Medicare phlebotomist greeting a family at their doorstep"
              className="w-full rounded-3xl shadow-card-hover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Ticker ────────────────────────────
function TrustTicker() {
  const items = ["Chughtai Lab", "IDC", "Punjab Healthcare Commission", "ISO Certified", "Dr. Essa Lab", "BioTech Lab", "Test Zone"];
  return (
    <div className="bg-trust-bar border-y border-border py-4 overflow-hidden">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Partner Labs ────────────────────────────
function PartnerLabs() {
  const labs = [
    { name: "Chughtai Lab", img: chughtaiLogo },
    { name: "Dr. Essa Lab", img: dressaLogo },
    { name: "Test Zone Diagnostic", img: testzoneLogo },
    { name: "BioTech Lahore", img: biotechLogo },
    { name: "Ayzal Lab", img: ayzalLogo },
    { name: "Jinnah MRI & Diagnostic", img: jinnahLogo },
    { name: "Esthetique Canon", img: esthetiqueLogo },
  ];
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-sm font-semibold text-sage-green uppercase tracking-wider">Trusted Networks</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Our Partnered Labs</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We collaborate with Pakistan's leading diagnostic centers to ensure accuracy and reliability.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {labs.map((lab) => (
            <motion.div key={lab.name} variants={fadeUp}>
              <Card className="group cursor-pointer border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <img src={lab.img} alt={lab.name} className="h-16 w-16 rounded-xl object-cover" />
                  <span className="text-sm font-medium text-foreground text-center">{lab.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <motion.div variants={fadeUp}>
            <Link to="/labs">
              <Card className="h-full cursor-pointer border border-dashed border-primary/30 hover:border-primary hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-2 h-full">
                  <ArrowRight className="h-6 w-6 text-primary" />
                  <span className="text-sm font-semibold text-primary">View All Labs</span>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Popular Packages ────────────────────────
function PopularPackages() {
  const packages = [
    {
      title: "Heart Health Package",
      icon: Heart,
      tests: ["Lipid Profile", "hs-CRP", "Blood Sugar - Fasting", "ECG", "TSH", "BP + BMI"],
      original: 7000,
      discounted: 4200,
      discount: 40,
    },
    {
      title: "Wellness Journey Package",
      icon: Activity,
      tests: ["CBC", "Lipid Profile", "LFT", "RFT", "Blood Sugar", "ESR", "Urine R/E"],
      original: 7100,
      discounted: 4000,
      discount: 44,
    },
    {
      title: "Special Health Profile",
      icon: Shield,
      tests: ["CBC", "Complete LFT", "Complete RFT", "Thyroid Profile", "Urine R/E", "Vitamin D", "Uric Acid"],
      original: 11450,
      discounted: 6500,
      discount: 43,
    },
    {
      title: "Vitamin Health Profile",
      icon: Sparkles,
      tests: ["Vitamin D", "Vitamin B12", "Calcium", "Iron Studies", "Serum Iron", "TIBC", "Ferritin"],
      original: 9500,
      discounted: 5600,
      discount: 41,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface-alt">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-sm font-semibold text-sage-green uppercase tracking-wider">Health Packages</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Comprehensive Health Screening</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Designed for your wellness journey with up to 44% discount.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <motion.div key={pkg.title} variants={fadeUp}>
              <Card className="h-full border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <pkg.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-sage-green-light text-sage-green text-xs font-bold">{pkg.discount}% OFF</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-3">{pkg.title}</h3>
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {pkg.tests.map((t) => (
                      <li key={t} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-sage-green shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">Rs. {pkg.discounted.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">Rs. {pkg.original.toLocaleString()}</span>
                  </div>
                  <Button className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-semibold">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Health Card CTA ────────────────────────
function HealthCardSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-primary-foreground">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Book Your Health Card</h2>
              <p className="mt-4 text-primary-foreground/80 text-lg leading-relaxed">
                Keep your medical information organized and accessible with our digital health card. Get up to 40% discount on big labs of Pakistan.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { title: "40% Discount", desc: "On big labs of Pakistan" },
                  { title: "Digital Records", desc: "Access anytime, anywhere" },
                  { title: "Secure & Private", desc: "Encrypted & protected" },
                  { title: "Easy Access", desc: "Quick medical info access" },
                ].map((f) => (
                  <div key={f.title} className="bg-primary-foreground/10 rounded-xl p-4">
                    <h4 className="font-heading font-bold text-sm">{f.title}</h4>
                    <p className="text-xs text-primary-foreground/70 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 h-14 px-8 rounded-full bg-sage-green text-accent-foreground hover:bg-sage-green/90 font-semibold gap-2">
                Book Health Card
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-64 h-40 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                <div className="text-center">
                  <ShieldCheck className="h-12 w-12 mx-auto text-sage-green mb-2" />
                  <span className="text-sm font-semibold">ZUNF Health Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Grid ────────────────────────
function ServicesGrid() {
  const services = [
    { icon: Syringe, title: "At-Home Phlebotomy", desc: "Precision blood draws conducted in your home by elite specialists, with real-time tracking." },
    { icon: MonitorPlay, title: "Telemedicine & Triage", desc: "Instant, secure video consultations with qualified doctors from the comfort of your home." },
    { icon: Activity, title: "Advanced Radiology", desc: "Seamless booking and rapid digitized imaging results integrated into your portal." },
    { icon: Sparkles, title: "Aesthetic Medicine & Dentistry", desc: "Boutique, evidence-based dermatological and dental interventions with superior outcomes." },
    { icon: Stethoscope, title: "Home Patient Care", desc: "Continuous, compassionate nursing and biometric monitoring for chronic conditions." },
    { icon: Apple, title: "Nutrition Analysis", desc: "Data-driven dietary mapping from your real-time biometric and laboratory feedback." },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface-alt">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-sm font-semibold text-sage-green uppercase tracking-wider">What We Offer</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Our Core Services</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <Card className="h-full border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── KPI Trust Bar ────────────────────────
function KPIBar() {
  const items = [
    { icon: ShieldCheck, label: "Punjab Healthcare Commission Registered" },
    { icon: Microscope, label: "Advanced At-Home Lab Diagnostics" },
    { icon: Clock, label: "24/7 Customer Support" },
    { icon: UserCheck, label: "Certified Phlebotomists" },
  ];
  return (
    <section className="py-10 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage-green-light flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5 text-sage-green" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-sage-green-light">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="text-sm font-semibold text-sage-green uppercase tracking-wider">Get Started Today</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Get up to 40% off on your healthcare services
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-lg mx-auto">
            ZUNF Medicare offers cost-effective diagnostic and preventive healthcare services to you and your family.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Button size="lg" className="h-14 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold gap-2">
              Book a Service
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Trusted Clients ─────────────────────
function TrustedClients() {
  const clients = [
    { name: "Artemis", img: artemisLogo },
    { name: "PITB", img: pitbLogo },
    { name: "Khelta Punjab", img: kheltaLogo },
    { name: "NICL", img: niclLogo },
    { name: "MOITT", img: moittLogo },
    { name: "Chughtai Lab", img: chughtaiLogo },
    { name: "Dr. Essa Lab", img: dressaLogo },
  ];
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-sage-green uppercase tracking-wider">Our Trusted Clients</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-12">Trusted by Leading Organizations</h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left-slow">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="mx-8 shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img src={c.img} alt={c.name} className="h-14 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Team ────────────────────────────────
function TeamSection() {
  const team = [
    { name: "Mr. Noor Hassan", role: "CEO", img: noorImg },
    { name: "Mr. Faisal Mushtaq", role: "CFO", img: faisalImg },
    { name: "Mr. Ahsan Nadeem", role: "CTO", img: ahsanImg },
    { name: "Mr. Muqeem Malik", role: "SSE", img: muqeemImg },
  ];
  return (
    <section className="py-16 lg:py-24 bg-surface-alt">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-sm font-semibold text-sage-green uppercase tracking-wider">Our Team</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Meet the Leadership</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Passionate professionals dedicated to revolutionizing healthcare in Pakistan.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <motion.div key={member.name} variants={fadeUp}>
              <Card className="border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Lab Tests Section ────────────────────
function LabTestsSection() {
  const tests = [
    { name: "Complete Blood Count (CBC)", lab: "Chughtai Lab", original: 800, discounted: 640 },
    { name: "Rapid Blood Glucose Testing", lab: "Chughtai Lab", original: 200, discounted: 160 },
    { name: "Blood Glucose (Strip Method)", lab: "Chughtai Lab", original: 350, discounted: 280 },
    { name: "Red Cell Phenotyping", lab: "Chughtai Lab", original: 10000, discounted: 8000 },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-sm font-semibold text-sage-green uppercase tracking-wider">Book Lab Tests</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Book Lab Tests at Chughtai Lab</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Get accurate and reliable lab tests with 20% discount at Chughtai Lab.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tests.map((test) => (
            <motion.div key={test.name} variants={fadeUp}>
              <Card className="h-full border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <span className="px-2 py-0.5 rounded-full bg-sage-green-light text-sage-green text-xs font-bold self-start mb-3">20% OFF</span>
                  <h3 className="font-heading font-bold text-foreground text-sm mb-1">{test.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">at {test.lab}</p>
                  <div className="flex items-baseline gap-2 mt-auto mb-4">
                    <span className="text-xl font-bold text-primary">Rs. {test.discounted.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">Rs. {test.original.toLocaleString()}</span>
                  </div>
                  <Button size="sm" className="w-full h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-semibold">
                    <ShoppingCart className="h-3.5 w-3.5" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-8">
          <Link to="/labs" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
            See More Tests <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Main Index Page ─────────────────────
export default function Index() {
  return (
    <>
      <HeroSection />
      <TrustTicker />
      <KPIBar />
      <PartnerLabs />
      <LabTestsSection />
      <PopularPackages />
      <HealthCardSection />
      <ServicesGrid />
      <CTASection />
      <TrustedClients />
      <TeamSection />
    </>
  );
}
