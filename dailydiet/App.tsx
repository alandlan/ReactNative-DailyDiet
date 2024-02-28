import theme from '@theme/index';
import { ThemeProvider } from 'styled-components';
import { useFonts,Nunito_400Regular,Nunito_700Bold} from '@expo-google-fonts/nunito';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Routes } from 'src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      { fontsLoaded ? <Routes /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}

