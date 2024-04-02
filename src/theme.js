import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#ffffff',
    textBar: '#F9FCFF',
    primary: '#0366d6',
    bar: '#24292e',
    bgPrimary: '#e1e4e8',
    bgSecondary: '#FFFFFF',
    error: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    heading: 18,
    subheading: 16
  },
  fonts: {
    main: Platform.select({ default: 'System', android: 'Roboto', ios: 'Arial' })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
};

export default theme;
