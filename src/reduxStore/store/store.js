import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "../slices/cartSlice";
import customerSlice from "../slices/customerSlice";
import analysisSlice from "../slices/analysisSlice"

const rootReducer = combineReducers({
  // Reducers will be defined here
  cart: cartSlice,
  customer: customerSlice,
  analysis: analysisSlice,
});


// Persisting the store using redux-persist library and storing it in local storage so that when we refresh the page, the state is not lost. 
const persistConfig = {
  key: "root",
  storage,
};

// Creating a persisted reducer using the persistReducer function from redux-persist library and passing the persistConfig and rootReducer to it.

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creating the store using the configureStore function from redux-toolkit and passing the persistedReducer to it.
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types:
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Ignore these field paths in all actions:
        ignoredActionPaths: ["payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});

export const persistor = persistStore(store);

export default store;