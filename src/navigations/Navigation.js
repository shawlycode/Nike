import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductScreen from '../../src/data/Screens/ProductScreen'
import ProductDetailsScreen from '../../src/data/Screens/ProductDetailsScreen'
import ShoppingCart from "../data/Screens/ShoppingCart"
import { Pressable, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux"
import { selectNumberOfItems } from "../store/cartSlice"


const Stack = createNativeStackNavigator()


const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}>
        <Stack.Screen name="Products" component={ProductScreen} options={({ navigation }) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Cart')}>
              <Ionicons name="cart" size={24} color="grey" />
              <Text style={styles.text}>{numberOfItems}</Text>
            </Pressable>
          )
        })} />
        <Stack.Screen name="Product Details" component={ProductDetailsScreen} options={{ presentation: 'modal' }} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  text: {
    position: "absolute",
    right: -10,
    fontWeight: 500,

  }
})
export default Navigation;