export default function({ $axios, redirect, store }) {
  $axios.interceptors.request.use( request => {
    if ( store.getters[ 'auth/isAuthenticated' ] && !request.headers.common[ 'Authorization' ] ) {
        const token = store.getters[ 'auth/token' ]
        request.headers.common[ 'Authorization' ] = `Bearer ${token}`
    }
    return request
} ),
  $axios.onError(err => {
    if (err.response) {
      if (err.response.status === 401) {
        redirect("/login?message=session");
        store.dispatch("auth/logout");
      }
      if (err.response.status === 500) {
        console.error("Server 500 error");
      }
    }
  });
}
