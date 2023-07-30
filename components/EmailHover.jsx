import React from 'react'

export default function emailHover({children}) {

    function copyEmailToClipboard () {
        navigator.clipboard.writeText('paul@paultreanor.com');
        const tooltip = document.querySelector('.tooltip');
        const originalText = tooltip.innerText;
        tooltip.innerText = 'Email copied!';
        tooltip.style.display = 'block';
        setTimeout(() => {
            tooltip.innerText = originalText;
        }, 1200);
        }
        
    function handleMouseLeave () {
    const tooltip = document.querySelector('.tooltip');
    tooltip.style.display = 'none';
    }
    
    const handleMouseEnter = () => {
    const tooltip = document.querySelector('.tooltip');
    tooltip.style.display = 'block';
    }

  return (
    <a 
        className="mr-3 p-2 pt-4 rounded-full hover:bg-green-100 transition-colors duration-200"
        onClick={copyEmailToClipboard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
        <span className="tooltip">Copy email to clipboard</span>
    </a>
  )
}
