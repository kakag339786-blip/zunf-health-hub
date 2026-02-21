import { motion } from "framer-motion";
import { Users, Target, Award, Heart, ShieldCheck, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import noorImg from "@/assets/team/noor.jpeg";
import faisalImg from "@/assets/team/faisal.png";
import ahsanImg from "@/assets/team/ahsan.png";
import muqeemImg from "@/assets/team/muqeem.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function About() {
  const team = [
    { name: "Mr. Noor Hassan", role: "CEO", img: noorImg },
    { name: "Mr. Faisal Mushtaq", role: "CFO", img: faisalImg },
    { name: "Mr. Ahsan Nadeem", role: "CTO", img: ahsanImg },
    { name: "Mr. Muqeem Malik", role: "SSE", img: muqeemImg },
  ];

  const values = [
    { icon: Heart, title: "Patient-Centric Care", desc: "Every decision starts with the patient's well-being at the center." },
    { icon: ShieldCheck, title: "Trust & Transparency", desc: "Complete honesty in pricing, results, and clinical partnerships." },
    { icon: Target, title: "Precision & Accuracy", desc: "Lab-grade diagnostics delivered with zero compromise on quality." },
    { icon: Award, title: "Excellence", desc: "Continuous improvement in service delivery and patient outcomes." },
    { icon: Users, title: "Accessibility", desc: "Bringing quality healthcare within reach of every family in Pakistan." },
    { icon: Clock, title: "Reliability", desc: "24/7 availability with on-time sample collection and fast report delivery." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-medical-blue-light py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-semibold text-sage-green uppercase tracking-wider">About Us</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-extrabold text-primary mt-2">
              Revolutionizing Healthcare in Pakistan
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ZUNF Medicare is Pakistan's trusted partner for preventive healthcare. We empower schools, workplaces, and families with home diagnostics, consultancy, and patient care — making hospital-quality healthcare accessible from your doorstep.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-heading font-bold text-foreground">Our Mission</motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">
                To deliver affordable, accessible, and high-quality diagnostic and preventive healthcare services across Pakistan. We partner with the country's leading laboratories and healthcare institutions to ensure every family gets the medical attention they deserve — right at their doorstep.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-heading font-bold text-foreground">Our Vision</motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">
                To become the undisputed leader in home healthcare services across South Asia, integrating advanced diagnostics, telemedicine, and AI-driven patient care into a singular, frictionless digital experience that puts patients first.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-sage-green uppercase tracking-wider">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">What Drives Us</h2>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <Card className="h-full border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <v.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-sage-green uppercase tracking-wider">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <Card key={m.name} className="border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-heading font-bold text-foreground">{m.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
