//Edit post route, displays post data with editing tools avaliable to the user

//React (Hooks) imports
import React, { useState } from 'react'


function EditPost() {
    //Post useState data
    const [titleTxt, setTitleTxt] = useState('');
    const [descTxt, setDescTxt] = useState('');
    const [tagCount, setTagCount] = useState(0);
    const [showAddTags, setShowAddTags] = useState(true);
    const [tagsStyle, setTagsStyle] = useState(['hidden', 'hidden', 'hidden'])
    const [tag1Txt, setTag1Txt] = useState('');
    const [tag2Txt, setTag2Txt] = useState('');
    const [tag3Txt, setTag3Txt] = useState('');
    //Handles input by updating useStates with user input
    const inputHandler = (e:any, setInput:any) => {
        setInput(e.target.value);
    }
    //Adds new tags
    const addTagHandler = () => {
        if (tagCount < 3) {
            //Get new tagCount value immediately
            const tempTagCount = tagCount + 1;
            switch(tempTagCount) {
                case 1:
                    setTagsStyle(['visible', 'hidden', 'hidden']);
                    setTagCount(tagCount + 1);
                    break;
                case 2:
                    setTagsStyle(['visible', 'visible', 'hidden']);
                    setTagCount(tagCount + 1);
                    break;
                case 3: 
                    setTagsStyle(['visible', 'visible', 'visible']);
                    setShowAddTags(false);
                    break;   
                }
        }
    }


  return (
    <main className='edit-post-page'>
        <aside className='edit-tools'>
            <section className='header-edit-tools'>
                <h2>Header Info -</h2>
                <label htmlFor='title'>Title:</label><br></br>
                <input type='text' placeholder='My review' id='title' value={titleTxt} onChange={(e) => inputHandler(e, setTitleTxt)}/>
                <label htmlFor='description'>Description:</label>
                <input type='text' placeholder='This is a game review' id='description' value={descTxt} onChange={(e) => inputHandler(e, setDescTxt)}/>
            </section>
            <section>
                <h2>Media -</h2>
                <div className='media-upload-btns'>
                    <button>ADD IMAGE</button>
                    <button>ADD VIDEO</button>
                </div>
                <p>Note: Only 1 image OR video can be added at a time</p>
            </section>
            <section>
                <h2>Tags -</h2>
                <label htmlFor='tag1' className={tagsStyle[0]}>Tag 1:</label>
                <input type='text' placeholder='Action' id='description' className={tagsStyle[0]} value={tag1Txt} onChange={(e) => inputHandler(e, setTag1Txt)}/>
                <label htmlFor='tag2' className={tagsStyle[1]}>Tag 2:</label>
                <input type='text' placeholder='Action' id='description' className={tagsStyle[1]} value={tag2Txt} onChange={(e) => inputHandler(e, setTag2Txt)}/>
                <label htmlFor='tag3' className={tagsStyle[2]}>Tag 3:</label>
                <input type='text' placeholder='Action' id='description' className={tagsStyle[2]} value={tag3Txt} onChange={(e) => inputHandler(e, setTag3Txt)}/>
                {showAddTags &&
                    <button className='add-tag-btn' onClick={addTagHandler}>ADD TAG</button>
                }
                <p>Note: Max of 3 tags</p>
            </section>
        </aside>
        <article className='post-display'>
            <header>
                <h1>{titleTxt}</h1>
                <h2>{descTxt}</h2>
                <div className='tags'>
                    <p>{tag1Txt}</p>
                    <p>{tag2Txt}</p>
                    <p>{tag3Txt}</p>
                </div>
            </header>
        </article>
    </main>
  )
}

export default EditPost
