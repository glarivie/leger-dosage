declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.ico';
declare module '*.mp4';

interface CSSModule {
  [className: string]: string;
}

declare module '*.module.scss' {
  const scssModule: CSSModule
  export = scssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}
