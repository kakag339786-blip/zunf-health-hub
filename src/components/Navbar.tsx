import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, MessageCircle, Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Labs", to: "/labs" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "At-Home Blood Tests", to: "/services#blood-tests" },
      { label: "Radiology", to: "/services#radiology" },
      { label: "Telemedicine", to: "/services#telemedicine" },
      { label: "Home Patient Care", to: "/services#home-care" },
      { label: "Aesthetics & Dentistry", to: "/services#aesthetics" },
      { label: "Nutrition Analysis", to: "/services#nutrition" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl shadow-nav">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-heading font-extrabold text-primary lg:text-2xl">
              ZUNF
            </span>
            <span className="text-[10px] font-heading font-semibold tracking-widest text-sage-green uppercase lg:text-xs">
              Medicare
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <Link
                  to={link.to}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-secondary hover:text-primary ${
                    location.pathname === link.to
                      ? "text-primary bg-secondary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-background rounded-xl shadow-card-hover border border-border p-2 min-w-[220px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-4 py-2.5 text-sm rounded-lg text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-secondary hover:text-primary ${
                  location.pathname === link.to
                    ? "text-primary bg-secondary"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Search Bar */}
        <div className={`hidden md:flex items-center flex-1 max-w-md mx-4 transition-all ${searchFocused ? 'max-w-lg' : ''}`}>
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for labs, tests..."
              className="w-full h-11 pl-10 pr-4 rounded-full bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Button variant="ghost" size="sm" className="gap-2 text-sage-green hover:text-sage-green hover:bg-sage-green-light">
            <MessageCircle className="h-4 w-4" />
            <span className="hidden xl:inline">WhatsApp</span>
          </Button>
          <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-11 font-semibold">
            <Phone className="h-4 w-4" />
            Call Rider
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for labs, tests..."
                  className="w-full h-12 pl-10 pr-4 rounded-full bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      location.pathname === link.to
                        ? "text-primary bg-secondary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1 gap-2 h-12 text-sage-green border-sage-green/30">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button className="flex-1 gap-2 h-12 bg-primary text-primary-foreground rounded-full font-semibold">
                  <Phone className="h-4 w-4" />
                  Call Rider
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
