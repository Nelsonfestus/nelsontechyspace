'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { 
  Code, Smartphone, Bot, Layout, Zap, Rocket, 
  Users, Briefcase, Award, ChevronRight, ArrowRight, CheckCircle2, 
  Globe, LayoutDashboard, Database, Star, Link, Mail, Menu, X
} from 'lucide-react';
import styles from './page.module.css';

// Animation variants for extreme 3D scrolling
const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 150, 
    rotateX: 45, 
    scale: 0.8,
    z: -300
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    scale: 1,
    z: 0,
    transition: { 
      type: "spring", 
      damping: 20, 
      stiffness: 70,
      mass: 0.8
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroRotateX = useTransform(scrollYProgress, [0, 0.2], [0, -45]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`} style={{ background: isScrolled ? 'rgba(5, 5, 15, 0.9)' : 'rgba(5, 5, 15, 0.3)' }}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <Zap className={styles.logoIcon} />
              <span>Nelson<span className={styles.textGradient}>TechySpace</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className={styles.desktopMenu}>
              <a href="#about" className={styles.navLink}>About</a>
              <a href="#services" className={styles.navLink}>Services</a>
              <a href="#portfolio" className={styles.navLink}>Portfolio</a>
              <a href="#contact" className={styles.navLink}>Contact</a>
            </div>

            <div className={styles.navActions}>
              <button className={`${styles.navButton} ${styles.hideMobile}`}>Let's Talk</button>
              <button className={styles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a href="#about" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#services" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
            <a href="#contact" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <button className={styles.btnPrimary} style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}>
              Let's Talk
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div className={styles.heroBg} style={{ y }}>
          <div className={styles.glowCircle1}></div>
          <div className={styles.glowCircle2}></div>
        </motion.div>
        
        <div className={styles.container}>
          <motion.div 
            className={styles.heroContent}
            style={{ rotateX: heroRotateX, opacity: heroOpacity, scale: heroScale, transformOrigin: 'top center' }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.heroBadge}>
              <SparklesIcon size={16} className={styles.logoIcon} />
              Welcome to the Future of Digital
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Building High-Converting <br/>
              <span className={styles.textGradient}>Digital Experiences</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
              I craft premium websites, seamless mobile applications, intelligent bots, and automation systems that don't just look stunning—they turn visitors into loyal clients.
            </motion.p>
            
            <motion.div variants={fadeInUp} className={styles.heroActions}>
              <button className={styles.btnPrimary}>
                View Portfolio <ArrowRight size={20} />
              </button>
              <a href="#contact" className={styles.btnSecondary} style={{ display: 'inline-flex', alignItems: 'center' }}>
                Get a Free Landing Page
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Social Proof Bar */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.trustMetrics}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: <Users size={24} />, value: "100+", label: "Clients Satisfied" },
              { icon: <Award size={24} />, value: "4+ Years", label: "of Experience" },
              { icon: <LayoutDashboard size={24} />, value: "100+", label: "Websites Built" },
              { icon: <CheckCircle2 size={24} />, value: "100%", label: "Success Rate" }
            ].map((metric, i) => (
              <motion.div key={i} variants={fadeInUp} className={styles.metricItem}>
                <div className={styles.metricIcon}>{metric.icon}</div>
                <div>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Infinite Marquee */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <div className={styles.partnerLogo}>Upwork</div>
                <div className={styles.partnerLogo}>Freelancer</div>
                <div className={styles.partnerLogo}>Toptal</div>
                <div className={styles.partnerLogo}>Guru</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <motion.div 
              className={styles.aboutContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
                The Mind Behind <br/><span className={styles.textGradient}>The Code</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className={styles.sectionSubtitle}>
                I'm an Entrepreneur & Certified Website Developer passionate about architecting scalable, revenue-generating digital assets. I blend cutting-edge aesthetics with robust engineering to elevate brands to the next level.
              </motion.p>
              
              <div className={styles.aboutStats}>
                <motion.div variants={fadeInUp} className={styles.statCard}>
                  <div className={styles.statValue}>150+</div>
                  <div className={styles.metricLabel}>Projects Delivered</div>
                </motion.div>
                <motion.div variants={fadeInUp} className={styles.statCard}>
                  <div className={styles.statValue}>$2M+</div>
                  <div className={styles.metricLabel}>Client Revenue Generated</div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.aboutImageWrap}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.aboutImageGlow}></div>
              <div className={styles.aboutProfile}>
                <img src="/profile.png" alt="Nelson - Mind Behind the Code" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.section} style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionTitle}
            >
              Mastering the <span className={styles.textGradient}>Digital Spectrum</span>
            </motion.h2>
          </div>
          
          <motion.div 
            className={styles.servicesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { icon: <Layout />, title: "Website Design", desc: "Pixel-perfect, high-converting interfaces crafted with psychology and stunning aesthetics." },
              { icon: <Code />, title: "Website Development", desc: "Fast, SEO-optimized, and scalable websites built with modern frameworks like Next.js." },
              { icon: <Smartphone />, title: "Mobile App Development", desc: "Seamless and engaging native/hybrid mobile experiences for iOS and Android." },
              { icon: <Zap />, title: "Vibe Coding", desc: "Infusing unique brand essence and kinetic motion into every line of code we write." },
              { icon: <Bot />, title: "Bot Development", desc: "Intelligent automation, AI agents, and conversational bots that run 24/7." },
              { icon: <Globe />, title: "Deployment & Scaling", desc: "Flawless launch architectures ensuring 99.9% uptime and auto-scaling." }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Selected <span className={styles.textGradient}>Masterpieces</span></h2>
            <p className={styles.sectionSubtitle}>A glimpse into the digital realities we've built.</p>
          </div>
          
          <motion.div 
            className={styles.portfolioGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { title: "Time Network Global", url: "https://timenetworkglobal.com/", tags: ["Corporate", "Global", "Web"], image: "/time_network_mockup.png" },
              { title: "Ridin JS", url: "https://ridinjs.com", tags: ["JavaScript", "App", "Dynamic"], image: "/ridin_js_mockup.png" },
              { title: "Muznit Laundry", url: "https://muznit.com/laundry/", tags: ["Management System", "Dashboard", "SaaS"], image: "/muznit_laundry_mockup.png" },
              { title: "Elevate Fit Coaching", url: "https://www.elevatefitcoaching.co.uk/", tags: ["Coaching", "Booking", "Brand"], image: "/elevate_fit_mockup.png" }
            ].map((project, i) => (
              <a href={project.url} target="_blank" rel="noopener noreferrer" key={i} style={{ display: 'block' }}>
                <motion.div variants={fadeInUp} className={styles.projectCard}>
                  <div className={styles.projectImage} style={{ padding: 0 }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className={styles.projectContent}>
                    <div className={styles.projectTags}>
                      {project.tags.map(tag => (
                        <span key={tag} className={styles.projectTag}>{tag}</span>
                      ))}
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.viewProject}>
                      Visit Project <ChevronRight size={18} />
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className={styles.section} style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Path to <span className={styles.textGradient}>Launch</span></h2>
          </div>
          
          <motion.div 
            className={styles.processTimeline}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision, market, and business goals." },
              { step: "02", title: "Design", desc: "Architecting wireframes and premium interactive UI/UX." },
              { step: "03", title: "Development", desc: "Breathing life into designs with robust actual code." },
              { step: "04", title: "Deployment", desc: "Testing, launching, and continuous optimization." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className={styles.processStep}>
                <div className={styles.stepNumber}>{item.step}</div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Clients <span className={styles.textGradient}>Say</span></h2>
            <p className={styles.sectionSubtitle}>Don't just take our word for it.</p>
          </div>
          
          <motion.div 
            className={styles.testimonialSlider}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.testimonialTrack}>
              {[
                { author: "Seasons Team", quote: "Nelson delivered an exceptional experience for Seasons. The web app is faster, and our conversion rate skyrocketed. Highly recommended for premium vibe coding!" },
                { author: "Filters Inc", quote: "The automation and bots built for Filters saved us hundreds of hours. Nelson Techy Space understands deep technical implementation while keeping the UI stunning." },
                { author: "Timing Tech", quote: "Flawless execution from Discovery to Deployment. The Timing platform scale test passed with flying colors thanks to Nelson's architectural expertise." },
                { author: "Seasons Team", quote: "Nelson delivered an exceptional experience for Seasons. The web app is faster, and our conversion rate skyrocketed. Highly recommended for premium vibe coding!" },
                { author: "Filters Inc", quote: "The automation and bots built for Filters saved us hundreds of hours. Nelson Techy Space understands deep technical implementation while keeping the UI stunning." },
                { author: "Timing Tech", quote: "Flawless execution from Discovery to Deployment. The Timing platform scale test passed with flying colors thanks to Nelson's architectural expertise." }
              ].map((review, i) => (
                <div key={i} className={styles.testimonialCard}>
                  <p className={styles.testimonialQuote}>"{review.quote}"</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}><Star size={24} /></div>
                    <div className={styles.authorInfo}>
                      <h4>{review.author}</h4>
                      <p>Verified Client</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg}></div>
        <div className={styles.container}>
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Let's Build Something <br/><span className={styles.textGradient}>Powerful Together</span></h2>
            <p className={styles.sectionSubtitle} style={{ marginBottom: '2rem' }}>
              Ready to dominate your niche with a high-converting digital experience?
            </p>
            <button className={styles.btnPrimary} style={{ margin: '0 auto' }}>
              Book a Free Consultation <Rocket size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Claim Your <span className={styles.textGradient}>Free Landing Page</span></h2>
            <p className={styles.sectionSubtitle}>Fill out the form below to get started on your free premium landing page.</p>
          </div>
          <motion.div 
            className={styles.formContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Name</label>
                <input type="text" className={styles.formInput} placeholder="Your Name" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email</label>
                <input type="email" className={styles.formInput} placeholder="your@email.com" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Project Details</label>
                <textarea className={styles.formTextarea} placeholder="Tell me about your vision..."></textarea>
              </div>
              <button type="submit" className={styles.btnPrimary} style={{ width: '100%', justifyContent: 'center' }}>
                Submit Request <Rocket size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <div className={styles.logo}>
                <Zap className={styles.logoIcon} />
                <span>Nelson<span className={styles.textGradient}>TechySpace</span></span>
              </div>
              <p className={styles.footerDesc}>Building the future of the web. Premium experiences tailored for massive conversions.</p>
              <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/nelsontachyspace" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Ig</a>
                <a href="https://www.upwork.com/freelancers/~01580e5ae18748908d" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Up</a>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Quick Links</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                <li>Home</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            © {new Date().getFullYear()} NelsonTechySpace. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

// Sparkle helper component since we missed importing it
function SparklesIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size} height={props.size} 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" 
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      className={props.className}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    </svg>
  );
}
