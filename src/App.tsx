import { useState } from 'react';
import './App.css';
import LogoGrid from './component/logo-grid';

function App() {
  const tabs = [
    {
      key: 'al-ml-bi',
      name: 'AL ML BI',
      content:  <LogoGrid items={Array.from({ length: 20 })} />,
    },
    {
      key: 'software',
      name: 'Software',
      content:  <LogoGrid items={Array.from({ length: 10 })} />,
    },
    {
      key: 'mobile',
      name: 'Mobile',
      content: null,
    },
    {
      key: 'blockchain',
      name: 'Blockchain',
      content: null,
    },
  ];

  const [activeTab, setActiveTab] = useState('al-ml-bi');

  const activeTabContent = tabs.find((tab) => tab.key === activeTab)?.content;


  return (
   <section className='expertise-section'>

    <h1>Benefit from unmatched tech <br /> stack expertise </h1>
    <small>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam debitis architecto praesentium nulla possimus aut rerum nesciunt totam, esse id ut maiores ducimus, nihil eaque similique magni, expedita cumque? Odio impedit soluta earum accusamus consequuntur accusantium, beatae autem incidunt minima officiis id amet rem ducimus eius neque ab? Expedita exercitationem, porro maxime, dolore esse repellat nostrum veritatis eaque tempora quaerat accusamus qui unde quasi fugiat error reiciendis nobis distinctio ipsum animi cum facere enim deserunt quis doloremque! Itaque provident dolores pariatur amet
    </small>
    

     <div className="tabs">
      <ul>
        {tabs?.map((tab) => (
          <li
            className={tab.key === activeTab ? 'active' : ''}
            key={tab.key}
          >
            <button
              type="button"
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      {activeTabContent}
    </div>
   </section>
  );
}

export default App;
