const Header = () => {
  return (
    <header>
      <h1> to do list</h1>
      <h2>
        {`${new Date().getDate()}.${
          new Date().getMonth() + 1
        }.${new Date().getFullYear()}`}
      </h2>
      <p>choose who you are:</p>
      <ul></ul>
    </header>
  );
};

export default Header;
