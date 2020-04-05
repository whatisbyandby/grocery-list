import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import uuid from "react-native-uuid";

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    fontSize: 18
  }
});

const ItemInput = props => {
  const { updateListData } = props;
  const [inputValue, updateInputValue] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChange={e => updateInputValue(e.nativeEvent.text)}
      />
      <Button
        title="Add Item"
        onPress={() => {
          if (inputValue !== "") {
            updateListData({
              type: "addItem",
              item: {
                id: uuid.v4(),
                isPicked: false,
                name: inputValue,
                category: "For Testing"
              }
            });
            updateInputValue("");
          }
        }}
      >
        Add Item
      </Button>
    </View>
  );
};

export default ItemInput;
