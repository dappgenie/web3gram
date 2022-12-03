export default {
  layoutModeAction (context, payload) {
    if (payload.dark) {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }

    document.getElementsByTagName('html')[0].setAttribute('dir', payload.rtl ? 'rtl' : 'ltr')
    context.commit('layoutModeCommit', {
      dark: payload.dark,
      rtl: payload.rtl
    })
  }
}
