import Link from 'next/link';
import Footer from './Footer';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        Kansha Training
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/Admins"><a> Administrators</a></Link>
      <Link href="/Teachers"><a> Teachers</a></Link>
      <Link href="/Students"><a> Student</a></Link>
    </nav>
  );
}

export default Navbar;
