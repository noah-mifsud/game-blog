//Edit post route, displays post data with editing tools avaliable to the user

//React (Hooks) imports
import React, { useState } from 'react'

//React icons imports
import { HiX } from 'react-icons/hi';


function EditPost() {
    //useStates that store inputted data
    const [titleTxt, setTitleTxt] = useState('');
    const [descTxt, setDescTxt] = useState('');
    const [tagTxt, setTagTxt] = useState('');
    //useState stores all tags
    const [tags, setTags] = useState(['']);

    //Handles input by updating useStates with user input
    const inputHandler = (e:any, setInput:any) => {
        setInput(e.target.value);
    }
    //Creates a tag and adds it to tags
    const addTag = (e:any) => {
        e.preventDefault();
        let tempTags = [...tags];
        tempTags.push(tagTxt);
        setTags(tempTags);
        setTagTxt('');
    }
    //Deletes a tag from tags
    const deleteTag = (tagNum:number) => {
        let tempTags = [...tags];
        tempTags.splice(tagNum, 1);
        setTags(tempTags);
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
                {tags.map((tag, index) => {
                    if (tag !== '') {
                        return <div className='tag-div' key={index}>
                                    <h3>{tag}</h3>
                                    <HiX onClick={() => deleteTag(tags.indexOf(tag))}/>
                                </div>
                    } else {
                        return <div key={index} className='hidden'></div>
                    }
                }
                )}
                {tags.length <= 3 &&
                <div>
                    <label htmlFor='tagInput' className=''>Enter Tag:</label>
                    <form className='tag-input'>
                        <input type='text' placeholder='Action' id='tagInput' className='' value={tagTxt} onChange={(e) => inputHandler(e, setTagTxt)}/>
                        <button onClick={(e) => addTag(e)}>+</button>
                    </form>
                </div>
                }
                <p>Note: Max of 3 tags</p>
            </section>
        </aside>
        <article className='post-display'>
            <header>
                <h1>{titleTxt}</h1>
                <h2>{descTxt}</h2>
                <div className='tags'>
                    {tags.map((tag, index) => {
                        if (tag !== '') {
                            return <p key={index}>{tag}</p>
                        } else {
                            return <div key={index} className='hidden'></div>
                        }
                    })}
                </div>
            </header>
        </article>
    </main>
  )
}

export default EditPost
