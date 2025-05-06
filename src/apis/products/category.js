import { toast } from "react-toastify";
import { customAxios } from "../../lib/axios.lib"


export const getAllCategory = async () => {
    try {
      let data;
      await customAxios.get(`category`).then((res) => {
        data = res.data;
      });
      return data;
    } catch (error) {
      return undefined
    }
}

// getAllCategory

export const addCategory = async (data) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    
    // إضافة الصورة فقط إذا كانت موجودة
    if (data.image) {
      formData.append("image", data.image);
    }

    const res = await customAxios.post("category", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success(res.data?.message);
    return res.data;
  } catch (error) {
    if (error?.response?.data?.message) {
      toast.error(error?.response?.data?.message);
    }
    return undefined;
  }
};



export const deleteCategory = async (id) => {
    try {
      let data;
      await customAxios.delete(`category/${id}`).then((res) => {
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
