import { Category } from "@/types/category";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LinkWithText from "./link-with-text";

export type CategoriesProps = {
  categories: Category[];
  type?: 'small' | 'medium' | 'large';
}

const Categories = ({ categories, type = 'medium' }: CategoriesProps) => {
  return (
    <>
      <LinkWithText text='All Categories' href={'/'} />
      <ScrollView style={styles.bottomContainer} horizontal>
        {categories.map(item => (
          <View key={item.id} style={[
            styles.contentContainer,
            item.isActive ? styles.active : null,
            styles[type],
          ]}>
            <View style={[styles[`image${type}`], {
              backgroundColor: item.imageUrl,
            }]} />
            <View style={styles[`textContainer${type}`]}>
              <Text style={[
                styles.text,
                styles[`text${type}`],
              ]}>{item.title}</Text>
              {type === 'large' && item.startingPrice ?
                <View style={styles.priceContainer}>
                  <Text style={styles.priceTitle}>Starting</Text>
                  <Text style={styles.price}>{item.startingPrice}</Text>
                </View>
                : null}
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    marginTop: 20,
  },
  imagesmall: {
    width: 44,
    height: 44,
    borderRadius: '50%',
  },
  imagemedium: {
    width: 96,
    height: 81,
    borderRadius: 15,
  },
  imagelarge: {
    position: 'absolute',
    top: -28,
    width: 122,
    height: 104,
    borderRadius: 15,
  },
  contentContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    boxShadow: '12px 12px 30px rgba(150, 150, 154, 0.15)',
    marginBottom: 10,
  },
  small: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 7,
    marginLeft: 7,
    padding: 8,
  },
  medium: {
    position: 'relative',
    borderRadius: 24,
    marginRight: 16,
    marginLeft: 16,
    paddingTop: 20,
    paddingBottom: 21,
    paddingLeft: 13,
    paddingRight: 13,
    marginBottom: 40,
  },
  large: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    transform: 'skew(-4deg)',
    width: 147,
    height: 144,
    marginTop: 28,
    borderRadius: 24,
    marginRight: 14,
    marginLeft: 14,
    padding: 12,
  },
  active: {
    backgroundColor: '#FFD27C',
  },
  textContainersmall: {},
  textContainermedium: {
    position: 'absolute',
    bottom: -30,
  },
  textContainerlarge: {},
  text: {
    marginLeft: 0,
  },
  textsmall: {
    fontSize: 14,
    marginLeft: 12,
  },
  textmedium: {
    fontSize: 18,
  },
  textlarge: {
    fontSize: 18,
    marginTop: 5,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  priceTitle: {
    fontSize: 14,
    color: '#646982',
  },
  price: {
    fontSize: 16,
    color: '#32343E',
  },
});



export default Categories;