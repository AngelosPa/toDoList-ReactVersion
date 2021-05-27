const Footer = () => {
  return (
    <h4>
      {`${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()}`}
    </h4>
  );
};

export default Footer;
