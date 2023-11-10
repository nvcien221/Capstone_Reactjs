import { useState } from "react";
import { IconEye } from "src/assets/icons";
import css from "./shoes-input.module.scss";
export default function ShoesInput(props: any) {
  const { showEye, placeholder, type, getFieldProps, title, touched, error, disabled } =
    props;
    const[showText, setShowText] = useState(type)
    const handleChange = () => {
      const str = 'password'
      if(showText === str) {
        setShowText(() => 'text');
        return;
      }
      setShowText(() => str)
    }
  return (
    <>
      <div className={css["shoes_input"]}>
        <p>{title}</p>
        <div>
          <input type={showText} placeholder={placeholder} {...getFieldProps} disabled={disabled} />          
        </div>
        {touched && error && <small>{error}</small>}
      </div>
    </>
  );
}
