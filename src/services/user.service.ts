import { TypeUserRegister } from "src/types";
import { axiosWithAuth, axiosWithoutAuth } from "./config.service"
import { TUserProfileUpdate } from "src/pages/profile";
export const userLogin = async (data: { email: string; password: string }) => {
    try {
        const resp = await axiosWithoutAuth({
            method: "post",
            url: "/Users/signin",
            data,
        });
        return resp.data;
    } catch (error:any) {   
        console.log(error)
        return error.response.data.message;
    }
};
export const signup = async (data: TypeUserRegister) => {
    try {
        const resp = await axiosWithoutAuth({
            method: "post",
            url: "/Users/signup",
            data,
        });
        return resp.data;
    } catch (err:any) {
        console.log(err)
        return err.response.data.message;
    }
}
export const getProfile = async () => {
    try {
        const resp = await axiosWithAuth({
            method: 'post',
            url: '/Users/getProfile'
        })
        return resp;
    } catch (err) {
        console.log(err)
    }
}
export const updateProfile = async (data: TUserProfileUpdate) => {
    try {
        const resp = await axiosWithAuth({
            method: 'post',
            url: '/Users/updateProfile',
            data
        })
        return resp;
    } catch (err:any) {
        console.log(err)
    }
}
export const updatePassword = async (data: string) => {
    try {
        const resp = await axiosWithAuth({
            method: 'post',
            url: '/Users/changePassword',
            data: {
                newPassword: data
            }
        })
        return resp;
    } catch (err) {
        console.log(err)
    }
}
export const order = async (data: object) => {
    try {
        const resp = await axiosWithAuth({
            method: 'post',
            url: '/Users/order',
            data: JSON.stringify(data)
        })
        return resp;
    } catch (err) {
        console.log(err)
    }
}
export const loginFacebook = async (data: string) => {
    try {
        const resp = await axiosWithoutAuth({
            method: 'post',
            url: '/Users/facebooklogin',
            data: {
                "facebookToken": data
            }
        })
        return resp
    } catch (error) {
        console.log(error)
    }
}
