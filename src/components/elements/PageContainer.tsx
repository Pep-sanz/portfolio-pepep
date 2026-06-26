import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  showTopGlow?: boolean;
}

export default function PageContainer({
  children,
  className = "",
  contentClassName = "",
  showTopGlow = false,
}: PageContainerProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none z-0" />
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-container/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary-container/10 blur-[100px] pointer-events-none z-0" />

      {showTopGlow && (
        <div className="fixed top-0 left-0 right-0 z-40 flex justify-center mt-4 pointer-events-none">
          <div className="absolute w-[80%] max-w-[800px] h-16 bg-primary-container/20 blur-2xl rounded-full" />
        </div>
      )}

      <div
        className={`relative z-10 max-w-[1200px] w-full mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-[60px] md:gap-[80px] pb-section-gap ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
