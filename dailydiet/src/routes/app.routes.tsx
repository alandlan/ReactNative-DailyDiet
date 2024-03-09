import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateSnack from '@views/createSnack';
import FinishedSnack from '@views/finishedSnack';

import { Home }  from '@views/home';
import Statistics from '@views/statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="createSnack" component={CreateSnack} />
            <Screen name="finishedSnack" component={FinishedSnack} />
            <Screen name="statistics" component={Statistics} />
        </Navigator>
    );
}