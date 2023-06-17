import { View, FlatList, StyleSheet, Image, Pressable } from 'react-native'
import products from '../../data/products'
import { useNavigation } from '@react-navigation/native'

const ProductScreen = () => {
  const navigation = useNavigation()
  return (

    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable style={styles.imgContainer} onPress={() => navigation.navigate('Product Details')}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>)}
      numColumns={2}
      showsVerticalScrollIndicator={false} />
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