import {Text} from 'react-native';
import styles from './styles';
const CustomText = props => {
  return <Text style={styles.text}>{props.text}</Text>;
};

export default CustomText;
