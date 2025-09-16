import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', content: 'welcome' },
    { id: 'products', label: 'Apple Wood Products', content: 'products' },
    { id: 'story', label: "Kit's Story", content: 'story' },
    { id: 'orchard', label: 'The Apple Orchard', content: 'orchard' },
  ];

  const handleTabKeyDown = (event: React.KeyboardEvent, tabId: string) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === tabId);
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        newIndex = (currentIndex + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    const newTab = tabs[newIndex];
    setActiveTab(newTab.id);
    // Focus the new tab button
    setTimeout(() => {
      const newTabButton = document.getElementById(`tab-${newTab.id}`);
      newTabButton?.focus();
    }, 0);
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <header>
        <h1>
          <img id='logo' src='../public/logo.png' alt='' />
          Kit's Canes
        </h1>
        <nav role='tablist' aria-label='Main navigation'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type='button'
              role='tab'
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={activeTab === tab.id ? 'active' : ''}
              onClick={() => handleTabClick(tab.id)}
              onKeyDown={(e) => handleTabKeyDown(e, tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role='tabpanel'
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            className='tab-panel'
          >
            {activeTab === tab.id && (
              <>
                {tab.id === 'home' && (
                  <section id='welcome'>
                    <section>
                      <h2>Welcome</h2>
                      <p>Hi, I'm Kit!</p>
                      <p>
                        I sure do have a story to tell you about these apple
                        wood canes.
                      </p>
                      <button
                        onClick={() => setActiveTab('story')}
                        className='link-button'
                      >
                        Learn more about Kit's Canes →
                      </button>

                      <section>
                        <h2>Apple Wood Canes</h2>
                        <p>
                          Check out my handmade canes — available in several
                          lengths and flexibilities.
                        </p>
                        <button
                          onClick={() => setActiveTab('products')}
                          className='link-button'
                        >
                          View Apple Wood Products →
                        </button>
                      </section>
                    </section>
                  </section>
                )}

                {tab.id === 'products' && (
                  <section id='products'>
                    <h2>Products</h2>

                    {/* Apple Wood Canes */}
                    <section aria-labelledby='canes'>
                      <h3 id='canes'>Apple Wood Canes</h3>
                      <p className='price'>Starting at $80</p>
                      <p className='description'>
                        Ranging from 48-68 inches in single inch increments.
                        Custom lengths can be requested.
                      </p>

                      <div className='product-details'>
                        <section aria-labelledby='flexibility'>
                          <h4 id='flexibility'>Flexibility Options</h4>
                          <ul>
                            <li>Flexible Cane</li>
                            <li>Rigid Cane</li>
                            <li>Super Flex</li>
                          </ul>
                        </section>

                        <section aria-labelledby='tip-options'>
                          <h4 id='tip-options'>Tip Options</h4>
                          <ul>
                            <li>Metal Glide</li>
                            <li>Ceramic</li>
                            <li>Roller "Marshmallow"</li>
                          </ul>
                        </section>

                        <section aria-labelledby='straps'>
                          <h4 id='straps'>Handle Straps</h4>
                          <ul>
                            <li>Red</li>
                            <li>Blue</li>
                            <li>Other colors available</li>
                          </ul>
                        </section>
                      </div>

                      <section className='technical-specs'>
                        <h4>Technical Details</h4>
                        <ul>
                          <li>Lengths: 48"–68" (in 1" increments)</li>
                          <li>Tip Adapter: Proprietary 5/16 threaded system</li>
                          <li>Inventory: Most sizes and stiffness in stock</li>
                          <li>Custom orders available</li>
                          <li>
                            All canes ship with protective placeholder bolt
                            until tip is installed
                          </li>
                        </ul>
                      </section>
                    </section>

                    {/* Walking Sticks */}
                    <section
                      aria-labelledby='sticks'
                      className='walking-sticks'
                    >
                      <h3 id='sticks'>Walking Sticks</h3>
                      <p className='price'>From $0.00 USD</p>
                      <p className='description'>
                        Handcrafted walking sticks made from apple wood suckers,
                        perfect for hiking and outdoor activities.
                      </p>
                    </section>
                  </section>
                )}

                {tab.id === 'story' && (
                  <section id='story'>
                    <h2>Kit's Story</h2>
                    <p>
                      The Ballad of Kit Rosefield tells, with humor, how Kit's
                      Canes came about.
                    </p>
                    <p>
                      After a quad accident on our apple ranch, I began walking
                      the orchards with an apple branch sucker as a makeshift
                      cane — my "snake stick" against rattlesnakes. Over time, I
                      refined it: stripping, sanding, sealing, and finishing.
                      Encouraged by a friend who made walking sticks, I created
                      my first apple wood mobility canes as gifts for my brother
                      Gary, my therapist friend Mike, and myself.
                    </p>
                    <p>
                      Word spread quickly at Lighthouse for the Blind and
                      Visually Impaired, where the canes became a hit. Soon I
                      was making them for trainers and friends — and Kit's Canes
                      was born.
                    </p>
                  </section>
                )}

                {tab.id === 'orchard' && (
                  <section>
                    <h2>The Apple Orchard</h2>
                    <p>
                      Rosefield Orchards has been in my family since 1970.
                      Nestled in a canyon along the North Fork of the Tuolumne
                      River at 4,500 ft elevation, our orchard yields a harvest
                      every 4–5 years. Those harvests have always been a
                      community effort, with fruit shared through food banks,
                      soup kitchens, and senior centers. Along the way we've
                      made applesauce, cider, and other goodies — all labors of
                      love.
                    </p>

                    <h3>Apple Suckers</h3>
                    <p>Wondering what an apple sucker branch is?</p>
                    <p>
                      When fruit trees are pruned, small shoots (suckers) grow
                      where cuts were made. While they drain energy from fruit
                      production, when left to grow they make excellent walking
                      sticks and cane material. You might call it making
                      lemonade out of lemons.
                    </p>

                    <h3>Making the Canes</h3>
                    <p>
                      Each cane goes through about 22 steps over three months:
                    </p>
                    <ol>
                      <li>Harvesting and stripping sucker branches</li>
                      <li>Curing for 2–3 months</li>
                      <li>Sanding with multiple grits</li>
                      <li>
                        Sealing and painting with multiple coats (each coat
                        carefully cured)
                      </li>
                      <li>Adding clear urethane for durability</li>
                      <li>Applying black rubber handle material</li>
                      <li>Preparing cane ends for proprietary tip adapters</li>
                      <li>
                        Finishing with handle straps, brass eye screws, and
                        washers
                      </li>
                    </ol>
                    <p>
                      Just like our orchard harvests, these canes are truly a
                      labor of love — and my artistic outlet.
                    </p>

                    <section>
                      <h2>Contact</h2>
                      <p>
                        Have questions? I'd love to help you find just the right
                        apple wood cane.
                      </p>
                      <a href='mailto:contact@kitscanes.com'>
                        Contact Kit's Canes →
                      </a>
                    </section>
                  </section>
                )}
              </>
            )}
          </div>
        ))}
      </main>

      <footer>
        <p>© 2025 Kit's Canes</p>
      </footer>
    </div>
  );
}

export default App;
