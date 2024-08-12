import { Theme } from '@emotion/react';

const theme: Theme = {
  colors: {
    main1: '#6BB2FC',
    main2: '#A7D2FF',
    main3: '#E5F2FF',
    error: '#ED5E6C',
    success: '#2CCA62',
    warning: '#FFD346',
    gray1: '#212121',
    gray2: '#616161',
    gray3: '#9E9E9E',
    gray4: '#BDBDBD',
    gray5: '#E0E0E0',
    gray6: '#EEEEEE',
    gray7: '#F5F5F5',
    gray8: '#FFFFFF',
    dim: 'rgba(33, 33, 33, 0.7)',
  },

  fonts: {
    pc: {
      head1: `
        fontSize: '32px',
        lineHeight: '150%',
      `,
      head2: `
        fontSize: '24px',
        lineHeight: '150%',
      `,
      body1: `
        fontSize: '20px',
        lineHeight: '150%',
      `,
      body2: `
        fontSize: '18px',
        lineHeight: '150%',
      `,
      body3: `
        fontSize: '16px',
        lineHeight: '150%',
      `,
      footer1: `
        fontSize: '14px',
        lineHeight: '150%',
      `,
    },
    mobile: {
      head1: `
        fontSize: '20px',
        lineHeight: '150%',
    `,
      head2: `
        fontSize: '18px',
        lineHeight: '150%',
      `,
      body1: `
        fontSize: '16px',
        lineHeight: '150%',
        `,
      body2: `
        fontSize: '14px',
        lineHeight: '150%',
      `,
      body3: `
        fontSize: '12px',
        lineHeight: '150%',
      `,
      footer1: `
        fontSize: '12px',
        lineHeight: '150%',
      `,
    },
  },
};

export default theme;
