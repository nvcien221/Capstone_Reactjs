import { IconFb } from "src/assets/icons";
import css from "./login.module.scss";
import ShoesInput from "src/components/shoes-input";
import { useFormik } from "formik";
import * as Y from "yup";
import { loginFacebook, userLogin } from "src/services/user.service";
import { setLocalStorage } from "src/utils";
import { NavLink } from "react-router-dom";
import {
  ACCESS_TOKEN,
  EMAIL_USER,
  FIELD_PROPS_NAME,
  FIELD_PROPS_NAME_UPPER_FIRST_CHAR,
  MESSAGE,
  NAV_URL,
  VALIDATION_MESSAGE,
} from "src/constants";
import { useNavigate } from "react-router-dom";
const registerSchema = Y.object({
  email: Y.string().email().required(),
  password: Y.string()
    .min(5, VALIDATION_MESSAGE.passwordMinLength)
    .required(VALIDATION_MESSAGE.passwordRequire),
});
export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      userLogin(data)
        .then((resp: any) => {
          if (typeof resp === "string") {
            alert(resp);
            return;
          }
          if (resp.message === MESSAGE.dangNhapThanhCong) {
            console.log(resp.content.accessToken);
            setLocalStorage(ACCESS_TOKEN, resp.content.accessToken);
            setLocalStorage(EMAIL_USER, data.email);
            navigate(NAV_URL.profile);
            return;
          }
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      <div className={css["login_container"]}>
        <h1 className={css["title"]}>Login</h1>
        <div className={css["line"]} />
        <form onSubmit={formik.handleSubmit} className={css["form"]}>
          <ShoesInput
            showEye={false}
            placeholder={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Email}
            type={FIELD_PROPS_NAME.email}
            title={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Email}
            getFieldProps={formik.getFieldProps(FIELD_PROPS_NAME.email)}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <ShoesInput
            showEye={true}
            title={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Password}
            placeholder={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Password}
            type={FIELD_PROPS_NAME.password}
            getFieldProps={formik.getFieldProps(FIELD_PROPS_NAME.password)}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
          <div className={css["form_action"]}>
            <NavLink className={css["register"]} to={NAV_URL.register}>
              Register now
            </NavLink>
            <button type="submit" className={css["login"]}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
