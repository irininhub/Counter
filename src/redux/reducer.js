const INCREASE_COUNTER = 'INCREASE_COUNTER ';
const RESET_COUNTER = 'RESET_COUNTER';
const CHANGE_START_VALUE = 'CHANGE_START_VALUE';
const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE';
const SET_VALUES = 'SET_VALUES';
const SHOW_SET = 'SHOW_SET';


const initialState = {
    startCount: 0,
    value: 0,
    maxValue: 0,
    isHidden: false,
    disabled: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                value: action.value
            };
        case RESET_COUNTER:
            return {
                ...state,
                value: action.resetValue
            };
        case CHANGE_START_VALUE:
            return {
                ...state,
                startCount: action.startValue
            };
        case CHANGE_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            };
        case SET_VALUES:
            return {
                ...state,
                value: state.startCount,
                disabled: true,
                isHidden: true
            };
        case SHOW_SET:
            return {
                ...state,
                isHidden: false,
                startCount: 0,
                maxValue: 0
            }

    }
    return state
};

export const increaseCounterAC = (value) => ({type: INCREASE_COUNTER, value});
export const resetCounterAC = (resetValue) => ({type: RESET_COUNTER, resetValue});
export const changeStartValueAC = (startValue) => ({type: CHANGE_START_VALUE, startValue});
export const changeMaxValueAC = (maxValue) => ({type: CHANGE_MAX_VALUE, maxValue});
export const setValuesAC = (startValue) => ({type: SET_VALUES, startValue});
export const showSetAC = () => ({type: SHOW_SET});

export default reducer;