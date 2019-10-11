import React, { useState } from 'react';

const Form = props => {

    const [name, setName] = useState('')

    return (
        <div>
            <form>
                <label>Name: 
                    <input type='text' />
                </label> <br />

                <label>Email:
                  <input type='text'/>
                </label> <br />

                <label>Password:
                  <input type='text'/>
                </label> <br />

                <label>I have read the Terms of Service
                  <input type='checkbox' />
                </label> <br />

                <label>
                  <button>Send</button>
                </label>
            </form>
        </div>

    )
}

export default Form;

