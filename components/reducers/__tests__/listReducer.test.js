import { listReducer, initialState } from "../listReducer";
import {
  pickedState,
  unpickedState,
  twoPickedState,
  twoUnpickedState
} from "../testingState";

describe("Test Adding Items", () => {
  test("Test Adding One Item", () => {
    expect(
      listReducer(initialState, {
        type: "addItem",
        item: {
          isPicked: false,
          name: "Test Item",
          category: "Test Category"
        }
      })
    ).toEqual({
      listData: [
        { title: "In My Cart", data: [] },
        {
          title: "Test Category",
          data: [
            {
              isPicked: false,
              name: "Test Item",
              category: "Test Category"
            }
          ]
        }
      ]
    });
  });

  test("Adding Two Items with the same category", () => {
    const nextState = listReducer(initialState, {
      type: "addItem",
      item: {
        isPicked: false,
        name: "Test Item",
        category: "Test Category"
      }
    });
    expect(
      listReducer(nextState, {
        type: "addItem",
        item: {
          isPicked: false,
          name: "Test Item Two",
          category: "Test Category"
        }
      })
    ).toEqual({
      listData: [
        { title: "In My Cart", data: [] },
        {
          title: "Test Category",
          data: [
            {
              isPicked: false,
              name: "Test Item",
              category: "Test Category"
            },
            {
              isPicked: false,
              name: "Test Item Two",
              category: "Test Category"
            }
          ]
        }
      ]
    });
  });

  test("Adding Two Items with the different categories", () => {
    const nextState = listReducer(initialState, {
      type: "addItem",
      item: {
        isPicked: false,
        name: "Test Item",
        category: "Test Category"
      }
    });
    expect(
      listReducer(nextState, {
        type: "addItem",
        item: {
          isPicked: false,
          name: "Test Item Two",
          category: "Another Category"
        }
      })
    ).toEqual({
      listData: [
        { title: "In My Cart", data: [] },
        {
          title: "Test Category",
          data: [
            {
              isPicked: false,
              name: "Test Item",
              category: "Test Category"
            }
          ]
        },
        {
          title: "Another Category",
          data: [
            {
              isPicked: false,
              name: "Test Item Two",
              category: "Another Category"
            }
          ]
        }
      ]
    });
  });

  test("Picking an item with one item in state", () => {
    const newState = listReducer(unpickedState, {
      type: "pickItem",
      item: { isPicked: false, name: "Test Item", category: "Test Category" }
    });
    expect(newState).toEqual(pickedState);
  });

  test("Picking an item with two items in state", () => {
    const newState = listReducer(twoUnpickedState, {
      type: "pickItem",
      item: { isPicked: false, name: "Test Item", category: "Test Category" }
    });
    expect(newState).toEqual(twoPickedState);
  });
});
