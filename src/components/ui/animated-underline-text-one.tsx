import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  textClassName?: string;
  underlineClassName?: string;
  underlinePath?: string;
  underlineHoverPath?: string;
  underlineDuration?: number;
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      text,
      className,
      textClassName,
      underlineClassName,
      underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
      underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
      underlineDuration = 1.5,
      ...props
    },
    ref
  ) => {
    const pathVariants: Variants = {
      hidden: {
        pathLength: 0,
        opacity: 0,
      },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          duration: underlineDuration,
          ease: "easeInOut",
        },
      },
    };

    return (
      <div ref={ref} className={cn("inline-block", className)} {...props}>
        <div className="group relative inline-block cursor-pointer">
          <span className={cn("relative z-10", textClassName)}>{text}</span>
          <svg
            className={cn("absolute -bottom-1 left-0 w-full", underlineClassName)}
            viewBox="0 0 300 20"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d={underlinePath}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                default: { duration: underlineDuration, ease: "easeInOut" },
              }}
            />
          </svg>
        </div>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
