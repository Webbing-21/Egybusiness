import { customAxios } from "../../lib/axios.lib"


export const getChart = async (query) => {
    try {
      let data;
      await customAxios.get(`admin/chart${query || ''}`).then((res) => {
        data = res.data;
      });
      return data;
    } catch (error) {
      return undefined
    }
}
