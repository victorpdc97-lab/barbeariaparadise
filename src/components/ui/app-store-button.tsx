import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AppStoreButtonProps = React.ComponentProps<typeof Button>;

export function AppStoreButton({
  className,
  ...props
}: Omit<AppStoreButtonProps, "children">) {
  return (
    <Button
      variant="outline"
      className={cn(
        "h-14 px-5 gap-3 rounded-xl border-foreground/20 bg-foreground text-primary-foreground hover:bg-foreground/90 hover:text-primary-foreground",
        className
      )}
      {...props}
    >
      <AppleIcon className="size-8 fill-current" />
      <div className="flex flex-col items-start">
        <span className="text-[10px] font-normal leading-tight tracking-normal normal-case">
          Disponível na
        </span>
        <span className="text-lg font-semibold leading-tight tracking-normal normal-case">
          App Store
        </span>
      </div>
    </Button>
  );
}

export function GooglePlayButton({
  className,
  ...props
}: Omit<AppStoreButtonProps, "children">) {
  return (
    <Button
      variant="outline"
      className={cn(
        "h-14 px-5 gap-3 rounded-xl border-foreground/20 bg-foreground text-primary-foreground hover:bg-foreground/90 hover:text-primary-foreground",
        className
      )}
      {...props}
    >
      <GooglePlayIcon className="size-7" />
      <div className="flex flex-col items-start">
        <span className="text-[10px] font-normal leading-tight tracking-normal normal-case">
          Disponível no
        </span>
        <span className="text-lg font-semibold leading-tight tracking-normal normal-case">
          Google Play
        </span>
      </div>
    </Button>
  );
}

function AppleIcon({
  fill = "currentColor",
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        fill={fill}
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}

function GooglePlayIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path fill="#EA4335" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
      <path fill="#34A853" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
      <path fill="#4285F4" d="M461.1 242.4L385.3 198l-60 60.1 60 60.1 75.8-44.4c25-14.7 25-46.1 0-31.4z" />
      <path fill="#FBBC04" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  );
}
