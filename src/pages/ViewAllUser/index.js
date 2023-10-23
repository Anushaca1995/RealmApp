/*Screen to view all the user*/
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Realm from 'realm';

const ViewAllUser = ({navigation}) => {
  const realm = new Realm({path: 'UserDatabase.realm'});
  const user_details = realm.objects('user_details');

  ListViewItemSeparator = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#000'}} />
    );
  };

  return (
    <View>
      <FlatList
        data={user_details}
        ItemSeparatorComponent={this.ListViewItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'white', padding: 20}}>
            <Text>Id: {item.user_id}</Text>
            <Text>Name: {item.user_name}</Text>
            <Text>Contact: {item.user_contact}</Text>
            <Text>Address: {item.user_address}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ViewAllUser;
