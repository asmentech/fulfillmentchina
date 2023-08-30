import LS from 'cz-storage'
export default {
    setToken: (state, log) => {
        state.token = log
        LS.put('token', log, 1 / 8);
    },
    setTagActive: (state, log) => {
        state.tagActive = log;
        LS.put('tagActive', log, 1 / 8);
    },
}