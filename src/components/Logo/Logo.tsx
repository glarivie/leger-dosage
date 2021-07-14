import React, { CSSProperties } from "react";
import Link from "next/link";

import colors from "constants/colors";

interface Props extends React.SVGProps<SVGSVGElement> {
  readonly className?: string;
  readonly backgroundClassName?: string;
  readonly contentClassName?: string;
  readonly backgroundColor?: CSSProperties["backgroundColor"];
  readonly fontColor?: CSSProperties["color"];
  readonly size?: CSSProperties["width"];
}

const Logo = ({
  backgroundColor = colors.iceBlue,
  fontColor = colors.dark,
  size = 41,
  className,
  backgroundClassName,
  contentClassName,
  ...props
}: Props) => (
  <Link href="/" passHref>
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={backgroundClassName}
        d="M0 3C0 1.34315 1.34315 0 3 0H38C39.6569 0 41 1.34315 41 3V38C41 39.6569 39.6569 41 38 41H3C1.34315 41 0 39.6569 0 38V3Z"
        fill={backgroundColor}
      />
      <path
        className={contentClassName}
        d="M11.854 24.848C11.854 25.658 12.196 26 13.006 26H18.442C19.252 26 19.594 25.658 19.594 24.848V23.246H17.956V24.056C17.956 24.308 17.812 24.452 17.56 24.452H14.05C13.798 24.452 13.654 24.308 13.654 24.056V14.444C13.654 13.634 13.312 13.292 12.502 13.292H10.684V14.84H11.458C11.71 14.84 11.854 14.966 11.854 15.236V24.848ZM20.2988 21.446C20.2988 24.272 21.8468 26.216 24.3128 26.216C26.5448 26.216 27.3008 24.56 27.3008 24.56H27.3368C27.3368 24.56 27.3188 24.758 27.3188 25.028C27.3188 25.64 27.6428 26 28.4348 26H30.1088V24.506H29.3708C29.1188 24.506 28.9748 24.38 28.9748 24.11V14.444C28.9748 13.634 28.6328 13.292 27.8228 13.292H26.0948V14.786H26.8328C27.0848 14.786 27.2288 14.912 27.2288 15.182V17.468C27.2288 17.81 27.2648 18.08 27.2648 18.08H27.2288C27.2288 18.08 26.5268 16.676 24.4208 16.676C22.0088 16.676 20.2988 18.548 20.2988 21.446ZM24.6548 24.704C23.1428 24.704 22.0808 23.426 22.0808 21.446C22.0808 19.376 23.2688 18.188 24.6908 18.188C26.4368 18.188 27.2828 19.808 27.2828 21.428C27.2828 23.75 26.0048 24.704 24.6548 24.704Z"
        fill={fontColor}
      />
    </svg>
  </Link>
);

export default Logo;
