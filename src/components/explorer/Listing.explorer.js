import React, { useState } from "react";
import withStyles from "react-jss";
import { connect } from "react-redux";
import { getContentsForCurrentPath } from "./../../utils/helpers";
import ThumbnailExplorer from "./commons/listing/Thumbnail.explorer";
import AddImage from "./../../static/img/add.png";
import Modal from "./../commons/Modal";
import FileFolderAddForm from "./../commons/FileFolderAddForm";

const styles = {
  root: {
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    animation: "slowAppear 0.3s ease-in"
  },
  list: {
    padding: "1rem",
    background: "var(--color-side-drawer-background)",
    marginRight: "1.5rem"
  },
  figure: {
    width: "10rem",
    height: "12rem",
    cursor: "pointer",
    padding: "1rem",
    margin: "1rem",

    "& img": {
      width: "100%",
      height: "100%",
      ObjectFit: "contain"
    }
  }
};

const ExplorerListing = ({ classes, explorer, searchData, currentPath }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // contents of the current folder
  // const contents = { ...explorer.content };
  const { children } = searchData[currentPath.join("/")];
  // const listContents = Object.keys(contents).map(content => (
  //   <ThumbnailExplorer key={content} info={contents[content].info} />
  // ));
  const listChildren = children.map(child => (
    <ThumbnailExplorer key={"child"} info={searchData[child]} />
  ));
  return (
    <>
      <section className={classes.root}>
        {/* {listContents} */}
        {listChildren}
        <figure className={classes.figure} onClick={() => setIsModalOpen(true)}>
          <img src={AddImage} alt={"Add File/Folder"} />
        </figure>
      </section>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <FileFolderAddForm
          onClose={() => setIsModalOpen(!isModalOpen)}
          contents={children}
        />
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  let { currentPath, explorer, searchData } = state;
  // explorer = { ...explorer };
  // explorer = getContentsForCurrentPath(currentPath, explorer);
  return {
    currentPath,
    // explorer,
    searchData
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ExplorerListing));
