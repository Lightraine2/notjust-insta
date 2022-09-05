import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: colors.primary, fontSize: fonts.size.xl  }}>Hello World</Text>
  </View>
)

export default App;