import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleWare from "redux-saga";

import rootReducer from "./root-reducer";
import { rootSaga } from "./root-saga";

const sagaMiddleWare = createSagaMiddleWare();

const middleWares = [sagaMiddleWare];
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

// Running sagas
sagaMiddleWare.run(rootSaga);

// Persisted version of the store
const persistor = persistStore(store);

export { store, persistor };
