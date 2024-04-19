import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import { Quasar } from 'quasar'

import enUS from 'src/i18n/en-US.json'
import nlBE from 'src/i18n/nl-BE.json'
import frBE from 'src/i18n/fr-BE.json'

export default boot(({ app }) => {
  console.log('browser language:', Quasar.lang.getLocale())

  // Type-define 'enUS' as the master schema for the resource
  type MessageSchema = typeof enUS

  const i18n = createI18n<[MessageSchema], 'en-US' | 'nl-BE' | 'fr-BE'>({
    legacy: false,
    locale: Quasar.lang.getLocale(),
    fallbackLocale: 'en-US',
    messages: {
      'en-US': enUS,
      'nl-BE': nlBE,
      'fr-BE': frBE,
    },
  })

  app.use(i18n)
})
