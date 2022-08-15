import Link from 'next/link'

function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/students">
          <a>Student</a>
        </Link>
      </li>
      <li>
        <Link href="/teachers">
          <a>Teachers</a>
        </Link>
      </li>

      <li>
        <Link href="/admins">
          <a>Administrators</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navbar