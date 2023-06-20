import { View, FlatList, StyleSheet, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { productSlice } from '../../store/productSlice'


const ProductScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  return (

    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable style={styles.imgContainer} onPress={() => {
          dispatch(productSlice.actions.setSelectedProduct(item.id))
          navigation.navigate('Product Details')

        }}>
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