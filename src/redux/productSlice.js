import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProduct',
    async ()=>{
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getAll`);
            if (response.data && response.data.data && response.data.data.length > 0 )
            {
                return (response.data.data);
            }
            else{
                toast.warning("No products are currently available.");
            }
        } catch (error) {
            // This handles network errors or non-2xx status codes (4xx, 5xx)
            console.error("Failed to fetch products:", error);
            // You might want to display a more user-friendly error toast here
            toast.error("Error fetching products. See console for details.");
        } finally {
            // Crucial: Always stop loading after the request completes or fails
        }
    }
);


const productSlice = createSlice({
    name:'products',
    initialState: {
        items:[],
        status:'idle',
        error:null,
    },
    reducers:{
        // synchronous reducers 
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    }
});


export default productSlice.reducer;