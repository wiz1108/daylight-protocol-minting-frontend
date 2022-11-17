import React, { useState } from "react";
import Icon from "../../Icon";
import "./style.css";
import walletIcon from "../../../assets/img/icons/wallet.svg";
import downTabIcon from "../../../assets/img/icons/downTab.svg";
const WalletMenu = ({ address, wallet }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="walletmenu-container aic"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon
          imgsrc={walletIcon}
          classnamestyle="walletmenu--icon-wallet aic "
        />
        {address}
        <Icon imgsrc={downTabIcon} classnamestyle="walletmenu--icon-tab aic " />
      </div>
      <div className={isOpen ? "walletmenu--open" : "walletmenu--close"}>
        <a href={`https://testnet.snowtrace.io/address/${wallet}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><div className="walletmenu--option">Recent Transactions</div></a>
        <div className="walletmenu--option">Disconnect</div>
      </div>
    </>
  );
};

export default WalletMenu;
