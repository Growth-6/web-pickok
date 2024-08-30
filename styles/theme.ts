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

  fontSizes: {
    pc: {
      head1: '32px',
      head2: '24px',
      body1: '20px',
      body2: '18px',
      body3: '16px',
      footer1: '14px',
    },
    mobile: {
      head1: '20px',
      head2: '18px',
      body1: '16px',
      body2: '14px',
      body3: '12px',
      footer1: '12px',
    },
  },
};

export default theme;
