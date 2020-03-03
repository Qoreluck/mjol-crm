export const actions = { 
    async fetchUsers({commit}) {
        try {
            return await this.$axios.$get('/api/data/users')
        } catch (e) {
            commit('setError', e , {root: true})
        }
    }
}