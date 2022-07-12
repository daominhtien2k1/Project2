import ProductTable from "../components/table/ProductTable";
import {Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import "./productScreen.css"
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function ProductScreen() {
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [proSidebar, setProSideBar] = useState(false);
    const rows = [
        {
            title: 'Product Image',
            value: <TextField label="Product Image" variant="outlined" size="small"
                              inputProps={{style: {fontSize: 16}}}/>
        }, {
            title: 'Product SKU',
            value: <TextField label="Product SKU" variant="outlined" size="small" inputProps={{style: {fontSize: 16}}}/>
        }, {
            title: 'Product Title/Name',
            value: <TextField label="Product Title/Name" variant="outlined" size="small"
                              inputProps={{style: {fontSize: 16}}}/>
        }, {
            title: 'Product Slug',
            value: <TextField label="Product Slug" variant="outlined" size="small"
                              inputProps={{style: {fontSize: 16}}}/>
        }, {
            title: 'Product Description',
            value: <TextField label="Product Description" variant="outlined" size="small"
                              inputProps={{style: {fontSize: 16}}}/>
        }, {
            title: 'Product Category',
            value: <TextField label="Product Category" variant="outlined" size="small"
                              inputProps={{style: {fontSize: 16}}}/>
        }, {
            title: 'Unit',
            value: <TextField label="Unit" variant="outlined" size="small" inputProps={{style: {fontSize: 16}}}/>
        }, {
            title: 'Product Price',
            value: <TextField label="Product Price" variant="outlined" size="small"
                              inputProps={{style: {fontSize: 16}}}/>
        }, {
            title: 'Sale Price',
            value: <TextField label="Sale Price" variant="outlined" size="small" inputProps={{style: {fontSize: 16}}}/>
        }, {
            title: 'Product Tag',
            value: <TextField label="Product Tag" variant="outlined" size="small" inputProps={{style: {fontSize: 16}}}/>
        }
    ];

    const handleProductSidebar = () => {
        setProSideBar(!proSidebar);
    }
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    };

    return (
        <div className="productScreen">
            <h1>Products</h1>
            <div className="product-topbar">
                <div className="product-topbar-wrapper">
                    <div className="product-topbar-search">
                        <FormControl fullWidth={true}>
                            <OutlinedInput placeholder="Search by product name"/>
                        </FormControl>
                    </div>
                    <div className="product-topbar-category">
                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    value={category}
                                    label="Category"
                                    onChange={handleChangeCategory}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="product-topbar-price">
                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth>
                                <InputLabel>Price</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    value={price}
                                    label="Price"
                                    onChange={handleChangePrice}
                                >
                                    <MenuItem value={10}>Low to High</MenuItem>
                                    <MenuItem value={20}>High to Low</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="product-topbar-add" onClick={handleProductSidebar}>
                        <button className="addProduct">
                           <span onClick={handleProductSidebar}>
                                 <AddIcon style={{fontSize: 20}}/>
                                 <span>Add Product</span>
                           </span>
                        </button>
                    </div>

                </div>
            </div>
            <div className={proSidebar ? 'mask-active' : 'mask'}></div>
            <div className={proSidebar ? 'product-sidebar-active' : 'product-sidebar'}>
                <div className="product-sidebar-header">
                    <div className="PSheader-wrapper">
                        <div>
                            <h4>Add Product</h4>
                            <p>Add your product and necessary information from here</p>
                        </div>
                        <div onClick={handleProductSidebar}>
                            <CloseIcon className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="product-sidebar-info">
                    <div className="PSinfo-wrapper">{
                        rows.map(row => {
                            const Component = <row.value/>
                            return (
                                <div className="PSinfo-row">
                                    <p>{row.title}</p>
                                    {row.value}
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="product-sidebar-footer">
                    <div className="PSfooter-wrapper">
                        <div className="product-footer-cancel" onClick={handleProductSidebar}>
                            <button className="cancelProduct">
                                 <span>Cancel</span>
                            </button>
                        </div>
                        <div className="product-footer-add">
                            <button className="addProduct">
                                 <span>Add Product</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ProductTable/>
        </div>
    )
}

export default ProductScreen;