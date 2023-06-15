import { View, FlatList, StyleSheet, Image, Pressable } from 'react-native'
import products from '../../data/products'


const ProductScreen = () => {
  return (
    <Pressable>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.imgContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>)}
        numColumns={2}
        showsVerticalScrollIndicator={false} />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  imgContainer: {
    width: '50%',
    padding: 1
  },
  image: {
    width: "100%",
    aspectRatio: 1,

  }
})
export default ProductScreen