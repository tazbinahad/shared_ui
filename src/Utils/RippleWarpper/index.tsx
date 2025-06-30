import { FC, MouseEvent, ReactNode } from "react";
import "~/assets/style/RippleWrapper.scss"; // Import SASS file

interface RippleWrapperProps {
  children: ReactNode;
}

export const RippleWrapper: FC<RippleWrapperProps> = ({ children }) => {
  const createRipple = (event: MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    container.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className="ripple-wrapper" onClick={createRipple}>
      {children}
    </div>
  );
};
