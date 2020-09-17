import { createStore } from "redux";
import { MANDAR_DINERO } from "./actions/actions";

const initialState = {
    disponible: 1000,
    enviado: 0,
    enviar: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case MANDAR_DINERO:
            return {
                ...state,
                disponible: state.disponible - action.cantidad,
                enviado: state.enviado + parseInt(action.cantidad)
            }
        default:
            return state;
    };
};


export default createStore(reducer);