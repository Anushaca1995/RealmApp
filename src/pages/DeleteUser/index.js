/*Screen to delete the user*/
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import Realm from 'realm';

const DeleteUser = ({navigation}) => {
  const [inputUserId, setInputUserId] = useState('');
  const realm = new Realm({path: 'UserDatabase.realm'});
  const deleteUser = () => {
    realm.write(() => {
      if (
        realm.objects('user_details').filtered('user_id =' + inputUserId)
          .length > 0
      ) {
        realm.delete(
          realm.objects('user_details').filtered('user_id =' + inputUserId),
        );
        var user_details = realm.objects('user_details');
        console.log(user_details);
        Alert.alert(
          'Success',
          'User deleted successfully',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('Home'),
            },
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert('Please insert a valid User Id');
      }
    });
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CustomTextInput
        placeholder="Enter User Id"
        onChangeText={input_user_id => setInputUserId(input_user_id)}
      />
      <CustomButton title="Delete User" customClick={deleteUser} />
    </View>
  );
};

export default DeleteUser;
