<<<<<<< HEAD
export default function Header() {
  return (
    <header className="bg-pink-600 text-white p-4 flex justify-center items-center">
      <h1 className="text-2xl">Countries 🌍 Checkpoint</h1>
    </header>
=======
import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <header className="bg-pink-600 text-white p-4 flex justify-center items-center">
        <h1 className="text-2xl">Countries 🌍 Checkpoint</h1>
      </header>
    </Link>
>>>>>>> cc3a99f (done)
  );
}
