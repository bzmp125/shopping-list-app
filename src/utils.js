const lsPrefix = 'shopping-app-';

export function getLS(key) {
    return localStorage.getItem(`${lsPrefix}${key}`) ? JSON.parse(localStorage.getItem(`${lsPrefix}${key}`)) : '';
}

export function setLS(key, value) {
    localStorage.setItem(`${lsPrefix}${key}`, JSON.stringify(value))
}
