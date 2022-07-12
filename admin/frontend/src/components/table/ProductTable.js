import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TablePagination} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(sku, productName, category, price, stock, status, discount) {
    return { sku, productName, category, price, stock, status, discount };
}

const rows = [
    createData('9AF3DF', 'Freshmaker Wipes', 'Baby Care', '$8', 100, 'Selling', 0),
    createData('9AF3DF', 'Freshmaker Wipes', 'Baby Care', '$8', 100, 'Selling', 0),
    createData('9AF3DF', 'Freshmaker Wipes', 'Baby Care', '$8', 100, 'Selling', 0),
    createData('9AF3DF', 'Freshmaker Wipes', 'Baby Care', '$8', 100, 'Selling', 0),
    createData('9AF3DF', 'Freshmaker Wipes', 'Baby Care', '$8', 100, 'Selling', 0),
    createData('9AF3DF', 'Freshmaker Wipes', 'Baby Care', '$8', 100, 'Selling', 0),
    createData('9AF3DF', 'Freshmaker Wipes', 'Baby Care', '$8', 100, 'Selling', 0),

];

function ProductTable() {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>SKU</StyledTableCell>
                            <StyledTableCell>PRODUCT NAME</StyledTableCell>
                            <StyledTableCell>CATEGORY</StyledTableCell>
                            <StyledTableCell>PRICE</StyledTableCell>
                            <StyledTableCell>STOCK</StyledTableCell>
                            <StyledTableCell>STATUS</StyledTableCell>
                            <StyledTableCell>DISCOUNT</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell>{row.sku}</StyledTableCell>
                                <StyledTableCell>{row.productName}</StyledTableCell>
                                <StyledTableCell>{row.category}</StyledTableCell>
                                <StyledTableCell>{row.price}</StyledTableCell>
                                <StyledTableCell>{row.stock}</StyledTableCell>
                                <StyledTableCell>{row.status}</StyledTableCell>
                                <StyledTableCell>{row.discount}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
export default ProductTable;