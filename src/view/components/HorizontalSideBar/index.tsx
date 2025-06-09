import { useEffect, useState } from "react";
import { processListItems } from "../../../common/config";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./index.module.scss";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const HorizontalSideBar = () => {
  const location = useLocation();
  const [count, setCount] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const active = processListItems.find((item) => item.link === location.pathname);
    setCount(active ? active.id : 0);
  }, [location.pathname]);

  const filteredItems = isMobile
    ? processListItems.filter((item) =>
        [count - 1, count, count + 1].includes(item.id)
      )
    : processListItems;

  return (
    <ul className={styles.container}>
      {filteredItems.map((item, index) => (
        <motion.li
          className={styles.item}
          key={item.id}
          initial={isMobile ? { x: -50, opacity: 0 } : { y: -50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
        >
          <Link to={item.link} title={item.title}>
            <img
              src={item.id <= count ? item.imgGold : item.imgGray}
              alt={item.title}
              width={25}
              height={25}
            />
            <span className={item.id <= count ? styles.textGold : styles.textGray}>{item.title}</span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default HorizontalSideBar;
