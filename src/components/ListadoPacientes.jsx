import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className="md:w-2/4 md:h-screen mb-2">

            {pacientes && pacientes.length ? (
                <>
                    <div className="">
                        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                        <p className="text-lg mt-5 text-center">
                            Administra Tus {" "}
                            <span className="text-indigo-600 font-bold">Pacientes Y Citas</span>
                        </p>
                    </div>

                    <div className=" my-4 md:h-screen md:overflow-y-scroll">
                        {pacientes.map( paciente => (
                            <Paciente 
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />       
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className="pb-5">
                        <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
                        <p className="text-lg mt-5 text-center mb-5">
                            Agrega Tus Pacientes{" "}
                            <span className="text-indigo-600 font-bold">Y Aparecerán En Éste Lugar</span>
                        </p>
                    </div>
                </>
            )} 
      
        </div>
    );
}

export default ListadoPacientes