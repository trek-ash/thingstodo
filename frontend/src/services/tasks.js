import API from './API'

export default {
  addTask(data){
    return API().post('/task', data)
  },
  updateTaskStatus(task){
    return API().post('/task/update', task)
  },
  getAllTasks(username){
    return API().get(`/task/${username}/all`)
  },

}