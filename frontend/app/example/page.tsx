export default function Page() {
  return (
    <div className="container">
      <div className="row">
        <nav className="menu">
          <ul className="items">
            <li className="item">
              <i className="fa fa-home" aria-hidden="true"></i>
            </li>
            <li className="item">
              <i className="fa fa-user" aria-hidden="true"></i>
            </li>
            <li className="item">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </li>
            <li className="item item-active">
              <i className="fa fa-commenting" aria-hidden="true"></i>
            </li>
            <li className="item">
              <i className="fa fa-file" aria-hidden="true"></i>
            </li>
            <li className="item">
              <i className="fa fa-cog" aria-hidden="true"></i>
            </li>
          </ul>
        </nav>

        <section className="discussions">
          <div className="discussion search">
            <div className="searchbar">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text" placeholder="Search..."></input>
            </div>
          </div>
          <div className="discussion message-active">
            <div className="photo" style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
              <div className="online"></div>
            </div>
            <div className="desc-contact">
              <p className="name">Megan Leib</p>
              <p className="message">9 pm at the bar if possible 😳</p>
            </div>
            <div className="timer">12 sec</div>
          </div>

          {/* Resto del código omitido para la brevedad */}
        </section>
        <section className="chat">
          {/* Aquí también se corregirían los estilos de la misma manera */}
        </section>
      </div>
    </div>
  );
}
