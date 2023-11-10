import ShoesInput from "src/components/shoes-input";
import css from "./register.module.scss";
import ShoesInputRadioGender from "src/components/shoes_input_radio";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Y from "yup";
import { signup } from "src/services/user.service";
import {
  FIELD_PROPS_NAME,
  FIELD_PROPS_NAME_UPPER_FIRST_CHAR,
  MESSAGE,
  NAV_URL,
  VALIDATION_MESSAGE,
} from "src/constants";
const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const registerSchema = Y.object({
  password: Y.string()
  .min(5, VALIDATION_MESSAGE.passwordMinLength)
  .max(20, VALIDATION_MESSAGE.passwordMaxLength)
  .required(VALIDATION_MESSAGE.passwordRequire),
  email: Y.string()
    .email(VALIDATION_MESSAGE.emailFormat)
    .required(VALIDATION_MESSAGE.emailRequire),
  name: Y.string().required(VALIDATION_MESSAGE.nameRequire),
  confirmPassword: Y.string()
    .oneOf(
      [Y.ref(FIELD_PROPS_NAME.password)],
      VALIDATION_MESSAGE.passwordConfirmMatch,
    )
    .required(VALIDATION_MESSAGE.passwordConfirmRequire),
  phone: Y.string()
    .matches(phoneRegExp, VALIDATION_MESSAGE.phoneFormat)
    .required(VALIDATION_MESSAGE.phoneRequire),
});
export default function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: true,
    },
    validationSchema: registerSchema,
    onSubmit: (value) => {
      signup(value)
        .then((resp) => {
          if (typeof resp === "string") {
            alert(resp);
            return;
          }
          if (resp.message === MESSAGE.dangKyTaiKhoanThanhCong) {
            alert(resp.message);
            navigate(NAV_URL.login);
          }
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      <div className={css["wrap"]}>
        <h1 className={css["title"]}>Register</h1>
        <div className={css["line"]} />
        <form className={css["form"]} onSubmit={formik.handleSubmit}>
          <ShoesInput
            title={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Email}
            type={FIELD_PROPS_NAME.text}
            placeholder={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Email}
            getFieldProps={formik.getFieldProps(FIELD_PROPS_NAME.email)}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <ShoesInput
            title={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Name}
            type={FIELD_PROPS_NAME.text}
            placeholder={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Name}
            getFieldProps={formik.getFieldProps(FIELD_PROPS_NAME.name)}
            touched={formik.touched.name}
            error={formik.errors.name}
          />
          <ShoesInput
            title={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Password}
            type={FIELD_PROPS_NAME.password}
            placeholder={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Password}
            showEye={true}
            getFieldProps={formik.getFieldProps(FIELD_PROPS_NAME.password)}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
          <ShoesInput
            title={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Phone}
            type={FIELD_PROPS_NAME.text}
            placeholder={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.Phone}
            getFieldProps={formik.getFieldProps(FIELD_PROPS_NAME.phone)}
            touched={formik.touched.phone}
            error={formik.errors.phone}
          />
          <ShoesInput
            title={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.passwordConfirmSpace}
            type={FIELD_PROPS_NAME.password}
            placeholder={FIELD_PROPS_NAME_UPPER_FIRST_CHAR.passwordConfirmSpace}
            showEye={true}
            getFieldProps={formik.getFieldProps(
              FIELD_PROPS_NAME.passwordConfirm,
            )}
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
          />
          <ShoesInputRadioGender
            value={formik.values.gender}
            setFieldValue={formik.setFieldValue}
          />
          <div className={css["form_action"]}>
            <button type="submit" className={css["login"]}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
