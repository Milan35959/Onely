import React from 'react'

const FaqO = ({title,content}) => {
  return (
    <>
      
        <div className='faqB'>
            <details>
                <summary>
                    <span className='boxtext'>{title}</span>
                    <span className='faqsvg'>
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                        </svg>
                    </span>
                </summary>
                <p>
                {content}
                </p>
            </details>
        </div>
      
    </>
  )
}

export default FaqO
