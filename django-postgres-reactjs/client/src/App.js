import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';

import AddIcon from '@material-ui/icons/Add';

import './App.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})); 

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}







export default function App() {
  const classes1 = useStyles();
  const classes2 = useStyles2();
  const classes3 = useRowStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  // const renderTable = (tableData) => {
  //   let out;

  //   out.push(<TableContainer>)
  //   out.push(<TableHead>)
  //   out.push(<TableRow>)
    
  //   out.push(<TableCell></TableCell>)
    


  //   {/* out.push(<TableContainer>)
  //   out.push(<TableContainer>) */}
    


  //   out.push(</TableContainer>)
  // }

  return (
    <div className="App">
      <Container>
        <h1>Hello</h1>

        <div className={classes2.root}>
          <AppBar position="static">
            <Tabs 
              value={value} 
              onChange={handleChange} 
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="simple tabs example"
              centered
            >
              <Tab label="VM Sizing" {...a11yProps(0)} />
              <Tab label="Port Count" {...a11yProps(1)} />
              <Tab label="Power Cooling" {...a11yProps(2)} />
              <Tab label="BOM" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            
            {/* <TableContainer component={Paper}>
              <Table className={classes1.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name} hover="true">
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> */}



              <TableContainer>
                <TableHead>
                  <TableRow>
                    <TableCell data-tableIdx="0x0">0x0</TableCell>
                    <TableCell data-tableIdx="0x1"><AddIcon onClick={() => alert("cookies")}></AddIcon></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <AddIcon onClick={() => alert("biscuits")}></AddIcon>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableContainer>
            
            
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>

      </Container>
      
    </div>
  );
}
