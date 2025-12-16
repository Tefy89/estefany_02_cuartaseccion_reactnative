import { SafeAreaView } from 'react-native-safe-area-context';
//import { CounterScreens } from './src/presentation/screens/CounterScreens';
import { PaperProvider } from 'react-native-paper';
import { HomeworkScreen } from './src/presentation/screens/HomeworkScreen';
//import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';
//import { FlexScreen } from './src/presentation/screens/FlexScreen';
//import { PositionScreen } from './src/presentation/screens/PositionScreen';
//import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
//import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
//import { CounterM3Screens } from './src/presentation/screens/CounterM3Screen copy';

//import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';


//usamos el paper provider para que toda la app tenga acceso a los componentes de react native paper
export const App = () => {
  return (
    <PaperProvider>
      {/* safeareaview nos ayuda a que los componentes no se monten en las zonas no seguras de los dispositivos como la hora  o los bordes redondeados */}
      <SafeAreaView style={{ flex: 1 }}>
        {/*<HelloWorldScreen name='Estefany Ordoñez' />
        <CounterScreens />
        <CounterM3Screens />
        <BoxObjectModelScreen />
        <DimensionScreen />
        <PositionScreen />
        <FlexScreen />
        <FlexDirectionScreen />*/}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}