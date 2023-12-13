import { Link } from "react-router-dom"

export default function Home() {
    return <div className='container'>
    <div>
      {/* The Article */}
      <article>
        <header>
          <h3>Welcome</h3>
        </header>
        <p>Today's discussion</p>
        <footer>
          <Link to='/discuss' role="button">
            See More
          </Link>
        </footer>
      </article>
    </div>
    <div className='grid'>
      <article>Helpful Links</article>
      <article>Get Support</article>
    </div>
  </div>
}