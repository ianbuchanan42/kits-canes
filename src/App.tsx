import './App.css';
function App() {
  return (
    <div>
      <header>
        <h1>
          <img id='logo' src='../public/logo.png' alt='' />
          Kit's Canes
        </h1>
        <nav>
          <button>Home</button>
          <button>Apple Wood Products</button>
          <button>Kit's Story</button>
          <button>The Apple Orchard</button>
        </nav>
      </header>

      <main>
        <section id='welcome'>
          <section>
            <h2>Welcome</h2>
            <p>Hi, I'm Kit!</p>
            <p>
              I sure do have a story to tell you about these apple wood canes.
            </p>
            <a href='#story'>Learn more about Kit's Canes →</a>
          </section>

          <section>
            <h2>Apple Wood Canes</h2>
            <p>
              Check out my handmade canes — available in several lengths and
              flexibilities.
            </p>
            <a href='#products'>View Inventory →</a>
          </section>
        </section>

        <section id='products'>
          <h2>Products</h2>
          <section aria-labelledby='canes'>
            <h3 id='canes'>Options for Apple Wood Canes</h3>
            <p>Starting at $80</p>
            <p>
              Ranging from 48-68 inches in single inch increments. Custom
              lengths can be requested.
            </p>
            <section aria-labelledby='flexibility'>
              <h4 id='flexibility'>Flexibility</h4>
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
                <li>Roller</li>
              </ul>
            </section>
            <section aria-labelledby='straps'>
              <h4 id='straps'>Straps</h4>
              <ul>
                <li>Red</li>
                <li>Blue</li>
                <li>Other</li>
              </ul>
            </section>
          </section>

          <section aria-labelledby='sticks'>
            <h3 id='sticks'>Walking Sticks – from $0.00 USD</h3>
          </section>
        </section>

        <section id='story'>
          <h2>Kit's Story</h2>
          <p>
            The Ballad of Kit Rosefield tells, with humor, how Kit's Canes came
            about.
          </p>
          <p>
            After a quad accident on our apple ranch, I began walking the
            orchards with an apple branch sucker as a makeshift cane — my "snake
            stick" against rattlesnakes. Over time, I refined it: stripping,
            sanding, sealing, and finishing. Encouraged by a friend who made
            walking sticks, I created my first apple wood mobility canes as
            gifts for my brother Gary, my therapist friend Mike, and myself.
          </p>
          <p>
            Word spread quickly at Lighthouse for the Blind and Visually
            Impaired, where the canes became a hit. Soon I was making them for
            trainers and friends — and Kit's Canes was born.
          </p>
        </section>

        <section>
          <h2>The Apple Orchard</h2>
          <p>
            Rosefield Orchards has been in my family since 1970. Nestled in a
            canyon along the North Fork of the Tuolumne River at 4,500 ft
            elevation, our orchard yields a harvest every 4–5 years. Those
            harvests have always been a community effort, with fruit shared
            through food banks, soup kitchens, and senior centers. Along the way
            we've made applesauce, cider, and other goodies — all labors of
            love.
          </p>

          <h3>Apple Suckers</h3>
          <p>Wondering what an apple sucker branch is?</p>
          <p>
            When fruit trees are pruned, small shoots (suckers) grow where cuts
            were made. While they drain energy from fruit production, when left
            to grow they make excellent walking sticks and cane material. You
            might call it making lemonade out of lemons.
          </p>

          <h3>Making the Canes</h3>
          <p>Each cane goes through about 22 steps over three months:</p>
          <ol>
            <li>Harvesting and stripping sucker branches</li>
            <li>Curing for 2–3 months</li>
            <li>Sanding with multiple grits</li>
            <li>
              Sealing and painting with multiple coats (each coat carefully
              cured)
            </li>
            <li>Adding clear urethane for durability</li>
            <li>Applying black rubber handle material</li>
            <li>Preparing cane ends for proprietary tip adapters</li>
            <li>Finishing with handle straps, brass eye screws, and washers</li>
          </ol>
          <p>
            Just like our orchard harvests, these canes are truly a labor of
            love — and my artistic outlet.
          </p>
        </section>

        <section>
          <h2>Cane Details</h2>
          <ul>
            <li>Lengths: 48"–67" (in 1" increments)</li>
            <li>Flexibility: From very flexible to rigid</li>
            <li>
              Inventory: Most sizes and stiffness in stock, custom orders
              available
            </li>
            <li>Tip Adapter: Proprietary 5/16 threaded system</li>
            <li>
              Tip Options: Metal glide, ceramic tip, or roller "marshmallow" tip
            </li>
            <li>
              All canes ship with a protective placeholder bolt until a tip is
              installed
            </li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Have questions? I'd love to help you find just the right apple wood
            cane.
          </p>
          <a href='mailto:contact@kitscanes.com'>Contact Kit's Canes →</a>
        </section>
      </main>

      <footer>
        <p>© 2025 Kit's Canes</p>
        <p>
          <a href='/privacy'>Privacy Policy</a> |{' '}
          <a href='/privacy-choices'>Your Privacy Choices</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
