import s from "./index.module.scss";
import Logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { Modal } from "../../ui/Modal";
import { Button } from "../../ui/Button";
import Burger from "../../../assets/images/burger-menu-svgrepo-com-white.svg"

export const Header = () => {

  const [isModal, setIsModal] = useState<boolean>(false);
 
  return (
    <header className={s.Header}>
      <div className={s.logoBox} onClick={()=>{}}>
        <img src={Logo} alt="Логотип" />
      </div>
        <div className={s.titleBox}>
          <Button classname={s.btnRegistr}>Log in </Button>
          <div className={s.btnMobile} onClick={()=> setIsModal(true)}>
            <img src={Burger} alt="mobile menu" width={30} height={30}/> 
          </div>
        </div>


        <Modal
        title="Mobile Menu"
        isVisible={isModal}
        onClose={() => setIsModal(false)}
        content="please log in to continue"
        children={
          <Button classname={s.btnMobRegistr}>Log in </Button>}
        />

    </header>
  );
};
