import { useEffect, useState } from "react";
import { getAllTareas } from "../api/tareas.api";
import { deleteTarea } from "../api/tareas.api";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

/**
 * Componente para listar todas las tareas.
 * Utiliza la API para obtener y eliminar tareas, y react-router-dom para la navegación.
 */
export function ListarTareas(){

    // Estado para almacenar las tareas
    const [tareas, setTareas] = useState([]);

    // Hook de efecto para cargar las tareas al montar el componente
    useEffect(() =>{
        async function cargarTareas(){
            const res = await getAllTareas();
            setTareas(res.data);
            console.log(res);
            console.log(res.data);
            if(res.data.length == 0){
                console.log('entro al if')
                toast.error('No hay tareas que mostrar, crea una nueva tarea')
            }

        }
        cargarTareas();

    },[]);
    
    // Función para eliminar una tarea específica
    const eliminarTarea = async (id) => {
        try {
            await deleteTarea(id);
            setTareas(tareas.filter(tarea => tarea.id !== id));
            toast.success('tarea eliminada'); 
        } catch (error) {
            console.error("Error al eliminar la tarea: ", error);
        }
    };

    // Función para formatear la fecha ISO en un formato legible
    const formatearFecha = (fechaIso) => {
        const fecha = new Date(fechaIso);
        return `${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`;
    };

    // Hook para la navegación programática
    const navigate = useNavigate();

    // Funciones para manejar la navegación
    const handleEdit = (tareaid) => {
        navigate('/editar/' + tareaid);
    };

    const nav = () => {
        navigate('/create/');
    };

    
    // Renderiza la lista de tareas
    return  (
            <div>
                <h1 className="font-bold text-xl"> Aplicación de tareas to-do</h1>
                <div className="grid grid-col-3 gap-3 py-3">
                {tareas.map(tarea => (
                    <div key={tarea.id} className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer">
                        <h1 className="font-bold uppercase">{tarea.titulo}</h1>
                        <p className="text-slate-490">{tarea.descripcion}</p>
                        <p className="" >{tarea.estado}</p>
                        <p>Fecha de creación: {formatearFecha(tarea.fecha)}</p>
                        <button onClick={() => eliminarTarea(tarea.id)} className="bg-red-500 px-3 py-2 rounded-lg m-4 hover:bg-red-700">Eliminar</button>
                        <button onClick={() => handleEdit(tarea.id)} className="bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-700">Editar</button>
                    </div>
                ))}
                </div>
                <button onClick={() => nav()} className="bg-indigo-500 px-3 py-2 rounded-lg flex ">Crear nueva tarea</button>
            </div>
            )
            
}           