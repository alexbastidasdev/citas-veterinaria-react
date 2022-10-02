// importar hooks: useState, useEffect
import { useState, useEffect } from 'react'

import Error from './Error'

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    // state
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    // useEffect
    useEffect(() => {
        if(Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);


    const generarId = () => {
        const random = Math.random().toString(36).substr(2); // 36 es el numero de caracteres
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // validacion del formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true); // si hay un campo vacio
            return; // corta la ejecucion
        } 
        // si no hay campos vacios
        // eliminar el mensaje previo
        setError(false); 

        // crear el objeto
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if(paciente.id) {
            // Editar paciente
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteActual => pacienteActual.id === paciente.id ? objetoPaciente : pacienteActual);
            setPacientes(pacientesActualizados);
            setPaciente({});

        } else {
            // Nuevo Paciente
            // agregar el objeto al state
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        
        // reiniciar el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas(''); 

    }

    return (
        <div className="md:w-2/4">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center">
                Añade Pacientes y {" "} 
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>

            <form className="bg-white shadow-md rounded-md p-5 m-5" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="inputMascota">Nombre Mascota</label>
                    <input 
                        id="inputMascota" 
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md" 
                        type="text" 
                        placeholder="Nombre Mascota" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="inputPropietario">Nombre Propietario</label>
                    <input 
                        id="inputPropietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        type="text" 
                        placeholder="Nombre Propietario" 
                        value={propietario} 
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="inputEmail">Email</label>
                    <input 
                        id="inputEmail" 
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md" 
                        type="email" 
                        placeholder="Email Propietario" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="inputAlta">Alta</label>
                    <input 
                        id="inputAlta" 
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md" 
                        type="date" 
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="textareaSintomas">Síntomas</label>
                    <textarea 
                        id="textareaSintomas" 
                        className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md" 
                        placeholder="Describe Los Síntomas"
                        value={sintomas} 
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input type="submit" className="bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md mb-3" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />

                {error && <Error mensaje='Todos Los Campos Son Obligatorios' />}

            </form>
        </div>
    );  
    
}

export default Formulario;