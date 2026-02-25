import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, useSpring } from 'framer-motion'
import { TrendingUp, School, Public, Handshake } from '@mui/icons-material'
import Container from '../Container/Container'
import Section from '../Section/Section'
import Button from '../Button/Button'
import './Hero.css'

const CanvasSequence = ({ scrollYProgress }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameCount = 192;

  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.onload = () => {
        loadedCount++;
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, 1280, 720);
        }
      };
      img.src = `/alcohol2/ezgif-frame-${frameNum}.jpg`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Scale canvas internal resolution for High-DPI / Retina displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = 1280 * dpr;
      canvas.height = 720 * dpr;
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map the 0-1 progress perfectly to our 192 frames!
    let frameIndex = Math.floor(latest * (frameCount - 1));
    if (frameIndex >= frameCount) frameIndex = frameCount - 1;
    if (frameIndex < 0) frameIndex = 0;

    const canvas = canvasRef.current;
    if (canvas && images[frameIndex]) {
      const img = images[frameIndex];
      if (img.complete && img.naturalWidth > 0) {
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.clearRect(0, 0, 1280, 720);
        ctx.drawImage(img, 0, 0, 1280, 720);
      }
    }
  });

  return (
    <canvas
      ref={canvasRef}
      className="canvas-bg"
      style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        display: 'block'
      }}
    />
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  // Track scroll exactly within the 400vh Hero container
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  // Inertial smooth scroll! Forces fast swipers to still watch the sequence over 3-4s
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 20,
    mass: 1.5
  });

  const trustItems = [
    {
      title: '$2.4M+ Raised',
      description: 'Across two campaign years (2023–2024).',
      icon: <TrendingUp sx={{ fontSize: 30, color: 'var(--gold)' }} />
    },
    {
      title: 'Student Success',
      description: 'Scholarships, career readiness, mentorship, and gap funding.',
      icon: <School sx={{ fontSize: 28, color: 'var(--gold)' }} />
    },
    {
      title: 'Nationwide Impact',
      description: 'Support delivered where the need is greatest.',
      icon: <Public sx={{ fontSize: 28, color: 'var(--gold)' }} />
    },
    {
      title: 'Partner-Driven',
      description: 'Hospitality & retail activations powered by the community.',
      icon: <Handshake sx={{ fontSize: 28, color: 'var(--gold)' }} />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="top" className="hero-scrollytelling" ref={heroRef}>

      {/* 1. STICKY BACKGROUND LAYER (Locked to viewport exactly for 400vh) */}
      <div className="sticky-canvas-wrapper">
        <div className="hero-media"></div>
        <div className="hero-bg"></div>
        <CanvasSequence scrollYProgress={smoothProgress} />
        {/* Adds vignette to ensure text readability */}
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* 2. SCROLLING CONTENT LAYER (Holds text exactly at the end) */}
      <div className="hero-scroll-content">

        {/* Forces user to scroll strictly through animation */}
        <div className="hero-scroll-spacer"></div>

        {/* Text appears at the very bottom as sticky unlocks and content flows */}
        <div className="hero-bottom-content">
          <Container>
            <motion.div
              className="hero-content"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="hero-main">
                <div className="hero-title-section">
                  <motion.div className="hero-banner">
                    Honoring a legacy, empowering tomorrow.<br />
                    Uncle Nearest is a proud Partner of HBCU Heroes.
                  </motion.div>
                </div>

                <motion.div className="hero-actions">
                  <Button variant="primary" href="#donate">Donate Now</Button>
                </motion.div>

                <motion.p className="partner-link">
                  <a href="#donate">Partner Account? Click here to donate now.</a>
                </motion.p>

                <motion.div className="tax-notice-hero">
                  Donations are processed through HBCU Heroes, a 501(c)(3) nonprofit organization, and are tax-deductible to the extent allowed by law.
                </motion.div>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </div>

    </section>
  );
}



export default Hero
