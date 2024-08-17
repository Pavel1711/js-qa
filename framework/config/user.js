export const USER = {
    userName: 'Pavel',
    password: 'Pavel_Kochura00!'
}

export const ALWAYS_NEW_USER = {
    userName: `Pavel_${new Date().getTime()}`,
    password: 'Pavel_Kochura00!'
}

export const UNCORRECT_PASSWORD_FOR_USER = {
    userName: `Pavel_${new Date().getTime()}`,
    password: '123'
}
