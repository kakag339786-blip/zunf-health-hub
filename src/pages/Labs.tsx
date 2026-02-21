import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import chughtaiLogo from "@/assets/labs/chughtai.jpeg";
import dressaLogo from "@/assets/labs/dressa.jpeg";
import testzoneLogo from "@/assets/labs/testzone.jpeg";
import biotechLogo from "@/assets/labs/biotech.jpeg";
import ayzalLogo from "@/assets/labs/ayzal.jpeg";
import jinnahLogo from "@/assets/labs/jinnahmri.jpeg";
import esthetiqueLogo from "@/assets/labs/esthetique.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const labs = [
  { name: "Chughtai Lab", img: chughtaiLogo, desc: "Pakistan's largest and most trusted diagnostic laboratory chain with over 200+ collection centers nationwide.", discount: "20%" },
  { name: "Dr. Essa Laboratories", img: dressaLogo, desc: "A premier diagnostic center offering comprehensive pathology and radiology services.", discount: "15%" },
  { name: "Test Zone Diagnostic", img: testzoneLogo, desc: "Modern diagnostic center with state-of-the-art equipment and experienced pathologists.", discount: "15%" },
  { name: "BioTech Lahore Lab", img: biotechLogo, desc: "Advanced biotech laboratory providing cutting-edge molecular and genetic testing services.", discount: "10%" },
  { name: "Ayzal Lab", img: ayzalLogo, desc: "Reliable laboratory known for accurate results and fast turnaround times.", discount: "15%" },
  { name: "Jinnah MRI & Diagnostic", img: jinnahLogo, desc: "Comprehensive diagnostic center with advanced MRI, CT, and ultrasound capabilities.", discount: "10%" },
  { name: "Esthetique Canon", img: esthetiqueLogo, desc: "Premium aesthetic and cosmetic care center offering advanced skin and beauty treatments.", discount: "20%" },
];

export default function Labs() {
  return (
    <>
      <section className="bg-medical-blue-light py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-semibold text-sage-green uppercase tracking-wider">Our Labs</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-extrabold text-primary mt-2">
              Partnered with Pakistan's Best
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with Pakistan's leading diagnostic centers to deliver accurate, reliable results at discounted rates — right from your home.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {labs.map((lab) => (
              <motion.div key={lab.name} variants={fadeUp}>
                <Card className="h-full border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={lab.img} alt={lab.name} className="h-16 w-16 rounded-xl object-cover shrink-0" />
                      <div>
                        <h3 className="font-heading font-bold text-foreground">{lab.name}</h3>
                        <span className="px-2 py-0.5 rounded-full bg-sage-green-light text-sage-green text-xs font-bold">{lab.discount} OFF</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{lab.desc}</p>
                    <Button variant="outline" className="mt-6 rounded-full border-primary/20 text-primary hover:bg-primary/5 gap-2 font-semibold">
                      View Tests <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
