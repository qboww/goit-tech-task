import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import favoritesReducer from "../features/favorites/favoritesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  favorites: persistReducer(persistConfig, favoritesReducer),
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
