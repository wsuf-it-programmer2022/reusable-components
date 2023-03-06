function Header({ title = 'default title' }) {
  console.log('inside header component: ');
  // const title = props.title;
  // const { title } = props;
  return <h1>{title}</h1>;
}

export default Header;
