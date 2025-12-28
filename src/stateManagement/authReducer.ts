type AuthState = {
  username: string;
  accessToken: string;
};

type AuthAction = {
  type: string;
  payload?: AuthState;
};

const initialState: AuthState = {
  username: "",
  accessToken: "",
};

export function AuthReducer(state = initialState, action: AuthAction) {
  if (action.type === "LOGIN" && action.payload) {
    return action.payload;
  }

  if (action.type === "LOGOUT") {
    return initialState;
  }

  return state;
}
