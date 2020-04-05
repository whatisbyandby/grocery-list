const unpickedState = {
  listData: [
    {
      title: "In My Cart",
      data: []
    },
    {
      title: "Test Category",
      data: [{ isPicked: false, name: "Test Item", category: "Test Category" }]
    }
  ]
};

const pickedState = {
  listData: [
    {
      title: "In My Cart",
      data: [{ isPicked: true, name: "Test Item", category: "Test Category" }]
    },
    {
      title: "Test Category",
      data: []
    }
  ]
};

const twoPickedState = {
  listData: [
    {
      title: "In My Cart",
      data: [{ isPicked: true, name: "Test Item", category: "Test Category" }]
    },
    {
      title: "Test Category",
      data: [
        {
          isPicked: false,
          name: "Another Test Item",
          category: "Test Category"
        }
      ]
    }
  ]
};

const twoUnpickedState = {
  listData: [
    {
      title: "In My Cart",
      data: []
    },
    {
      title: "Test Category",
      data: [
        { isPicked: false, name: "Test Item", category: "Test Category" },
        {
          isPicked: false,
          name: "Another Test Item",
          category: "Test Category"
        }
      ]
    }
  ]
};

export { pickedState, unpickedState, twoPickedState, twoUnpickedState };
