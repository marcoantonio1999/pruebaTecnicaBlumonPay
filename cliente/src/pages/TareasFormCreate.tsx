import { useForm } from "react-hook-form";
import { createTareas } from "../api/tareas.api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

/**
 * Componente para crear nuevas tareas.
 * Utiliza react-hook-form para la gestión de formularios y react-hot-toast para mostrar notificaciones.
 */
function TareasCreate(){

    // Hook para la navegación programática.
    const navigate = useNavigate();

    // Inicialización de react-hook-form para manejar el formulario, incluyendo la validación y los errores.
    const {register, handleSubmit, formState:{
        errors
    }} = useForm();

    /**
     * Manejador para el envío del formulario.
     * Crea una nueva tarea utilizando la API y muestra una notificación de éxito o error.
     */
    const onSubmit = handleSubmit(async data => {
        try{
            // Llamada a la API para crear una nueva tarea y navegación a '/view' si tiene éxito.
            const res = await createTareas(data)
            console.log(res)
            toast.success('Tarea creada')
            navigate('/view');
            
        }catch(err){
            // Muestra un mensaje de error si falla la creación de la tarea.
            toast.error('Error al crear Tarea');
        };
        
    })

    // Renderiza el formulario de creación de tareas.
    return (
        <div className="max-w-xl mx-auto">
            <h1 className="font-bold uppercase">Crear tarea</h1>
            <form onSubmit={onSubmit}>
                <input type="text"
                placeholder="Titulo"
                {...register('titulo', {required:true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                />
                {errors.titulo && <span className="text-red-300"> El titulo es requerido</span>}
                <textarea rows="3"
                placeholder="Descripcion"
                {...register('descripcion', {required:true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                ></textarea>
                {errors.titulo && <span className="text-red-300"> La descripción es requerido</span>}
                
                <select {...register('estado',{ defaultValue: 'pendiente' })}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                >
                    <option value="pendiente" className="bg-yellow-500">Pendiente</option>
                    <option value="completada" className="bg-green-500">Completada</option>
                    <option value="en_pruebas" className="bg-purple-500">En Pruebas</option>
                    <option value="estancado" className="bg-orange-500">Estancado</option>
                </select>
                <button className="bg-indigo-500 p-3 rounded-lg">Guardar</button>
            </form>
        </div>
    )
}

export default TareasCreate;