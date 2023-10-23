import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
