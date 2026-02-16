import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedButtonProps = {
  onPress?: () => void;
  title: string;
  type?: 'default' | 'warning';
  fontSize?: 'h1' | 'h2' | 'body';
}

const ThemedButton = ({ type = 'default', onPress, title, fontSize = 'body', }: ThemedButtonProps) => {
  const buttonTextColor = useThemeColor({}, type === 'default' ? 'buttonDefaultTextColor' : 'buttonWarningTextColor');
  const buttonBgColor = useThemeColor({}, type === 'default' ? 'buttonDefaultBgColor' : 'buttonWarningBgColor');
  const buttonBorderColor = useThemeColor({}, type === 'default' ? 'buttonDefaultBorderColor' : 'buttonWarningBorderColor');

  return <TouchableOpacity onPress={onPress} style={[styles.container, {
    backgroundColor: buttonBgColor,
    borderColor: buttonBorderColor,
  }]}>
    <Text style={[styles.text, styles[fontSize], {
      color: buttonTextColor,
    }]}>{title}</Text>
  </TouchableOpacity>
};

const styles = StyleSheet.create({
  container: {
    height: 62,
    borderWidth: 1,
    width: '100%',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  }
})

export default ThemedButton;