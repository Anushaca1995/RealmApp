/*Screen to update the user*/
import React, {useState} from 'react';
import {View, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import Realm from 'realm';

const UpdateUser = ({navigation}) => {
  const [inputUserId, setInputUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const realm = new Realm({path: 'UserDatabase.realm'});
  const searchUser = () => {
    const user_details = realm
      .objects('user_details')
      .filtered('user_id =' + inputUserId);
    console.log(user_details);
    if (user_details.length > 0) {
      setUserName(user_details[0].user_name);
      setUserContact(user_details[0].user_contact);
      setUserAddress(user_details[0].user_address);
    } else {
      Alert.alert('No user found');
      setUserName('');
      setUserContact('');
      setUserAddress('');
    }
  };
  const updateUser = () => {
    if (inputUserId) {
      if (userName) {
        if (userContact) {
          if (userAddress) {
            realm.write(() => {
              const ID = inputUserId;
              console.log('ID', ID);
              const obj = realm
                .objects('user_details')
                .filtered('user_id =' + inputUserId);
              console.log('obj', obj);
              if (obj.length > 0) {
                obj[0].user_name = userName;
                obj[0].user_contact = userContact;
                obj[0].user_address = userAddress;
                Alert.alert(
                  'Success',
                  'User updated successfully',
                  [
                    {
                      text: 'Ok',
                      onPress: () => navigation.navigate('Home'),
                    },
                  ],
                  {cancelable: false},
                );
              } else {
                Alert.alert('User Updation Failed');
              }
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
    } else {
      Alert.alert('Please fill User Id');
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <CustomTextInput
            placeholder="Enter User Id"
            onChangeText={input_user_id => setInputUserId(input_user_id)}
          />
          <CustomButton title="Search User" customClick={searchUser} />
          <CustomTextInput
            placeholder="Enter Name"
            value={userName}
            onChangeText={user_name => setUserName(user_name)}
          />
          <CustomTextInput
            placeholder="Enter Contact No"
            value={'' + userContact}
            onChangeText={user_contact => setUserContact(user_contact)}
            maxLength={10}
            keyboardType="numeric"
          />
          <CustomTextInput
            value={userAddress}
            placeholder="Enter Address"
            onChangeText={user_address => setUserAddress(user_address)}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top'}}
          />
          <CustomButton title="Update User" customClick={updateUser} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default UpdateUser;
