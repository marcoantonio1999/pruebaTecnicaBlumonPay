import axios from "axios";

/**
 * Aqui se maneja todas las llamadas al back-end se hace con axos
 */
const tareasAPI = axios.create({
    baseURL : 'http://127.0.0.1:8000/tareas/api/v1/tareas/'
})

//obtiene todas las tareas que existen
export const getAllTareas = () => tareasAPI.get("/")

//crea una nueva tarea
export const createTareas = (tareas) => tareasAPI.post("/",tareas)

//borra una tarea por id
export const deleteTarea = (id) => tareasAPI.delete(`/${id}`)

//actualiza una tarea especifica por id
export const updateTarea = (id, tarea) => tareasAPI.put(`/${id}/`, tarea)

