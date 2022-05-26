import React, {useState} from 'react'
import Story from './Story'

function MadlibsForm() {
    const handleSubmit = event => {
        event.preventDefault();
        setShowStory(true)
        console.log('submitted')
    }

    const [formData, setFormData] = useState({
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    })

    const [showStory, setShowStory] = useState(false)

    const handleChange = event => {
        const { name, value } = event.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }   

    const onClick = event => {
        event.preventDefault()
        setShowStory(false)
        setFormData({
            noun: '',
            noun2: '',
            adjective: '',
            color: ''
        })
    }

    return (
        <div className='Madlibs'>
            <h1>Madlibs!</h1>
            {!showStory ? (
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
                <div>
                    <Story 
                        noun = {formData.noun}
                        noun2 = {formData.noun2}
                        adjective = {formData.adjective}
                        color = {formData.color}
                    />
                    <button onClick={onClick}>Restart</button>
                </div>
                
            )}
            
        </div>
        
    )
}
export default MadlibsForm;