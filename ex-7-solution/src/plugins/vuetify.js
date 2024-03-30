import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { VCalendar } from 'vuetify/labs/VCalendar'

export default createVuetify({
  components: { ...components, VCalendar},
  directives,
  theme: {
    defaultTheme: 'myTheme', // Use your custom theme
    themes: {
      myTheme: {
        dark: false, // Set to true for dark mode
        colors: {
          // Define colors for your theme
          primary: '#1976D2', // Example primary color
          secondary: '#424242', // Example secondary color
          accent: '#82B1FF', // Example accent color
          // Add other colors as needed
          // Ensure contrast between background and text/icons for visibility
        },
      },
    },
  },
})
