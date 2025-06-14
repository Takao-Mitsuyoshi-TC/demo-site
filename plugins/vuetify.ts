import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VFileUpload } from 'vuetify/labs/VFileUpload'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#ffffff',
    surface: '#FFFFFF',
    primary: '#ffc0cb',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
    components: {
      VFileUpload
    }
  })
  app.vueApp.use(vuetify)
})