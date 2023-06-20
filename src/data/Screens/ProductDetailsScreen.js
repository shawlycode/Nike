import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { cartSlice } from '../../store/cartSlice';





const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct)
  const dispatch = useDispatch();
  const { width } = useWindowDimensions()

  const addToCard = () => {
    dispatch(cartSlice.actions.addCartItem({ product }))
  }
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
      <TouchableOpacity style={styles.btn} onPress={addToCard}>
        <Text style={styles.btnText}>Add to cart</Text>
        <MaterialCommunityIcons name="cart-plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
  },
  details__container: {
    padding: 20,
    paddingBottom: 100
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
  btn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    backgroundColor: "#000",
    width: '90%',
    borderRadius: 20,
    padding: 10
  },
  btnText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: 600,
    paddingRight: 5
  }
})
export default ProductDetailsScreen