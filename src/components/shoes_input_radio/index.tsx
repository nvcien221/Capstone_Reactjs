import css from "./shoes-input-radio.module.scss";
export default function ShoesInputRadioGender(props: any) {
  const { value, setFieldValue } = props;
  const handleChange = () => {
    setFieldValue("gender", !value);
  };
  return (
    <>
      <div className={css["shoes_input_radio"]}>
        <p className={css["title"]}>Gender</p>
        <input type="radio" id="male" checked={value} onChange={handleChange} />
        <label htmlFor="male">
          <div className={css["bg-circle"]}>
            <div className={css["circle"]}>
              <div className={css["check"]} />
            </div>
          </div>
          <div>Male</div>
        </label>
        <input
          type="radio"
          id="famale"
          checked={!value}
          onChange={handleChange}
        />
        <label htmlFor="famale">
          <div className={css["bg-circle"]}>
            <div className={css["circle"]}>
              <div className={css["check"]} />
            </div>
          </div>
          <div>Famale</div>
        </label>
      </div>
    </>
  );
}
