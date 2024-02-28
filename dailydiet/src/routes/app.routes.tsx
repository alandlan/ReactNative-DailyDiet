import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home }  from '@views/home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}