import { StyleSheet, View, Text, Image, FlatList, ScrollView, useWindowDimensions } from 'react-native'
import products from '../../data/products'

const ProductDetailsScreen = () => {
  const product = products[0]
  const { width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.details__container}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <View>
        <Text>Add to card</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
  },
  details__container: {
    padding: 20,
  },
  name: {
    fontSize: 34,
    fontWeight: "bold",
    letterSpacing: 3
  },
  price: {
    fontWeight: 500,
    color: 'grey',
    fontSize: 24,
    letterSpacing: 2,
    paddingVertical: 10
  },
  description: {
    fontSize: 18,
    lineHeight: 30,
    letterSpacing: 1,
    color: "#536b78"
  },
})
export default ProductDetailsScreen