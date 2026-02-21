import { motion } from "framer-motion";
import { Syringe, MonitorPlay, Activity, Sparkles, Stethoscope, Apple, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const services = [
  {
    id: "blood-tests",
    icon: Syringe,
    title: "At-Home Blood Tests",
    desc: "Precision blood draws conducted in the comfort of your residence by certified phlebotomists. Track your rider in real-time and receive digital reports within 24 hours.",
    features: ["Certified phlebotomists", "Real-time rider tracking", "Reports within 24 hours", "20% discount on all tests"],
  },
  {
    id: "radiology",
    icon: Activity,
    title: "Advanced Radiology",
    desc: "Seamless booking and rapid, digitized imaging results from our partner diagnostic centers. X-rays, MRI, CT scans, and ultrasound — all accessible from your portal.",
    features: ["MRI & CT Scans", "Digital image access", "Expert radiologist reports", "Home sample collection"],
  },
  {
    id: "telemedicine",
    icon: MonitorPlay,
    title: "Telemedicine & Consultations",
    desc: "Instant, secure video consultations with qualified doctors from the comfort of your home. Available for general medicine, specialist referrals, and follow-up appointments.",
    features: ["Secure video calls", "Specialist referrals", "E-prescriptions", "Available 24/7"],
  },
  {
    id: "home-care",
    icon: Stethoscope,
    title: "Home Patient Care",
    desc: "Continuous, compassionate nursing and biometric monitoring for chronic or post-operative conditions. Our trained nurses provide professional care at your bedside.",
    features: ["Trained nursing staff", "Chronic care management", "Post-operative care", "Daily health monitoring"],
  },
  {
    id: "aesthetics",
    icon: Sparkles,
    title: "Aesthetics & Dentistry",
    desc: "Boutique, evidence-based dermatological and dental interventions focusing on superior outcomes through our partner clinics and specialists.",
    features: ["Skin treatments", "Dental procedures", "Expert specialists", "Follow-up care included"],
  },
  {
    id: "nutrition",
    icon: Apple,
    title: "Nutrition Analysis",
    desc: "Data-driven dietary mapping generated from your blood test results and health profile. Personalized meal plans and nutritionist consultations for optimal health.",
    features: ["Personalized meal plans", "Based on lab results", "Nutritionist consults", "Diet tracking tools"],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-medical-blue-light py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-semibold text-sage-green uppercase tracking-wider">Our Services</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-extrabold text-primary mt-2">
              Comprehensive Healthcare Solutions
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              From at-home diagnostics to telemedicine and nutrition analysis — we bring the entire healthcare ecosystem to your doorstep.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <Card className="border border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <motion.div variants={fadeUp} className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-heading font-bold text-foreground">{service.title}</motion.h2>
                      <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">{service.desc}</motion.p>
                      <motion.ul variants={fadeUp} className="mt-6 space-y-3">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-sage-green shrink-0" />
                            {f}
                          </li>
                        ))}
                      </motion.ul>
                      <motion.div variants={fadeUp} className="mt-8">
                        <Button className="h-12 px-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
                          Book Now <ArrowRight className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                    <div className="bg-surface-alt flex items-center justify-center p-12 lg:p-16">
                      <div className="w-32 h-32 rounded-3xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="h-16 w-16 text-primary/40" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
