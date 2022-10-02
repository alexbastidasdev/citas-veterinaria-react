const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id} = paciente;
    const handleEliminar = () => {
        const respuesta = confirm('¿Estas seguro de eliminar este paciente?');

        if(respuesta) {
            eliminarPaciente(id);
        }
    }

    return (
        <div className="p-5 bg-white rounded-md m-5">
            <div>
                <p className="text-gray-600">Nombre: {nombre}</p>
                <p className="text-gray-600">Propietario: {propietario}</p>
                <p className="text-gray-600">Email: {email}</p>
                <p className="text-gray-600">Fecha Alta: {fecha}</p>
                <p className="text-gray-600">Síntomas: {sintomas}</p>
            </div>

            <div className="flex justify-center">
                <button 
                    type="button" 
                    className="py-2 px-7 bg-indigo-500 hover:bg-indigo-700 text-white font-bold uppercase rounded-md mt-3 mx-2"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button 
                    type="button" 
                    className="py-2 px-5 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-md mt-3 mx-2"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>   

        </div>
    );
}

export default Paciente