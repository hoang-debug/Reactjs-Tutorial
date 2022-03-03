// ReactDOM.render(
//   <ul>
//     <p>To do List</p>
//     <li>Homework</li>
//     <li>Cooking</li>
//   </ul>,
//   document.getElementById("root")
// );
// function MainContent() {
//   return (<h1>I'm learning React</h1>)
// };
// ReactDOM.render(
//   <div>
//     <MainContent />

//   </div>,

//   document.getElementById("root")
// );
// const page = (
//   <nav className="page">
//     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png" width="40px"></img>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2012</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on GitHub</li>
//       <li>Is maintained by FB</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </nav>
// );

// ReactDOM.render(page, document.querySelector("#root"));
// document.querySelector("#root").append(page);
function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"
          width="40px"
        ></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function MainContent() {
  return (
    <div>
      <h1>Why I'm excited about learning React</h1>
      <ol>
        <li>It's new for me</li>
        <li>I need to learn React for my career path</li>
        <li>That's easier to build UI of a Website if I use React</li>
      </ol>
    </div>
  );
}
function Footer() {
  return <small>*2022 Phuong development. All rights reserved.</small>;
}
function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}


ReactDOM.render(<Page />, document.getElementById("root"));
