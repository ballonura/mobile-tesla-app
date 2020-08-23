export const state = () => ({
  mode: "dark",
  logoOpacity: "50"
});

export const mutations = {
  changeMode(state, mode) {
    state.mode = mode;
  }
};

export const actions = {
  changeMode({ commit }, mode) {
    commit("changeMode", mode);
  }
};
