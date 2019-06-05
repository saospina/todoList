import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import './css/todoItem.css';
import { MdBookmark } from 'react-icons/md';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: ''
    };
  }

  handleClick(id) {
    this.props.update(id);
  }

  handleClass(item) {
    if (item.done) {
      return 'done';
    } else {
      return '';
    }
  }

  render() {
    let itemList = this.props.itemList.map(item => {
      return (
        <ListGroupItem
          onClick={() => this.handleClick(item.id)}
          className={this.handleClass(item)}
          key={item.id}
        >
          <MdBookmark /> {item.desc}
        </ListGroupItem>
      );
    });
    return itemList;
  }
}
