import {IStoreState} from "../types";
import storeHello from "./helloStore";
import storeHi from "./hiStore";

const store: IStoreState = {
    hello: storeHello,
    hi: storeHi
};

export default store;
