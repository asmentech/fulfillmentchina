export default {
    setToken: ({ commit }, log) => {
        commit('setToken', log);
    },
    setTagActive: ({ commit }, log) => {
        commit('setTagActive', log);
    },
    setBreadcrumbs: ({ commit }, log) => {
        commit('setBreadcrumbs', log);
    },
}