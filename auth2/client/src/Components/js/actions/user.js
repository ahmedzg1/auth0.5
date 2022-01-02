import { FAIL_USER, LOAD_USER, REGISTER_USER, } from "../const/user"
import axios from "axios";
export const registerUser=(user) => async (dispatch) =>{
    dispatch({type: LOAD_USER});

try {
 const result = await axios.post("/user/register",user)  ;
dispatch({type : REGISTER_USER,payload: result.data});
} catch (error) {
    dispatch ({type: FAIL_USER,payload:error.response.data})
}
};
export const LOGINUSER=(user) => async (dispatch) =>{
    dispatch({type: LOAD_USER});

try {
 const result = await axios.post("/user/login",user)  ;
dispatch({type : REGISTER_USER,payload: result.data});
} catch (error) {
    dispatch ({type: FAIL_USER,payload:error.response.data})
}
};

