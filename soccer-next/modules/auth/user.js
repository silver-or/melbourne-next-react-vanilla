// import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    user: {
        isLoggingIn: false,
        data: null
    }
}

const USER_REGISTER_REQUEST = 'auth/USER_REGISTER_REQUEST';
const USER_REGISTER_SUCCESS = 'auth/USER_REGISTER_SUCCESS';
const USER_REGISTER_FAILURE = 'auth/USER_REGISTER_FAILURE';

export const userRegister = user => (  // 액션 생성 함수 -> 리듀서가 됨
    {type: USER_REGISTER_REQUEST, payload: user}
)
export function* watchUserRegister() { // rootSaga로 넘어감
    yield takeLatest(USER_REGISTER_REQUEST, userRegisterSaga);
}
function* userRegisterSaga() {
    try {
        const response = yield call(userRegisterAPI) // 깆고 와서 (서버)
        console.log(" 회원가입 서버 다녀옴: " + JSON.stringify(response.data))
        yield put({type: USER_REGISTER_SUCCESS, payload: response.data}) // 집어넣음
    } catch (error) {
        yield put({type: USER_REGISTER_FAILURE, payload: error.message})
    }
}
const userRegisterAPI = payload => axios.post(
    `${SERVER}/user/join`,
    payload,
    {headers}
)

const auth = (state = initialState, action) => { // 리듀서
    switch (action.type) {
        case HYDRATE:
            console.log(' ### HYDRATE Issue 발생 ### ')
            return {
                ...state,
                ...action.payload
            }
        case USER_REGISTER_SUCCESS:
            console.log(' ### 회원가입 성공 ### ' + action.payload)
            return {
                ...state,
                user: action.payload
            }
        case USER_REGISTER_FAILURE:
            console.log(' ### 회원가입 실패 ### ' + action.payload)
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default auth