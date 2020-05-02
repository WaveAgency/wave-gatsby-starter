import { darken, lighten, rgba, shade } from 'polished';

const primaryColor = 'rgba(250, 107, 77, 0.97)';

export const theme = {
  name: 'Default',
  color: {
    background: '#ffffff',
    primary: primaryColor,
    primaryDark: '#000022',
    gray: 'rgba(0, 0, 0, 0.12)',
    primaryGradient: `linear-gradient(95.36deg, ${lighten(0.05, primaryColor)} 16.39%, ${shade(
      0.18,
      darken(0, primaryColor),
    )} 130.71%)`,
    sectionBg: rgba('#777777', 0.03),
  },
  borderRadius: '16px',
  spacing: {
    sectionMarginTop: '14rem',
  },
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 4, // rem
    outerMargin: 4, // rem
    // mediaQuery: 'only screen',
    container: {
      sm: 73.6, // rem
      md: 97.6, // rem
      lg: 138, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};
