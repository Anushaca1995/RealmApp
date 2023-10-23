/*Screen to register the user*/
import React, {useState} from 'react';
import {View, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import Realm from 'realm';

const RegisterUser = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const realm = new Realm({path: 'UserDatabase.realm'});

  const registerUser = () => {
    if (userName) {
      if (userContact) {
        if (userAddress) {
          realm.write(() => {
            const ID =
              realm.objects('user_details').sorted('user_id', true).length > 0
                ? realm.objects('user_details').sorted('user_id', true)[0]
                    .user_id + 1
                : 1;
            realm.create('user_details', {
              user_id: ID,
              user_name: userName,
              user_contact: userContact,
              user_address: userAddress,
            });
            Alert.alert(
              'Success',
              'You are registered successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              {cancelable: false},
            );
          });
        } else {
          Alert.alert('Please fill Address');
        }
      } else {
        Alert.alert('Please fill Contact Number');
      }
    } else {
      Alert.alert('Please fill Name');
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <CustomTextInput
            placeholder="Enter Name"
            onChangeText={user_name => setUserName(user_name)}
          />
          <CustomTextInput
            placeholder="Enter Contact No"
            onChangeText={user_contact => setUserContact(user_contact)}
            maxLength={10}
            keyboardType="numeric"
          />
          <CustomTextInput
            placeholder="Enter Address"
            onChangeText={user_address => setUserAddress(user_address)}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top'}}
          />
          <CustomButton title="Submit" customClick={registerUser} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default RegisterUser;
