import API from './API'

export default {
  addUser(data){
    return API().post('/user', data)
  },
}