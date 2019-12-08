import React, { Component } from "react";
import withStyles from "react-jss";
import SearchIcon from "./../../../../static/icons/search.svg";
import { connect } from "react-redux";
import ContextMenu from "./../../../commons/ContextMenu";
import SearchResultListTile from "./SearchResultListTile";

const styles = {
  root: {
    position: "relative"
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    border: "var(--input-border)",
    borderRadius: 8,
    padding: ".7rem 1.4rem",
    width: "25rem"
  },
  label: {
    marginRight: "1rem"
  },
  img: {
    width: "1.4rem",
    height: "1.4rem",
    onjectFit: "contains"
  },
  input: {
    fontSize: "1.4rem",
    outline: "none",
    color: "var(--color-content-name)",
    "&::placeholder": {
      color: "var(--color-input-placeholder)"
    }
  },
  contextMenu: {
    left: 0,
    top: "115%",
    width: "100%",
    height: "15rem",
    overflowY: "auto"
  },
  searchMessage: {
    padding: "1rem",
    textAlign: "center"
  }
};

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      prevSearchInput: "",
      timeOutID: 0,
      prevSearchTerm: "",
      openSearchResults: false,
      searchedData: {}
    };
  }
  handleOnSubmit = event => {
    event.preventDefault();
    this.handleGetContent();
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    const { searchInput } = this.state;
    // Setting current search and prevSearch Value
    this.setState({
      [name]: value,
      prevSearchInput: searchInput
    });
  };

  handleSearch = () => {
    this.setState({ openSearchResults: true });
    // this is called when input fild get foucs
    // So when one delete create new fiels
    // they will reflect ihe search immidiatly
    this.handleGetContent();
    // search will obly happen after every 600ms and
    // only when the term is not searched
    const timeOutID = setInterval(() => {
      const { prevSearchInput, searchInput, prevSearchTerm } = this.state;
      if ([prevSearchTerm, prevSearchInput, ""].indexOf(searchInput) > -1)
        return null;
      this.handleGetContent();
      this.setState({ prevSearchTerm: searchInput });
    }, 600);
    // to clear the timmeOut on blue and unmounting
    this.setState({ timeOutID });
  };

  // handy method search the file/folder in searchData
  handleGetContent = () => {
    const { searchInput } = this.state;
    const { searchData } = this.props;
    let searchedData = {};
    Object.keys(searchData).forEach(path => {
      if (path.includes(searchInput.toLocaleLowerCase())) {
        searchedData[path] = searchData[path];
      }
    });
    this.setState({ searchedData });
  };

  handleOnBlur = () => {
    const { timeOutID } = this.state;
    clearInterval(timeOutID);
  };

  componentWillUnmount() {
    const { timeOutID } = this.state;
    clearInterval(timeOutID);
  }

  handleToggleSearchResults = () => {
    this.setState(prevState => ({
      openSearchResults: !prevState.openSearchResults
    }));
  };

  render() {
    const { classes } = this.props;
    const { searchInput, openSearchResults, searchedData = {} } = this.state;
    // this variable contain all the search result UI
    let searchResultListTiles = null;
    if (searchInput.length > 0) {
      // if some thing is searched
      searchResultListTiles = Object.keys(searchedData).map(path => {
        return (
          <SearchResultListTile
            info={searchedData[path]}
            fullPath={path}
            key={path}
          />
        );
      });
      // at last to show no more result after all the results
      // if not searchresults are fount this will be the first message
      searchResultListTiles.push(
        <p className={classes.searchMessage}>No More Results!</p>
      );
    } else {
      // if nothing is searched
      searchResultListTiles = (
        <p className={classes.searchMessage}>Results are shown here</p>
      );
    }
    return (
      <form className={classes.root} onSubmit={this.handleOnSubmit}>
        <div className={classes.inputWrapper}>
          <label className={classes.label} htmlFor={"search"}>
            <img src={SearchIcon} alt={"Search"} className={classes.img} />
          </label>
          <input
            id={"search"}
            type={"text"}
            value={searchInput}
            name={"searchInput"}
            onChange={this.handleOnChange}
            onFocus={this.handleSearch}
            onBlur={this.handleOnBlur}
            placeholder={"Search for anything"}
            className={classes.input}
          />
        </div>
        {openSearchResults ? (
          <ContextMenu
            open={openSearchResults}
            onClose={this.handleToggleSearchResults}
            customClassName={classes.contextMenu}
          >
            {searchResultListTiles}
          </ContextMenu>
        ) : null}
      </form>
    );
  }
}

const mapStateToProps = ({ searchData = {} }) => ({
  searchData
});

export default connect(mapStateToProps)(withStyles(styles)(SearchHeader));
