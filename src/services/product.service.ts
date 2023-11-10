import { axiosWithoutAuth } from "./config.service"

export const getAllProduct = async () => {
  
  // console.log(resp)
  try {
    const resp = await axiosWithoutAuth('/product')
    return resp.data
  } catch (error) {
    console.log(error)
  }
  
}
export const getProductById = async (id: string | number) => {
  try {
    const resp = await axiosWithoutAuth(`/Product/getbyid?id=${id}`)
    return resp.data
    
  }
  catch (error) {
    console.log(error)
  }

}
export const getSearchProduct = async (name: string) => {
  try {
    const resp = await axiosWithoutAuth(`/Product?keyword=${name}`)
    return resp.data
  } catch (error) {
    console.log(error)
  }
}