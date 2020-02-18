import Order from "../../models/order";

export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDER = "SET_ORDER";

export const fetchOrders = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://the-shop-app-3a94c.firebaseio.com/orders/${userId}.json`
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const resData = await response.json();

    let loadedOrders = [];

    for (const key in resData) {
      loadedOrders.push(
        new Order(
          key,
          resData[key].cartItems,
          resData[key].totalAmount,
          new Date(resData[key].date)
        )
      );
    }
    dispatch({ type: SET_ORDER, orders: loadedOrders });
  };
};

export const addOrder = (cartItems, totalAmount) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    const currentDate = new Date();
    const response = await fetch(
      `https://the-shop-app-3a94c.firebaseio.com/orders/${userId}.json?auth=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: currentDate.toISOString()
        })
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const resData = await response.json();

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        items: cartItems,
        amount: totalAmount,
        date: currentDate
      }
    });
  };
};
