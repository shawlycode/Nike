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
        <Text style={styles.btnText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  empty: {
    paddingTop: 30,
    flex: 1
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

export default ShoppingCart