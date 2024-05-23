"use client"
import { Provider } from "react-redux";
import Store from "../redux/store"

const Prvdr = ({children}) => {
    return(
        <Provider store = {Store}>
            {children}

        </Provider>
    );
}

export default Prvdr;