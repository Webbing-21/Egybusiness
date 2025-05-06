import { toast } from "react-toastify";
import { customAxios } from "../../lib/axios.lib";


export const getAllCarts = async (id, count) => {
    try {
      let data;
      await customAxios.get(`cart`).then((res) => {
        data = res.data;
      });
      return data;
    } catch (error) {
        if ( error?.response?.data?.message) {
            toast.error(error?.response?.data?.message)   
        }
        return undefined  
    }
}

export const AddToCart = async (id, count) => {
    try {
      let data;
      await customAxios.post(`cart/${id}`, {
        count
      }).then((res) => {
        data = res.data;
        toast.success(data?.message)   
      });
      return data;
    } catch (error) {
      if (error?.response?.data?.message === 'Invalid token,access denied') {
        toast.error('Please login')   
        setTimeout(() => {
          window.location.href = '/auth'
        }, 2000)
      }
      else if ( error?.response?.data?.message) {
          toast.error(error?.response?.data?.message)   
      }
        return undefined  
    }
}

export const UpdateCart = async (id, count) => {
    try {
      let data;
      await customAxios.patch(`cart/${id}`, {
        count
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

export const DeleteFromCart = async (id) => {
    try {
      let data;
      await customAxios.delete(`cart/${id}`).then((res) => {
        data = res.data;
      });
      toast.success(data?.message)   
      return data;
    } catch (error) {
        if ( error?.response?.data?.message) {
            toast.error(error?.response?.data?.message)   
        }
        return undefined  
    }
}

