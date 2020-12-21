import React from "react";
import Logo from "../Logo";
import Button from "../Button";
import Footer from "../Footer";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import "./Welcome.css";
const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <div className="welcome__actions">
          <div className="welcome__container">
            <Logo />
            <h1 className="welcome__title">
              Mira lo que está pasando en el mundo en este momento
            </h1>
            <p className="welcome__text">
              <strong>Únete a Twitter hoy mismo.</strong>
            </p>
            <Button type={"main"} title={"Regístrate"} />
            <Button type={"secondary"} title={"Iniciar Sesión"} />
          </div>
        </div>
        <div className="welcome__info">
          <Logo />
          <div className="welcome__container">
            <div className="welcome__infoBlock">
              <span>
                <SearchIcon />
                Sigue lo que te interesa
              </span>
            </div>
            <div className="welcome__infoBlock">
              <span>
                <PeopleOutlineIcon />
                Entérate de qué está hablando la gente.
              </span>
            </div>
            <div className="welcome__infoBlock">
              <span>
                <ChatBubbleOutlineIcon />
                Únete a la conversación.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Welcome;
