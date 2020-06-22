import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const ESC_KEY_CODE = 27;

const defaultSearchStyles = theme => ({
  main: {
    display: 'flex',
    flex: '1 0 auto',
  },
  searchIcon: {
    color: theme.palette.text.secondary,
    marginTop: '10px',
    marginRight: '8px',
  },
  searchText: {
    flex: '0.8 0',
  },
  clearIcon: {
    '&:hover': {
      color: theme.palette.error.main,
    },
  },
});

class TableSearch extends React.Component {
  handleTextChange = event => {
    this.props.onSearch(event.target.value);
  };

  onKeyDown = event => {
    if (event.keyCode === ESC_KEY_CODE) {
      this.props.onHide();
    }
  };

  render() {
    const { classes, options, onHide, searchText } = this.props;

    return (
      <div className={classes.main} ref={el => (this.rootRef = el)}>
        <TextField
          className={classes.searchText}
          autoFocus={true}
          InputProps={{
            'data-test-id': options.textLabels.toolbar.search,
          }}
          inputProps={{
            'aria-label': options.textLabels.toolbar.search,
          }}
          value={searchText || ''}
          onKeyDown={this.onKeyDown}
          onChange={this.handleTextChange}
          fullWidth={true}
          inputRef={el => (this.searchField = el)}
          placeholder={options.searchPlaceholder}
          {...(options.searchProps ? options.searchProps : {})}
        />
      </div>
    );
  }
}

export default withStyles(defaultSearchStyles, { name: 'MUIDataTableSearch' })(TableSearch);
