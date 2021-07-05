export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "BQCAbznGkP9Hga0PX6gCBISd9p_a3dcDBTI-23wGxZMF4oCDQUsNRHqBRhyNXU1XSdoCYihwCBIjV6z2XzhJbHR7kE50i9mv_hQILlDsoVZF6En4G6QK01_2CjC9w-kxoHx_-wYY4faSGzzEcdtK3xWKAzjmrck"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
export default reducer;
