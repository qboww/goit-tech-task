import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import catalogReducer from "./catalog/catalogSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["catalog"],
};

const persistedReducer = persistReducer(persistConfig, catalogReducer);

export const store = configureStore({
  reducer: {
    catalog: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
