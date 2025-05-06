import { toast } from "react-toastify";
import { customAxios } from "../../lib/axios.lib"



export const getAllProducts = async (filter) => {
    try {
      let data;
      await customAxios.get(`product${filter ? '?'+filter : ''}`).then((res) => {
        data = res.data;
      });
      return data;
    } catch (error) {
      return undefined
    }
}

export const getProduct = async (id) => {
    try {
      let data;
      await customAxios.get(`product/${id}`).then((res) => {
        data = res.data;
      });
      return data;
    } catch (error) {
      if ( error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)
      }
       return error?.response?.data?.message
    }
}

export const addProduct = async (data) => {
    try {
      await customAxios.post(`product`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        data = res.data;
        toast.success(data?.message)
      });
      return data;
    } catch (error) {
       if ( error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)   
       }
       return undefined     
    }
}

export const updateProduct = async (id, data) => {
    try {
      await customAxios.put(`product/${id}`, data).then((res) => {
        toast.success(data?.message)
      });
      return data;
    } catch (error) {
       if ( error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)   
       }
       return undefined     
    }
}

export const updateProductImage = async (id, images) => {
    try {
      let data;
      await customAxios.put(`product/update-image/${id}`, images, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        data = res.data;
        toast.success(data?.message)
      });
      return data;
    } catch (error) {
       if ( error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)   
       }
       return undefined     
    }
}

export const deleteProduct = async (id) => {
    try {
      let data;
      await customAxios.delete(`product/${id}`).then((res) => {
        data = res.data;
        toast.success(data?.message)
      });
      return data;
    } catch (error) {
       if ( error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)   
       }
       return undefined     
    }
}
