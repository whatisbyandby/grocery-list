import React, { useState, useReducer } from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import { listReducer, initialState } from "../components/reducers/listReducer";
import ItemInput from "../components/ItemInput";

const List = () => {
  const [listState, updateListData] = useReducer(listReducer, initialState);

  return (
    <View style={styles.container}>
      <ItemInput updateListData={updateListData} />
      <SectionList
        sections={listState.listData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return <ListItem item={item} handleItemPicked={updateListData} />;
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default List;
