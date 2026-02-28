"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
  onItemClick?: () => void;
}

const MotionLink = motion.create(Link);

export const MenuVertical = ({
  menuItems = [],
  color = "hsl(var(--foreground))",
  skew = 0,
  onItemClick,
}: MenuVerticalProps) => {
  return (
    <nav className="flex flex-col w-full" role="navigation" aria-label="Menu principal">
      {menuItems.map((item, index) => (
        <MotionLink
          key={index}
          to={item.href}
          onClick={onItemClick}
          initial="initial"
          whileHover="hover"
          whileFocus="hover"
          className="group relative flex items-center gap-4 border-b border-border py-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          style={{
            ["--menu-color" as string]: color,
          }}
        >
          <motion.div
            variants={{
              initial: { x: -20, opacity: 0 },
              hover: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ArrowRight
              aria-hidden="true"
              className="h-6 w-6"
              style={{ color: "var(--menu-color)" }}
            />
          </motion.div>

          <motion.span
            variants={{
              initial: { x: 0, skewX: 0 },
              hover: { x: 20, skewX: skew },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-display text-2xl md:text-4xl text-white"
          >
            {item.label}
          </motion.span>
        </MotionLink>
      ))}
    </nav>
  );
};
