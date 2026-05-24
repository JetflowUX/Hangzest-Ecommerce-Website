import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Athlete working out"
          className="w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy"></div>
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-5xl"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-6 tracking-tight">
            HYDRATION THAT <br />
            <span className="text-citrus">WORKS AS HARD</span> <br />
            AS YOU DO
          </h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="text-xl md:text-2xl text-offwhite font-body mb-10 max-w-2xl mx-auto"
          >
            Premium electrolyte hydration built for the relentless. No sugar, no
            fillers, just pure performance.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/product">
              <Button variant="citrus" size="lg" className="w-full sm:w-auto">
                Shop Now
              </Button>
            </Link>
            <Link to="/product">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-navy"
              >
                Preorder Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-white/50"
      >
        <span className="font-display text-sm tracking-widest mb-2">
          SCROLL
        </span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
