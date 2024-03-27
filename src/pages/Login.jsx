import { useState, useEffect } from 'react'        //La página de loggin es exactame te igual con la excepción de que sólo va a ser email y password
import {FaSignInAlt} from 'react-icons/fa'

const login = () => {

    const [formData, setFormData] = useState ({  
        email: '',
        password: ''
    })

    const {email, password} = formData

    const onChange = (e) => { 
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
                <h4><FaSignInAlt/>Ingresar al Sistema</h4>
                    <p>Por favor, escribe tus credenciales</p>
                        </section>

                    <div className='form-group'>
                        <input
                            type="email"
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Por favor, escribe tú email'
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
                        <button type='submit' className= 'btn btn-block' >
                            Accesar
                        </button>
                    </div>
        </>
    )
}

export default login