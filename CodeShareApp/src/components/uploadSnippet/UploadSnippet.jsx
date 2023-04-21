import './UploadSnippet.css'
import { useState } from 'react'

function UploadSnippet() {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    // console.log(title)
    // console.log('content')
    // console.log(content)

    async function handleUpload() {
        const baseUrl = 'https://www.forverkliga.se/JavaScript/api/api-snippets.php'

        const dataObj = {
            add: '',
            title: title,
            content: content,
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataObj)
        }

        let response = await fetch(`${baseUrl}`, options)
        console.log(response)
        const data = await response.json()        
        console.log(data)
    }

    return (
        <div className="component">
            <section className="framed">
                <span className="intro">
                Upload a new code snippet to the cloud!
                </span>
            </section>
            <section className="form">
                <label htmlFor="i1"> Title </label>
                <input id="i1" type="text" onChange={(e) => {
                  setTitle(e.target.value)  
                }  }/>
                
                <label htmlFor="i2"> Content </label>
                <textarea id="i2" rows="8" onChange={(e) => {
                    setContent(e.target.value)
                }}></textarea>
                
                { (content === '') && (title === '') ? <button disabled> Upload </button> : <button onClick={handleUpload}> Upload </button> }

                
            </section>
        </div>
    )
}

export default UploadSnippet