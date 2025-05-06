import { toast } from "react-toastify";
import { customAxios } from "../../lib/axios.lib";


export const AddToFavorite = async (id) => {
    try {
      let data;
      await customAxios.post(`favorite/${id}`).then((res) => {
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

export const getAllFavorite = async () => {
  try {
    let data;
    await customAxios.get(`favorite`).then((res) => {
      data = res.data;
    });
    return data;
  } catch (error) {
    console.log(error);
      if ( error?.response?.data?.message) {
          toast.error(error?.response?.data?.message)   
      }
      return undefined  
  }
}

export const DeleteFromFavorite = async (id) => {
  try {
    let data;
    await customAxios.delete(`favorite/${id}`).then((res) => {
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