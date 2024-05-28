import PageNav from './PageNav';

function Header() {
  return (
    <header className="border-b-2 border-gray-600 bg-zinc-900 px-6 py-5 md:border-b-0">
      <PageNav />
    </header>
  );
}

export default Header;
