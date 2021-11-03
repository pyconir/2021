import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar(props) {
  return (
    <div>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarPart1}>
          <div className={styles.menu}>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
          </div>
          <div className={styles.logo}>sdfلوگو</div>

          <ul className={styles.navbarList}>
            <NavItem navName="خانه" navlink=""></NavItem>
            <NavItem navName="درباره" navlink="about">
              <DropDownMenu
                pagesList={[
                  { name: "درباره PyconIr", link: "about" },
                  { name: "مرام نامه", link: "codeOfConduct" },
                  { name: "برگزارکنندگان", link: "organizers" },
                ]}
              />
            </NavItem>
            <NavItem navName="ثبت نام" navlink="buyTicket">
              <DropDownMenu
                pagesList={[
                  { name: "خرید بلیت", link: "buyTicket" },
                  { name: "حمایت از کنفرانس", link: "aid" },
                  { name: "نمایشگاه کار", link: "jobOpportunities" },
                ]}
              />
            </NavItem>
            <NavItem navName="اسپانسر" navlink="sponsors">
              <DropDownMenu
                pagesList={[
                  { name: "اسپانسرها", link: "sponsors" },
                  { name: "اسپانسر شوید", link: "becomeSponsor" },
                ]}
              />
            </NavItem>
            <NavItem navName="برنامه" navlink="schedule">
              <DropDownMenu
                pagesList={[
                  { name: "برنامه زمانی", link: "schedule" },
                  { name: "سخنرانان", link: "speakers" },
                ]}
              />
            </NavItem>
            <NavItem navName="راهنما" navlink="setup"></NavItem>
            <NavItem navName="سخنران شوید" navlink="becomeSpeaker"></NavItem>
          </ul>
        </div>
        <div className={styles.navbarPart2}>
          <div className={styles.languageButton}>EN</div>
          <div className={styles.buyTicketButton}>
            خرید بلیت / حمایت از کنفرانس
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={styles.navbarListItem}
      onMouseEnter={() => {
        setOpen(!open);
      }}
      onMouseLeave={() => {
        setOpen(!open);
      }}
    >
      <Link href={"/" + (props.navlink || "")}>
        <a>{props.navName}</a>
      </Link>
      {/* <div className={styles.navbarItemsUnderline}></div> */}
      {open && props.children}
    </div>
  );
}

function DropDownMenu(props) {
  function DropDownItem(props) {
    return (
      <Link href={"/" + props.link}>
        <div className={styles.dropDownMenuItems}>
          <a>{props.children}</a>
        </div>
      </Link>
    );
  }
  return (
    <div className={styles.dropDownMenu}>
      {props.pagesList.map((pageName) => (
        <DropDownItem key={pageName.name} link={pageName.link}>
          {pageName.name}
        </DropDownItem>
      ))}
    </div>
  );
}
