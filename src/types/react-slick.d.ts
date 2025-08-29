declare module 'react-slick' {
  import * as React from 'react';

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    vertical?: boolean;
    verticalSwiping?: boolean;
    beforeChange?: (current: number, next: number) => void;
    appendDots?: (dots: React.ReactNode) => React.ReactNode;
    customPaging?: (i: number) => React.ReactNode;
  // allow any other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  }

  export default class Slider extends React.Component<Settings> {
    slickNext: () => void;
    slickPrev: () => void;
    slickGoTo: (index: number) => void;
  }
}
