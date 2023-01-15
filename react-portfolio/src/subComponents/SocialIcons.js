import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
import { Github, Facebook, Instagram } from "../components/AllSvgs";
import { voopTheme } from "../components/Themes";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
  @media screen and (max-width: 768px) {
    left: 1.5rem;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    (props.theme = "voop" ? voopTheme.text : voopTheme.body)};
`;
const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://github.com/rusinner"
          rel="noreferrer"
        >
          <Github
            width={35}
            height={35}
            fill={props.theme === "voop" ? voopTheme.text : voopTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://facebook.com/vooprogue"
          rel="noreferrer"
        >
          <Facebook
            width={35}
            height={32}
            fill={props.theme === "voop" ? voopTheme.text : voopTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://instagram.com/vooprogue"
          rel="noreferrer"
        >
          <Instagram
            width={35}
            height={35}
            fill={props.theme === "voop" ? voopTheme.text : voopTheme.body}
          />
        </a>
      </motion.div>

      <Line
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
