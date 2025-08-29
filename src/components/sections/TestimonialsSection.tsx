import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeIn, textVariant } from "@/lib/animations";

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = useCallback(() => {
    setCurrent((current) => (current === TESTIMONIALS.length - 1 ? 0 : current + 1));
  }, []);

  const prev = () => {
    setCurrent((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, next]);

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={textVariant}
            className="text-3xl md:text-4xl font-bold mb-4 text-accent-dark"
          >
            Client <span className="text-primary">Testimonials</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.2)}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="text-lg text-muted-foreground"
          >
            Don't just take our word for it. Hear what our clients have to say about working with QuoreTex.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <Card className="border-none shadow-xl bg-background">
            <CardContent className="p-8 md:p-12">
              <div className="absolute top-8 left-8 text-primary/20">
                <Quote className="h-16 w-16" />
              </div>
              
              <div className="relative z-10">
                {TESTIMONIALS.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: current === index ? 1 : 0,
                      x: current === index ? 0 : 20,
                      position: current === index ? "relative" : "absolute",
                    }}
                    transition={{ duration: 0.5 }}
                    className={current === index ? "block" : "hidden"}
                  >
                    <blockquote className="mb-8 text-lg md:text-xl italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {TESTIMONIALS.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 p-0 rounded-full ${
                  current === index ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;