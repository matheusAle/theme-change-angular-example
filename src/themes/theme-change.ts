import { Injectable } from '@angular/core';
import lazyThemeChanger from 'lazy-theme-changer';

@Injectable({ providedIn: 'root' })
export class ThemeChanger {
    change = lazyThemeChanger({
        dark: () => import(
            /* webpackChunkName: "bootstrap-theme-dark" */
            /* webpackMode: "lazy" */
            // @ts-ignore
            "style-loader?{'injectType':'styleTag','attributes':{'data-theme':'theme-dark'}}!./bootstrap-theme-dark.scss"
            ),
        navy: () => import(
            /* webpackChunkName: "bootstrap-theme-navy" */
            /* webpackMode: "lazy" */
            // @ts-ignore
            "style-loader?{'injectType':'styleTag','attributes':{'data-theme':'theme-navy'}}!./bootstrap-theme-navy.scss"
            ),
        light: () => import(
            /* webpackChunkName: "bootstrap-theme-light" */
            /* webpackMode: "lazy" */
            // @ts-ignore
            "style-loader?{'injectType':'styleTag','attributes':{'data-theme':'theme-light'}}!./bootstrap-theme-light.scss"
            ),
    });
}
