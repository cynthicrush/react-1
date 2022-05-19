import React, {useState} from 'react'
import Story from './Story'

function MadlibsForm() {
    const handleSubmit = event => {
        event.preventDefault();
        console.log('submitted')
    }

    const [formData, setFormData] = useState({
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    })

    const handleChange = event => {
        const { name, value } = event.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }   

    return (
        <div className='Madlibs'>
            <h1>Madlibs!</h1>
            {!formData ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor='noun'>Noun</label>
                    <input 
                        id='noun'
                        name='noun'
                        value={formData.noun}
                        onChange={handleChange}
                    />
                    <label htmlFor='noun2'>Noun 2</label>
                    <input 
                        id='noun2'
                        name='noun2'
                        value={formData.noun2}
                        onChange={handleChange}
                    />
                    <label htmlFor='adjective'>Adjective</label>
                    <input 
                        id='adjective'
                        name='adjective'
                        value={formData.adjective}
                        onChange={handleChange}
                    />
                    <label htmlFor='color'>Color</label>
                    <input 
                        id='color'
                        name='color'
                        value={formData.color}
                        onChange={handleChange}
                    />
                    <button>Get Story</button>
                </form>
            ) : (
                <Story />
            )}
            
        </div>
        
    )
}
export default MadlibsForm;