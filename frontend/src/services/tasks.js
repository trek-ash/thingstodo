import API from './API'

export default {
  addTask(data){
    return API().post('/task', data)
  },
  getAllTasks(username){
    return API().get(`/task/${username}/all`)
  },

}