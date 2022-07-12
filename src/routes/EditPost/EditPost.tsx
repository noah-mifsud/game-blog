/*  ROUTE
    Displays posts and tools for user to edit a post
*/
//React imports
import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { HiX } from 'react-icons/hi';


function EditPost() {
    //Title states
    const [titleText, setTitleText] = useState('Title');
    const [taglineText, setTaglineText] = useState('Insert tagline');
    const [taglineToggle, setTaglineToggle] = useState(false);
    const [tagList, setTagList] = useState(['Action']);

    //Updates useState when called
    const updateText = (e:any, setState:any) => {
        setState((e.target.value));
    }
    //Toggle element on page
    const toggleElement = (setState:any, state:any) => {
        setState(!state);
    }
    //Add new item to a list
    const addToList = (setList:any, list:any, tempText:string) => {
        let tempList = [...list];
        tempList.push(tempText);
        setList(tempList);
    }
    const editList = (e:any, setList:any, list:any, index:number) => {
        let tempList = [...list];
        tempList.splice(index, 1, e.target.value);
        setList(tempList);
    }
    const removeFromList = (setList:any, list:any, index:number) => {
        let tempList = [...list];
        tempList.splice(index, 1);
        setList(tempList);
    }
  return (
    <main>
        {/* Edit Tools */}
        <aside className='edit-tools'>
            <h2>Header -</h2>
            {!taglineToggle ?
                <button onClick={() => toggleElement(setTaglineToggle, taglineToggle)}>ADD TAGLINE</button> : <button className='remove-btn' onClick={() => toggleElement(setTaglineToggle, taglineToggle)}>REMOVE TAGLINE</button>
            }
            {tagList.map((item, index) => {
                    if (item !== '') {
                        return <div className='tags-edit'>
                            <p dangerouslySetInnerHTML={{__html: item}}></p>
                            <HiX className='delete-icon' onClick={() => removeFromList(setTagList, tagList, tagList.indexOf(item))}/>
                        </div>
                    } else {
                        return <div></div>
                    }
            })
            }
            {tagList.length < 3 &&
                <button onClick={() => addToList(setTagList, tagList, 'Action')}>ADD TAG</button>
            }
            <p className='note'>Note: Max of 3 tags per post.</p>
        </aside>
        {/* Post Document */}
        <article className='edit-doc'>
            <ContentEditable className='title' onChange={(e) => updateText(e, setTitleText)} html={titleText}/>
            {taglineToggle &&
                <ContentEditable className='tagline' onChange={(e) => updateText(e, setTaglineText)} html={taglineText}/>
            }
            <div className='tag-container'>
                {tagList.map((item, index) => {
                    if (item !== '') {
                        return <ContentEditable key={index} className='tag' onChange={(e) => editList(e, setTagList, tagList, index)} html={tagList[tagList.indexOf(item)]}/>
                    } else {
                        return <div></div>
                    }
                })
                }
            </div>
        </article>
    </main>
  )
}

export default EditPost
