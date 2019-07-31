import React, { useState, useEffect, useRef } from 'react';

export default ({ title, children }) => {
  const [collapsed, setCollapse] = useState(true)
  const [collapsedHeight, setHeight] = useState('0px')

  const testRef = useRef(null)

  useEffect(() => {
    const elementHeight = testRef.current.scrollHeight
    setHeight(elementHeight)
  },[]);

  return (
    <div className="container m-auto">
        <button onClick={() => setCollapse(!collapsed)}>
            <h4 className="text-2xl p-8">{title}</h4>
        </button>
        
        <div className="p-4 bg-blue-400 overflow-hidden"
            ref={testRef}
            style={{ height: collapsed ? '0' : collapsedHeight, opacity: collapsed ? '0' : '1', transition: 'all 0.6s ease' }}>
            {children}
        </div>
        
    </div>
  )
}
