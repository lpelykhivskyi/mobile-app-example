import { Href, Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";


export type LinkWithTextProps = {
  text: string;
  href: Href;
}

const LinkWithText = ({ text, href }: LinkWithTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Link style={styles.link} href={href}>See all</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: '#32343E',
  },
  link: {
    fontSize: 16,
    color: '#333333',
  },
})

export default LinkWithText;