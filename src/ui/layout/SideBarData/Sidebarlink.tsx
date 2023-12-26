import React, { FC, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

import { SidebarItem } from "./sidebaritem";
type sidebarLinkProp = {
  item: SidebarItem;
};
const SidebarLink: FC<sidebarLinkProp> = ({ item }: any) => {
  const [subnav, setsubnav] = useState(false);
  const showsubnav = () => setsubnav(!subnav);

  return (
    <>
      <div className="name"  onClick={showsubnav}>
        <div className="icon">
          {item.icon} <br />
        </div>
        <div className="title"> {item.title}</div>
        <div className="icon2">{<MdArrowDropDown style={{marginLeft:'30px'}} />}</div>

        {/* <div>{item?.subnav ? item?.iconClosed : item?.iconOpened}</div> */}
       
      </div>
      {subnav &&
          item?.subnav?.map((item: any, index: any) => {
            return  <div className="item-title">  <a  href={item.path||""}>  {item.title}</a>  </div>;
          })}
   
    </>
  );
};

export default SidebarLink;
