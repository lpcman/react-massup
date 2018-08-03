import { EnthusiasmAction } from '../actions/helloAction';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/hello';
import store_hello from '../store/helloStore';
import { IHello } from '../types/hello';

export function enthusiasm(state: IHello = store_hello, action: EnthusiasmAction): IHello {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }
    return state;
}
