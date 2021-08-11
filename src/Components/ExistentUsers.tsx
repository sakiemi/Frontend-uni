import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SelectRole from './SelectRole';
import { useCallback } from 'react';
import { Searchbar } from 'react-native-paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Email: string, Roluri: string) {
  return { Email, Roluri};
}



export default function ExistentUsers() {
  const classes = useStyles();

  const rows = [
    createData('email1@cs.ubbcluj.ro',""),
    createData('email2@cs.ubbcluj.ro',""),
    createData('email3@cs.ubbcluj.ro',""),
    createData('email4@cs.ubbcluj.ro',""),
    createData('email5@cs.ubbcluj.ro',""),
    createData('email6@cs.ubbcluj.ro',""),
  
  ];
  
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query:string) => setSearchQuery(query);

  useEffect( ()=>{ filteredRow=rows.filter(x=>x.Email.startsWith(searchQuery)) },[searchQuery])

  let filteredRow:any
  
  return (
    <div>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />

    <div  style={{ display:'flex', justifyContent:'center' }}>
      
    <TableContainer component={Paper} style={{width:'70%'}}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="center">Roluri</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((filteredRow) => (
            <TableRow key={filteredRow.Email}>
              <TableCell component="th" scope="row">
                {filteredRow.Email}
              </TableCell>
                  <TableCell align="center">
                       <SelectRole/>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}
