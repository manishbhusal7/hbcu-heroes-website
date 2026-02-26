import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, useSpring } from 'framer-motion'
import { TrendingUp, School, Public, Handshake } from '@mui/icons-material'
import Container from '../Container/Container'
import Section from '../Section/Section'
import Button from '../Button/Button'
import './Hero.css'

const VideoSequence = ({ scrollYProgress }) => {
  const videoRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Wait until metadata is loaded to ensure we have the exact duration
    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
      // Pre-seek to frame 0 immediately
      video.currentTime = 0;
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Helps unlock the video for mobile devices by engaging play on first interaction 
    const unlockVideo = () => {
      if (video.paused) {
        video.play().then(() => {
          video.pause();
        }).catch(() => { });
      }
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('click', unlockVideo);
    };

    window.addEventListener('touchstart', unlockVideo);
    window.addEventListener('click', unlockVideo);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('touchstart', unlockVideo);
      window.removeEventListener('click', unlockVideo);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const video = videoRef.current;
    if (video && video.readyState >= 1) { // 1 = HAVE_METADATA
      const duration = videoDuration || video.duration;
      if (duration > 0) {
        // Map 0-1 progress to the exact video timeline in seconds
        let targetTime = latest * duration;
        // Safety bounds
        if (targetTime > duration) targetTime = duration;
        if (targetTime < 0) targetTime = 0;

        // Use requestAnimationFrame for smoother DOM repaints when scrubbing
        requestAnimationFrame(() => {
          video.currentTime = targetTime;
        });
      }
    }
  });

  return (
    <video
      ref={videoRef}
      className="canvas-bg"
      src="/alcohol2/Whiskey_Video_Scrub.mp4"
      playsInline
      muted
      preload="auto"
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
        <VideoSequence scrollYProgress={smoothProgress} />
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
