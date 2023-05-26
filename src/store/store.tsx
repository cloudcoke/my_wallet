import { createStore, applyMiddleware, AnyAction } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
// import { persistReducer, persistStore } from "redux-persist"
import thunk, { ThunkMiddleware } from "redux-thunk"
// import storage from "redux-persist/lib/storage"
import { rootReducer } from "./rootReducer"

// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["myAccountState", "savedAccountState"],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  // persistedReducer,
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<{}, AnyAction>))
)
// export const persistor = persistStore(store)
