<template>
  <div>Outing...</div>
</template>

<script>
export default {
  middleware: ['auth'],
  beforeCreate(){
    this.$store.dispatch('auth/logout')
    this.$router.push('/login?message=logout')
  }
}
</script>