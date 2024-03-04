import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateSnack from '@views/createSnack';

import { Home }  from '@views/home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="createSnack" component={CreateSnack} />
        </Navigator>
    );
}