import './SnippetsBest.css'
import { useEffect, useState } from 'react'

function SnippetsBest() {
    const [data, setData] = useState([])


    async function fetchBestSnippets() {
        const baseUrl = 'https://www.forverkliga.se/JavaScript/api/api-snippets.php?best'

        let response = await fetch(baseUrl)
        let data = await response.json()
        console.log(data)
        setData(data)

    }

    useEffect(() => {
        fetchBestSnippets()
    }, [])



    async function deleteSnippet(id) {
        const baseUrl = `https://www.forverkliga.se/JavaScript/api/api-snippets.php`

        const dataDelete = {
            delete: '',
            id: id,
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataDelete)
        }
        console.log(id)
        console.log(`${baseUrl}${id}`)
        const response = await fetch(`${baseUrl}`, options)
        console.log(response)

        response.status === 200 ? setData(data.filter(snippet => snippet.id !== id))
        : console.log('Error when deleting snippet!')
    }


    async function vote(id, score, type) {
        console.log(id)
        console.log(score)


        const baseUrl = `https://www.forverkliga.se/JavaScript/api/api-snippets.php?${type}&id=${id}`

        let dataObj = {
            id: id,
        }

        type === 'upvote' ? dataObj.upvote = ''    
        : dataObj.downvote = ''    
        



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
                if ((snippet.id === fetchedData.id) && type === 'upvote') {
                    return {
                        ...snippet,
                        score: score + 1
                    }
                } else if ((snippet.id === fetchedData.id) && type === 'downvote') {
                    return {
                        ...snippet,
                        score: score - 1
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
                    The best snippets from coders like you!
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
                    vote(snippet.id, snippet.score, 'upvote')
                }}>👍</button>

                <button className="vote" onClick={() => {
                    vote(snippet.id, snippet.score, 'downvote')
                }}>👎</button>

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

export default SnippetsBest