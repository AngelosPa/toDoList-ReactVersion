function ftiaxetoSubmit(e) {
  e.preventDefault();
}
const Footer = () => {
  return (
    <form onSubmit={ftiaxetoSubmit}>
      <input type="text" placeholder="write your task" />
      <input type="submit" />
      <div></div>
    </form>
  );
};

export default Footer;
