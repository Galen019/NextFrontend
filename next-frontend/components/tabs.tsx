// components/tabs.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Tabs() {
  const router = useRouter();

  return (
    <div className="tabs">
      <Link href="/home" className={router.pathname === '/home' ? 'active' : ''}>
        Home
      </Link>
      <Link href="/about" className={router.pathname === '/about' ? 'active' : ''}>
        About
      </Link>
      <style jsx>{`
        .tabs {
          display: flex;
          gap: 10px;
        }
        .tabs a {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          text-decoration: none;
          color: black;
        }
        .tabs a.active {
          background-color: #0070f3;
          color: red;
        }
      `}</style>
    </div>
  );
}