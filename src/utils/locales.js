import locales from '../locales/index'

export const tt = (key) => {
    return locales[key] || key
}