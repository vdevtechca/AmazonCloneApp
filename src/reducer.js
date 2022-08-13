export const initialState = {
    basket: [
        // {
        // id: "04040606",
        //  title: "How to be a wizard Javascript Developer",
        //   price: 50.79,
        //   rating: 4,
        //    image:"https://cdn.shopify.com/s/files/1/0533/2089/files/app-development-books-modern-fullscript-development.jpg?v=1610640536",
        // },
    ],
    user: null,
};

// selectors go in reducer
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for removing items from basket

            // we cloned the basket
            let newBasket = [...state.basket];

            // we check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item exists in basket, remive it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in basket`
                );
            }

            return { ...state, basket: newBasket, };
        default:
            return state;
    }
};

export default reducer;