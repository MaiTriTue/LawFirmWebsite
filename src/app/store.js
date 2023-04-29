import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from '../pages/Home/HomeSlice';
import cartPageReducer from '../pages/CartPage/CartPageSlice';
import TotalPriceReducer from '../pages/CartPage/TotalPriceSlice';

import userReducer from './userSlice';

const rootReducer = {
    size: sizeReducer,
    cartPage: cartPageReducer,
    totalPrice: TotalPriceReducer,
    user: userReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
