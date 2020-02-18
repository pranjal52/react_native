import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableNativeFeedback
} from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = props => {
  return (
    <TouchableNativeFeedback onPress={props.onSelect} useForeground>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}> {props.title}</Text>
          <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>{props.children}</View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  product: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20
  },
  imageContainer: {
    height: "60%",
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden"
  },
  image: {
    height: "100%",
    width: "100%"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 4
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10
  },

  price: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888"
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20
  }
});

export default ProductItem;
