import React from "react";
import { View, Text, CheckBox } from "react-native";

const ListItem = props => {
  const { item, handleItemPicked } = props;
  return (
    <View>
      <CheckBox
        id={item.id}
        value={item.isPicked}
        onValueChange={isPicked => {
          let actionType;
          if (isPicked) {
            actionType = "pickItem";
          } else {
            actionType = "unpickItem";
          }
          handleItemPicked({
            type: actionType,
            item: item
          });
        }}
      />
      <Text>{item.name}</Text>
    </View>
  );
};

export default ListItem;
