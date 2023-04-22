import './SnippetsLatest.css'
import { useEffect, useState } from 'react'

function SnippetsLatest() {
    const [data, setData] = useState([])


    async function fetchLatestSnippets() {
        const baseUrl = 'https://www.forverkliga.se/JavaScript/api/api-snippets.php?latest'

        let response = await fetch(baseUrl)
        let data = await response.json()
        console.log(data)
        setData(data)

    }

    useEffect(() => {
        fetchLatestSnippets()
    }, [])



    async function deleteSnippet(id) {
        const baseUrl = `https://www.forverkliga.se/JavaScript/api/api-snippets.php?delete&id=`
        const options = {
            // method: 'GET',
            // headers: { "content-type": "text/html" },
		    // body: JSON.stringify({ id })
        }
        console.log(id)
        console.log(`${baseUrl}${id}`)
        const response = await fetch(`${baseUrl}${id}`, options)
        console.log(response)

        response.status === 200 ? setData(data.filter(snippet => snippet.id !== id))
        : console.log('Error when deleting snippet!')
    }

    async function upvote(id, score) {
        console.log('upvote')
        console.log(id)
        console.log(score)


        const baseUrl = `https://www.forverkliga.se/JavaScript/api/api-snippets.php?upvote&id=${id}`

        const dataObj = {
            upvote: '',
            id: id
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataObj)
        }

        const response = await fetch(baseUrl, options)
        console.log(response)
        const fetchedData = await response.json()
        console.log(fetchedData)

        

        setData(prevData => {
            return prevData.map(snippet => {
                if (snippet.id === fetchedData.id) {
                    return {
                        ...snippet,
                        score: score + 1
                    }
                }
                return snippet
            })
        })
    }


    // console.log(dataToDivs)
    return (
        <div className="component">
                
            <section className="framed">
                <span className="intro">
                    The latest snippets from coders like you!
                </span>
            </section>

            <section>
                
                {data.map((snippet) => {
        return (
        <div className='vote' key={snippet.id}>
            <code> {snippet.content} </code>
            <div className="vote-buttons">

                <button className="vote" onClick={() => {
                    deleteSnippet(snippet.id)
                }}>🗑️</button>

                <button className="vote">✍️</button>

                <button className="vote" onClick={() => {
                    upvote(snippet.id, snippet.score)
                }}>👍</button>

                <button className="vote">👎</button>

                <span className="score"> {snippet.score} </span>
            </div>
        </div>
        )
    })}

            </section>
            <hr/>
        </div>
    )
}

export default SnippetsLatest