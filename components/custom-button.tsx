import { StyleSheet, Text, TouchableOpacity } from "react-native";

export type CustomButtonProps = {
  onPress?: () => void;
  title: string;
}

const CustomButton = ({ onPress, title }: CustomButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF7622',
    height: 62,
    width: '100%',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
})

export default CustomButton;