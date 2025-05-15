import { ReactNode } from "react";

interface SnapScrollSectionProps {
  children?: ReactNode;
  className?: string;
  ref?: React.RefObject<null>;
}

const SnapScrollSection = ({
  children,
  className,
  ref,
}: SnapScrollSectionProps) => {
  return (
    <section className={`snap-start h-[100vh] w-full ${className}`} ref={ref}>
      {children}
    </section>
  );
};

export default SnapScrollSection;
