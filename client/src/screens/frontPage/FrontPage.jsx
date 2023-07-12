import { useState, React } from "react";
import { Cta } from "../../components/Cta";
import { Header } from "../../components/Header";
import { MenuVariant } from "../../components/MenuVariant";
import "./style.css";

/* MODAL MUI */
import { Button, Modal, Backdrop, Fade } from '@mui/material';

export const FrontPage = () => {
  const [open, setOpen] = useState(true);

  const handleAccept = () => {
    setOpen(false);
  };
  return (
    <div className="page-homepage">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="div">
            <img className="img-face" alt="Img face" src="/img/img-face.png" />
            <img className="img-diamonds" alt="Img diamonds" src="/img/img-diamonds.png" />
            <div className="yellow-rectangle" />
            <p className="description">
              FACEing Binarism. Towards a more equitable AI. is the first
              <br />
              symposium devoted to debinarizing AI and humanities. The symposium is structured.
            </p>
            <Header
              className="header-instance"
              menuProperty1="unselected-02"
              menuProperty11="mouse-over-05"
              override={<MenuVariant className="menu-variant7" text="About" />}
            />
          </div>
          <h1 className="title">
            <span className="span">Face</span>
            <span className="text-wrapper-2">
              ing
              <br />
            </span>
            <span className="span">Binarism</span>
          </h1>
          <img className="logo-small" alt="Logo small" src="/img/logo-small.png" />
          <div className="face">Face10</div>
          <Cta className="CTA-instance" property1="home-page-botton" />
          <div className="description-2">
            <span className="text-wrapper-3">press </span>
            <span className="text-wrapper-4">Enter</span>
            <span className="text-wrapper-3">&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
