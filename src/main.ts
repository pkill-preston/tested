import App from './App.vue';

import { createApp } from 'vue';
import { createVuestic, createIconsConfig } from "vuestic-ui";

import './assets/styles/main.scss';
import "vuestic-ui/css"
import "material-design-icons-iconfont/dist/material-design-icons.min.css";

createApp(App)
  .use(createVuestic({
    config:{
      colors:{
        variables: {
          // Default colors
          primary: "#d7186d",
          secondary: "#000000",
          success: "#40e583",
          info: "#2c82e0",
          danger: "#e34b4a",
          warning: "#ffc200",
          gray: "#babfc2",
          dark: "#34495e",

          // Custom colors
          yourCustomColor: "#d0f55d",
        },
      }
    }
  }))
  .mount('#app')
