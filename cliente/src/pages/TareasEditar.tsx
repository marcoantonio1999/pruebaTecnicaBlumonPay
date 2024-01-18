import { useForm } from "react-hook-form";
import { updateTarea } from "../api/tareas.api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

/**
 * Componente para editar una tarea especifica.
 * Utiliza react-hook-form para la gestión de formularios, react-router-dom para la navegación
 * y react-hot-toast para mostrar notificaciones.
 */

function TareasEdit(){

    // Hook para la navegación programática.
    const navigate = useNavigate();

    // Hook para manejar el formulario, incluyendo la validación y los errores.
    const {register, handleSubmit, formState:{
        errors
    }} = useForm();

    // Obtiene el ID de la tarea de la URL.
    const { id } = useParams();
    
    /**
     * Función que se llama al enviar el formulario.
     * Actualiza la tarea usando la API y muestra una notificación de éxito o error.
     */
    const onSubmit = handleSubmit(async data => {
        try{
            // Llama a la API para actualizar la tarea y navega a '/view' si tiene éxito.
            const res = await updateTarea(id,data)
            console.log(res);
            toast.success('edición completada')
            navigate('/view')
        }catch(err){
            // Muestra errores específicos en función de los campos del formulario.
            if (errors.titulo){
                toast.error('el campo titulo es obligatorio');
            }
            else if (errors.descripcion){
                toast.error('la descripcion es obligatoria es obligatorio');
            }else{
                toast.error('algo salio mal')
            }
        }
    })

    
    // Renderiza el formulario de edición.
    return (
        <div className="max-w-xl mx-auto">
            <h1 className="font-bold uppercase">Editar tarea {id}</h1>
            <form onSubmit={onSubmit}>
                <input type="text"
                placeholder="Titulo"
                {...register('titulo', {required:true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                />
                {errors.titulo && <span className="text-red-300">  Este campo es requerido</span>}
                <textarea rows="3"
                placeholder="Descripcion"
                {...register('descripcion', {required:true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                ></textarea>
                {errors.descripcion && <span className="text-red-300"> Este campo es requerido</span>}
                <select {...register('estado',{ defaultValue: 'pendiente' })}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3">
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

export default TareasEdit;