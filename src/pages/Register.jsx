/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'  //UseEffect se ejecuta la primera vez que se renderiza la página o cada vez que cambia su valor (hooks de ract)
import {FaUser} from 'react-icons/fa'

const Register = () => {

    const [formData, setFormData] = useState ({  //Los state se definen como si fueran arrays pero no lo son */ 
        name: '',
        email: '',
        password: '',
        password2: ''
    })

const { name, email, password, password2 } = formData  //desestructurando el objeto formData

const OnChange = (e) => {  //Aquí estamos definiendo el rpoceso OnChange
    setFormData ((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}


return (
        <>
            <section className='heading'>
                <h4><FaUser/>Registrar Usuario</h4>
                    <p>Por favor, crea un usuario</p>
            </section>
            
            <section className='form'>
                <form>
                    <div className='form-group'>
                <input
                type="text"
                className='from-control'  //éste está en el css
                id='name'
                name='name'
                value={name}
                placeholder='Por favor, escribe tú nombre'  //manda un msg
                onChange = {OnChange}
                />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register
