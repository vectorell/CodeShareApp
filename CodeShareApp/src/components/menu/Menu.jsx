import './Menu.css'
import { useContext, useState } from 'react'
import storeItems from '../../App'


function Menu({ setShowLatest, setShowBest, setShowUpload, setShowUpVoted }) {
    const fetchedStoreItems = useContext(storeItems)
    const [classStateLatest, setClassStateLatest] = useState('')
    const [classStateBest, setClassStateBest] = useState('')
    const [classStateUpload, setClassStateUpload] = useState('')
    const [classStateUpVote, setClassStateUpVote] = useState('')

    const views = [
        {name: 'latest', setView: setShowLatest, setClass: setClassStateLatest}, 
        {name: 'best', setView: setShowBest, setClass: setClassStateBest},
        {name: 'upload', setView: setShowUpload, setClass: setClassStateUpload},
        {name: 'upvoted', setView: setShowUpVoted, setClass: setClassStateUpVote}
    ]
    
    function navigateTo(view) {

        views.forEach(v => {
            if (v.name === view) {
                v.setView(true)
                v.setClass('selected')
            } else {
                v.setView(false)
                v.setClass('')
            }
        })

    }
    

    return (
        <section className="menu component">
            <button className={ classStateLatest } onClick={() => navigateTo('latest') }> Latest </button>
            <button className={ classStateBest } onClick={() => navigateTo('best')}> Best </button>
            <button className={ classStateUpload } onClick={() => navigateTo('upload')}> Upload new </button>
        </section>
    )
}

export default Menu