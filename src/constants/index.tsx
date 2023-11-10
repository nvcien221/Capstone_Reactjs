export const ACCESS_TOKEN = 'accessToken'
export const EMAIL_USER = 'email_user'
export enum MESSAGE {
    dangNhapThanhCong = "Đăng nhập thành công!",
    dangKyTaiKhoanThanhCong =  'Đăng ký tài khoản thành công!',
    success = "Thành công!",
    fail = "Thất bại!",
    fail_update_profile = "Cập nhật profile thất bại!",
    fail_update_password = "Cập nhật password thất bại!"
}
export enum NAV_URL {
    home = '/',
    login = "/login",
    register = '/register',
    profile = '/profile',
    carts = '/carts',
    detail = 'detail/:productID'
}
export enum FIELD_PROPS_NAME {
    text = 'text',
    phone = 'phone',
    password = 'password',
    email = 'email',
    name = 'name',
    avatar = 'avatar',
    gender = 'gender',
    passwordConfirm = 'confirmPassword',
}
export enum FIELD_PROPS_NAME_UPPER_FIRST_CHAR {
    Phone = 'Phone',
    Password = 'Password',
    Email = 'Email',
    Name = 'Name',
    passwordConfirmSpace = 'Confirm Password',

}
export enum VALIDATION_MESSAGE {
    passwordMinLength = 'Password phải tối thiểu 5 kí tự',
    passwordMaxLength = "Password phải nhỏ hơn 20 ký tự.",
    passwordRequire = 'Bắt buộc phải nhập vào password.',
    emailFormat = 'Email không đúng định dạng.',
    emailRequire = 'Email không được bỏ trống.',
    nameRequire = 'Bắt buộc phải nhập vào name',
    passwordConfirmMatch = "Mật khẩu nhập lại không trùng với mật khẩu",
    passwordConfirmRequire = "Bắt buộc phải nhập vào confirm password.",
    phoneFormat = "Số điện thoại không đúng định dạng",
    phoneRequire = "Số điện thoại không được bỏ trống."
}