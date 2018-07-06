import React, {Component} from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.min.css'
import 'fixed-data-table/dist/fixed-data-table-style.css'
import './entry.css'


/* const entries = [
  {date:'12-23-16',food:'pinapple',calorie:'50'},
  {date:'11-03-16',food:'cookie',calorie:'100'},
  {date:'11-03-16',food:'cookie',calorie:'100'}
];
let entries2 = this.props.state; */


const LinkCell = ({rowIndex, ...props}) => (
  //<a /*onClick={deleteEntry(rowIndex)}*/ href="#"> </a>
  <Cell {...props}>
    <button type="button">delete</button>
  </Cell>
);

/*function deleteEntry(index){
  entries.splice(index);
}*/



class DiaryTable extends React.Component {
  deleteEntry(e) {
    e.preventDefault();
    var index = parseInt(e.target.id);
    this.props.DelDiary(index);
    console.log(index);
  }

  render() {
    const entries = this.props.state.diary;

    return (
      <Table
    rowHeight={250}
    rowsCount={entries.length}
    width={900}
    height={entries.length*50+250}
    headerHeight={50}>
    <Column
      header={<Cell>Date</Cell>}
      cell={({rowIndex, ...props}) => (
        <Cell {...props} name={rowIndex}>
          {entries[rowIndex].date}
        </Cell>
      )}
      width={150}
    />
    <Column
      header={<Cell>Reflection</Cell>}
      cell={({rowIndex, ...props}) => (
        <Cell {...props} text-align="left">
           <div>{entries[rowIndex].reflection}</div>
           <div align="left">{entries[rowIndex].savedpics ? <img src={entries[rowIndex].savedpics} /> : null } </div>
        </Cell>
      )}
      width={600}
    />
    <Column
      header={<Cell></Cell>}
      cell={({rowIndex, ...props}) => (
        <Cell {...props}>
        <button className="deleteButton" id={rowIndex} onClick={this.deleteEntry.bind(this)}>Delete</button>
        </Cell>
      )}
      width={150}
    />

  </Table>
    );
  }
}
export default DiaryTable;
