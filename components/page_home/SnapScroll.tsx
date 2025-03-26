import { ReactNode } from "react";

interface SnapScrollSectionProps {
  children: ReactNode;
  className?: string;
}

const SnapScrollSection = ({ children, className }: SnapScrollSectionProps) => {
  return (
    <section className={`snap-start h-[calc(100dvh)] w-full ${className}`}>
      {children}
    </section>
  );
};

export default SnapScrollSection;
