import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VersionSwitcher from './components/VersionSwitcher.vue'
import Layout from './Layout.vue'
import './main.css'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('VersionSwitcher', VersionSwitcher)
    },
} satisfies Theme
