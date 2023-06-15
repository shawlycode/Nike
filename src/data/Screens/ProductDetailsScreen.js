import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import products from '../products'

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Appp</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.img} />)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {

  },
  img: {
    width: 400,
    height: 400
  }
})
export default ProductDetailsScreen