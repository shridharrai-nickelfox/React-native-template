// App wide dispatcher

import Stores from "../Stores/Store";
import { LoaderActions } from "@redux/Slices/LoaderSlice";

export default LoaderDispatcher = {
  show: () => {
    Stores.dispatch(LoaderActions.SHOW());
  },
  hide: () => {
    Stores.dispatch(LoaderActions.HIDE());
  }
};
