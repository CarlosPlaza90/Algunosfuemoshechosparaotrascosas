import React, { useState } from 'react';
import checkbox from './check.jsx'

const TabContainer = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? 'active' : ''}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

// Example usage
const Container = (checkbox) => {
    const tabs = [
        { label: 'Tab 1', content: 
        
        <div>
            <br></br>Content for Tab 1
            <checkbox/>
        </div> },

        { label: 'Tab 2', content: <div>Content for Tab 2</div> },
        { label: 'Tab 3', content: <div>Content for Tab 3</div> },
    ];

    return (
        <div>
            <h1>To Do</h1>
            <TabContainer tabs={tabs} />
        </div>
    );
};

export default Container;
