import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import cart from '../cart'
import CartListItem from '../../components/CartListItem'
import ShoppingCartTotals from '../../components/ShoppingCartTotals'


const ShoppingCart = () => {
  const CheckOut = () => {
    console.warn('Check out')
  }
  return (
    <View style={styles.empty}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => <ShoppingCartTotals />}
      />

      <TouchableOpacity style={styles.btn} onPress={CheckOut}>
        <Text style={styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  empty: {
    paddingTop: 30,
    flex: 1
  },
})

export default ShoppingCart