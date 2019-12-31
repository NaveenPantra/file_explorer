import React, { useState } from "react";
import withStyles from "react-jss";
import { connect } from "react-redux";
import { pushPath } from "./../../../../redux/path/path.actions";
import { deleteSearchObject } from "./../../../../redux/search/search.actions";
import { deleteObject } from "./../../../../redux/object/object.actions";
import FileImage from "./../../../../static/img/file.png";
import FolderImage from "./../../../../static/img/folder.png";
import { FILE, FOLDER } from "./../../../../utils/constants";
import Modal from "./../../../commons/Modal";
import ContentInfo from "./../../../commons/ContentInfo";
import ContextMenu from "./../../../commons/ContextMenu";

const styles = {
  figure: {
    padding: "1rem",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
    borderRadius: "var(--object-selection-border-radius)",
    "&::after": {
      content: "attr(data-extensiton)",
      display: "block",
      position: "absolute",
      color: "var(--color-grey-light-2)",
      top: "54%",
      left: "32%",
      fontSize: "1.3rem"
    }
  },
  img: {
    width: "8rem",
    height: "8rem",
    objectFit: "contain",
    position: "relative",
    display: "block"
  },
  figCaption: {
    marginTop: "1rem",
    fontSize: "1.5rem",
    fontWeight: 400,
    color: "var(--color-content-name)"
  },
  contentOption: {
    padding: "1.6rem",
    paddingLeft: "2.5rem",
    fontSize: "1.6rem",
    color: "var(--color-content-name)",
    background: "var(--color-modal-background)",
    "&:hover": {
      background: "var(--color-context-menu-option-bck)"
    },
    "&.danger": {
      color: "var(--color-delete)"
    }
  }
};

const ThumbnailExplorer = ({
  classes,
  info,
  pushPath,
  currentPath,
  deleteObject,
  deleteSearchObject
}) => {
  // for info
  const [isModalOpen, setIsModalOpen] = useState(false);
  // for right click
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const { type, name } = info;
  const imgSrc = type === FILE ? FileImage : FolderImage;
  // double click push directoru to currentpath if it is folder
  const handleDoubleClick = event => {
    if (info.type === FILE) return null;
    try {
      const { target } = event;
      if (target.closest(".contextMenu")) return null;
    } catch (err) {}
    pushPath({ path: info.name });
  };
  // open contextMenu
  const handleContextMenu = event => {
    try {
      event.preventDefault();
    } catch (err) {}
    setIsContextMenuOpen(!isContextMenuOpen);
  };
  const contentOptions = getContentOptions(
    setIsContextMenuOpen,
    setIsModalOpen,
    pushPath,
    deleteObject,
    deleteSearchObject,
    info,
    isContextMenuOpen,
    isModalOpen,
    currentPath,
    name
  );
  const contextMenuOptions = getContextMenuOptions(
    isContextMenuOpen,
    contentOptions,
    classes
  );
  const extensiton = getFormattedExtension(type, name);
  const background =
    isContextMenuOpen || isModalOpen
      ? "var(--color-background-blue)"
      : "transparent";
  return (
    <>
      <figure
        className={classes.figure}
        onDoubleClick={handleDoubleClick}
        onContextMenu={handleContextMenu}
        data-extensiton={extensiton}
        style={{ background }}
      >
        <img src={imgSrc} alt={type} className={classes.img} />
        <figcaption className={classes.figCaption}>{name}</figcaption>
        {isContextMenuOpen ? (
          <ContextMenu
            open={isContextMenuOpen}
            onClose={() => {
              setIsContextMenuOpen(!isContextMenuOpen);
            }}
          >
            {contextMenuOptions}
          </ContextMenu>
        ) : null}
      </figure>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <ContentInfo
          info={info}
          onClose={() => {
            setIsModalOpen(!isModalOpen);
          }}
        />
      </Modal>
    </>
  );
};

// Extension if the files
const getFormattedExtension = (type, name) => {
  if (type === FOLDER) return "";
  let extensiton = name.split(".").slice(-1);
  if (extensiton.length > 5) {
    extensiton = `${extensiton.slice(0, 4)}...`;
  }
  return `.${extensiton}`;
};

// the right click menu options UI
const getContextMenuOptions = (isContextMenuOpen, contentOptions, classes) => {
  if (!isContextMenuOpen) return null;
  return Object.keys(contentOptions).map(action => {
    return (
      <div
        className={`${classes.contentOption} ${contentOptions[action].actionType}`}
        onClick={contentOptions[action].handler}
        key={action}
      >
        {contentOptions[action].name}
      </div>
    );
  });
};

// This function return contentMenu Options which is used by above function
const getContentOptions = (
  setIsContextMenuOpen,
  setIsModalOpen,
  pushPath,
  deleteObject,
  deleteSearchObject,
  info,
  isContextMenuOpen,
  isModalOpen,
  currentPath,
  name
) => {
  return {
    Open: {
      name: "Open",
      actionType: "normal",
      handler: () => {
        if (info.type === FILE) {
          setIsContextMenuOpen(!isContextMenuOpen);
          setIsModalOpen(!isModalOpen);
          return;
        }
        pushPath({ path: info.name });
      }
    },
    "Get Info": {
      name: "Get Info",
      actionType: "normal",
      handler: () => {
        setIsContextMenuOpen(!isContextMenuOpen);
        setIsModalOpen(!isModalOpen);
      }
    },
    Delete: {
      name: "Delete",
      actionType: "danger",
      handler: () => {
        // deleteObject({ path: currentPath, name: info.name });
        const path = `${currentPath.join("/")}/${name}`;
        deleteSearchObject({
          fullPath: path,
          name: info.name,
          type: info.type
        });
        setIsContextMenuOpen(!isContextMenuOpen);
      }
    }
  };
};

const mapStateToProps = ({ currentPath }) => ({
  currentPath
});

const mapDispatchToProps = dispatch => ({
  pushPath: payload => dispatch(pushPath(payload)),
  deleteObject: payload => dispatch(deleteObject(payload)),
  deleteSearchObject: payload => dispatch(deleteSearchObject(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ThumbnailExplorer));
