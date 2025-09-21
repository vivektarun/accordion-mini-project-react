import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './style.css'

function Accordion({items}) {
    const [openIndex, setOpenIndex] = useState(null);

    function toggleOpen(index) {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <div className='accordion'>
            {items.map((item, index) => {
                return (
                    <div className='accordion-item'>
                        <button className='accordion-title' key={index} onClick={() => {toggleOpen(index)}}>
                            {item.title}
                            {openIndex === index ? <FaChevronDown className='right'/> : <FaChevronUp className='right'/>}
                        </button>
                        { openIndex === index && <div className='accordion-content' key = {index}> // here we are short-circuiting 
                            {item.content}
                        </div> }
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion;