const initialState = {
  listData: [{ title: "In My Cart", data: [] }]
};

const listReducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      const existingCategory = state.listData.find(
        category => category.title === action.item.category
      );
      if (existingCategory) {
        existingCategory.data = [...existingCategory.data, action.item];
        return { listData: [...state.listData] };
      }
      return {
        listData: [
          ...state.listData,
          { title: action.item.category, data: [action.item] }
        ]
      };

    case "pickItem":
      const oldCategory = state.listData.find(
        category => category.title === action.item.category
      );
      const oldItem = oldCategory.data.find(item => item.id === action.item.id);
      const newCategoryData = oldCategory.data.filter(
        item => item.id !== action.item.id
      );
      oldCategory.data = newCategoryData;
      const cartCategory = state.listData.find(
        cartCategory => cartCategory.title === "In My Cart"
      );
      const newItem = { ...oldItem, isPicked: true };
      cartCategory.data = [...cartCategory.data, newItem];
      return { listData: [...state.listData] };

    case "unpickItem":
      const unpickedCartCategory = state.listData.find(
        category => category.title === "In My Cart"
      );
      unpickedItem = unpickedCartCategory.data.find(
        item => item.id === action.item.id
      );
      const unpickedNewCategoryData = unpickedCartCategory.data.filter(
        item => item.id !== action.item.id
      );
      unpickedCartCategory.data = unpickedNewCategoryData;
      itemToAdd = { ...unpickedItem, isPicked: false };
      const categoryToAdd = state.listData.find(
        category => category.title === action.item.category
      );
      categoryToAdd.data = [...categoryToAdd.data, itemToAdd];
      return { listData: [...state.listData] };

    default:
      throw new Error("Unexpected Action");
  }
};

export { listReducer, initialState };
