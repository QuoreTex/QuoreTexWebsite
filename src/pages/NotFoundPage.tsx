import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { fadeIn } from "@/lib/animations";

const NotFoundPage = () => {
  return (
    <motion.section 
      initial="hidden"
      animate="show"
      variants={fadeIn("down")}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="container px-4 md:px-6 text-center">
        <h1 className="text-8xl font-bold text-primary mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" asChild className="rounded-full px-8">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </motion.section>
  );
};

export default NotFoundPage;