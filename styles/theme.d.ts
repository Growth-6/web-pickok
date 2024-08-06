import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      main1: string;
      main2: string;
      main3: string;
      error: string;
      success: string;
      warning: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
      gray8: string;
      dim: string;
    };

    fonts: {
      pc: {
        head1: string;
        head2: string;
        body1: string;
        body2: string;
        body3: string;
        footer1: string;
      };
      mobile: {
        head1: string;
        head2: string;
        body1: string;
        body2: string;
        body3: string;
        footer1: string;
      };
    };
  }
}
