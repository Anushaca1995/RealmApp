import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import RegisterUser from '../pages/RegisterUser';
import UpdateUser from '../pages/UpdateUser';
import ViewUser from '../pages/ViewUser';
import ViewAllUser from '../pages/ViewAllUser';
import DeleteUser from '../pages/DeleteUser';

const Stack = createNativeStackNavigator();

const Navigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="View" component={ViewUser} />
        <Stack.Screen name="ViewAll" component={ViewAllUser} />
        <Stack.Screen name="Update" component={UpdateUser} />
        <Stack.Screen name="Delete" component={DeleteUser} />
        <Stack.Screen name="Register" component={RegisterUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
