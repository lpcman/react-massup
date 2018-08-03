import { EnthusiasmAction } from '../actions/hiAction';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/hi';
import hi from '../store/hiStore';
import { IHi } from '../types/hi';

export function enthusiasm(state: IHi = hi, action: EnthusiasmAction): IHi {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }
    return state;
}
