import React from 'react'
import './App.css'
import Menu from './components/menu/Menu'
import SnippetsLatest from './components/snippetsLatest/SnippetsLatest'
import SnippetsBest from './components/snippetsBest/SnippetsBest'
import MostUpvoted from './components/mostUpvoted/MostUpvoted'
import UploadSnippet from './components/uploadSnippet/UploadSnippet'
import { createContext, useState } from 'react'
export const myStore = React.createContext()



function App() {
    const [latest, setShowLatest] = useState(true)
    const [best, setShowBest] = useState(false)
    const [upload, setShowUpload] = useState(false)
    const [upVoted, setShowUpVoted] = useState(false)

    const storeItems = {
        latest,
        setShowLatest,
        best,
        setShowBest,
        upload,
        setShowUpload,
        upVoted,
        setShowUpVoted,
    }

    return (
        <myStore.Provider value={storeItems}>
            <input id="borders" /> <label htmlFor="borders">Toggle component borders</label> 
            {/* type="checkbox" */}

            <header>
                <h1> Code share </h1>
            </header>
            <main className="show-components">
                <Menu 
                    setShowLatest={setShowLatest}
                    latest={latest}
                    setShowBest={setShowBest}
                    best={best}
                    setShowUpload={setShowUpload}
                    upload={upload}
                    setShowUpVoted={setShowUpVoted}
                    upVoted={upVoted}
                />
                <hr />
                {latest && <SnippetsLatest />}
                {best && <SnippetsBest/>}
                {upVoted && <MostUpvoted />}
                {upload && <UploadSnippet />}

            </main>
        </myStore.Provider>

    )
}


export default App