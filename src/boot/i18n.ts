import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import { Quasar } from 'quasar'

import messages from 'src/i18n'

export default boot(({ app }) => {
  console.log('browser language:', Quasar.lang.getLocale())

  const i18n = createI18n({
    legacy: false,
    locale: Quasar.lang.getLocale(),
    fallbackLocale: 'en-US',
    messages,
  })

  app.use(i18n)
})
