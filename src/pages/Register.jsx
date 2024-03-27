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

const onChange = (e) => {  //Aquí estamos definiendo el rpoceso OnChange
    setFormData ((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}

const onSubmit = (e) => {
    e.preventDefault ()
}


return (
        <>
            <section className='heading'>
                <h4><FaUser/>Registrar Usuario</h4>
                    <p>Por favor, crea un usuario</p>
            </section>
            

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input 
                            type="text"
                            className='form-control'  //éste está en el css
                            id='name'
                            name='name'
                            value={name}
                            placeholder='Por favor, escribe tú nombre'  //manda un msg
                            onChange = {onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type="email"  //cambiamos el tipo
                            className='form-control'  //éste está en el css
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Por favor, escribe tú email'  //manda un msg
                            onChange = {onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type="password"  //cambiamos el tipo de dato parq que nos  uestre los asteriscos
                            className='form-control'  //éste está en el css
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Por favor, escribe tú password'  //manda un msg
                            onChange = {onChange}
                        />
                    </div>
                    
                    <div className='form-group'>
                        <input
                            type="password"   //cambiamos el tipo de dato parq que nos  uestre los asteriscos
                            className='form-control'  //éste está en el css
                            id='password2'
                            name='password2'
                            value={password2}
                            placeholder='Por favor, confirma tú password2'  //manda un msg
                            onChange = {onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className= 'btn btn-block' >
                            Crear
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register
