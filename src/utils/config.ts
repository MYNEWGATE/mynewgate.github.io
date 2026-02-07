import { parseJwt } from "./parseJWT"

const token = parseJwt(sessionStorage.getItem('token')||'');
export const config ={
    app_title: 'Project-Template',
    app_version:'1.0.1',
    description:'This web application is for template of project creation',

    color_theme:'',
    theme_code: token.themeCode,
}