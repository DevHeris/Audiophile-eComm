import PageNav from './PageNav';

function Header() {
  return (
    <header className="bg-primary flex h-[9dvh] items-center border-b-2 border-gray-600 px-6 md:h-[15dvh]  md:border-b-0 md:px-0">
      <PageNav />
    </header>
  );
}

export default Header;
