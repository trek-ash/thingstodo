import API from './API'

export default {
  addTask(data){
    return API().post('/task', data)
  },
  getAllTasks(){
    return API().get("/task/all")
  },

}