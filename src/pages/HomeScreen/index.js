/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import {View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
import Realm from 'realm';

const HomeScreen = ({navigation}) => {
  const realm = new Realm({
    path: 'UserDatabase.realm',
    schema: [
      {
        name: 'user_details',
        properties: {
          user_id: {type: 'int', default: 0},
          user_name: 'string',
          user_contact: 'string',
          user_address: 'string',
        },
      },
    ],
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
      }}>
      <CustomText text="RealM Example" />
      <CustomButton
        title="Register"
        customClick={() => navigation.navigate('Register')}
      />
      <CustomButton
        title="Update"
        customClick={() => navigation.navigate('Update')}
      />
      <CustomButton
        title="View"
        customClick={() => navigation.navigate('View')}
      />
      <CustomButton
        title="View All"
        customClick={() => navigation.navigate('ViewAll')}
      />
      <CustomButton
        title="Delete"
        customClick={() => navigation.navigate('Delete')}
      />
    </View>
  );
};

export default HomeScreen;
