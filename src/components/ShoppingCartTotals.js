import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ShoppingCartTotals = () => {
  return (
    <View>
      <View style={styles.subTotalContainer}>
        <Text style={styles.totalText}>Subtotals</Text>
        <Text style={styles.totalText}>$5490</Text>
      </View>
      <View style={styles.delivery}>
        <Text style={styles.totalText}>Delivery</Text>
        <Text style={styles.totalText}>$1.00</Text>
      </View>
      <View style={styles.tax}>
        <Text style={styles.totalText}>Tax</Text>
        <Text style={styles.totalText}>$0.00</Text>
      </View>
      <View style={styles.total}>
        <Text style={styles.totals}>Total</Text>
        <Text style={styles.totals}>$0.00</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  subTotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "gainsboro",
    marginTop: 10,
  },
  delivery: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,

  },
  tax: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,

  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
    borderTopWidth: 1,
    borderColor: "gainsboro"
  },
  totals: {
    fontSize: 20,
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 18,
    fontStyle: "bold",
    color: "grey",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
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
export default ShoppingCartTotals