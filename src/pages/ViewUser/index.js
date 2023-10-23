/*Screen to view single user*/
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import Realm from 'realm';

const ViewUser = ({navigation}) => {
  const [inputUserId, setInputUserId] = useState('');
  const [userData, setUserData] = useState({});
  const realm = new Realm({path: 'UserDatabase.realm'});
  const searchUser = () => {
    const user_details = realm
      .objects('user_details')
      .filtered('user_id =' + inputUserId);
    console.log(user_details);
    if (user_details.length > 0) {
      console.log(user_details[0]);
      setUserData(user_details[0]);
    } else {
      alert('No user found');
      setUserData({});
    }
  };

  return (
    <View>
      <CustomTextInput
        placeholder="Enter User Id"
        onChangeText={input_user_id => setInputUserId(input_user_id)}
      />
      <CustomButton title="Search User" customClick={searchUser} />
      <View style={{marginLeft: 35, marginRight: 35, marginTop: 10}}>
        <Text>User Id: {userData.user_id}</Text>
        <Text>User Name: {userData.user_name}</Text>
        <Text>User Contact: {userData.user_contact}</Text>
        <Text>User Address: {userData.user_address}</Text>
      </View>
    </View>
  );
};
export default ViewUser;
