import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity style={styles.container} disabled={loading}>
      {loading ? (
        <ActivityIndicator color="red" />
      ) : (
        <Text onPress={onPress} style={styles.title}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
