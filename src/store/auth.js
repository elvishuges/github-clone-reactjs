const TokenKey = 'User-Token'

export function getToken () {
  return window.localStorage.getItem(TokenKey)
}


export const setToken = (token) =>  new Promise((resolve,reject)=>{
  window.localStorage.setItem(TokenKey, token)
  resolve()
})

export const removeToken =  new Promise((resolve,reject)=>{
     window.localStorage.removeItem(TokenKey)
     resolve(true)
})
