import './SnippetsLatest.css'
import { useState } from 'react'

function SnippetsLatest() {
    const [dataToDivs, setDataToDivs] = useState([])

    async function fetchLatestSnippets() {
        const baseUrl = 'https://www.forverkliga.se/JavaScript/api/api-snippets.php?latest'

        let response = await fetch(baseUrl)
        let data = await response.json()
        console.log(data)

    }

    fetchLatestSnippets()
    // console.log(dataToDivs)
    return (
        <div className="component">
                
            <section className="framed">
                <span className="intro">
                    The latest snippets from coders like you!
                </span>
            </section>

            <section>
                <div className="vote">
                    <code>let x=5;</code>
                    <div className="vote-buttons">
                        <button className="vote">🗑️</button>
                        <button className="vote">✍️</button>
                        <button className="vote">👍</button>
                        <button className="vote">👎</button>
                        <span className="score">5</span>
                    </div>
                </div>

                {/* {dataToDivs} */}

                <div className="vote">
                    <textarea className="code" rows="4">let y = 8;</textarea>
                    <div className="vote-buttons">
                        <button className="vote">✔️</button>
                        <button className="vote">❌</button>
                    </div>
                </div>


                <div className="vote">
                    <code>
                        // Get a button
                        let btn = document.querySelector('&amp;my-button')
                    </code>
                    <div className="vote-buttons">
                        <button className="vote">🗑️</button>
                        <button className="vote">✍️</button>
                        <button className="vote">👍</button>
                        <button className="vote">👎</button>
                        <span className="score">25</span>
                    </div>
                </div>
            </section>
            <hr/>
        </div>
    )
}

export default SnippetsLatest