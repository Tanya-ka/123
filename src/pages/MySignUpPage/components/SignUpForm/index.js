// import styles from "../../../../commonComponents/MaterialCard/styles";
import styles from "./styles.module.scss";

const SignUpForm = ({ formValue, onChange, onSubmit }) => {
  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="email"
          type="email"
          value={formValue.email}
          name="email"
          onChange={onChange}
        />
        <div>
          <input
            placeholder="first name"
            type="text"
            value={formValue.firstName}
            name="firstName"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            placeholder="last name"
            type="text"
            value={formValue.lastName}
            name="lastName"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            placeholder="gender"
            type="text"
            value={formValue.gender}
            name="gender"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            placeholder="password"
            type="password"
            value={formValue.password}
            name="password"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            placeholder="phone"
            type="phone"
            value={formValue.phone}
            name="phone"
            onChange={onChange}
          />
        </div>
        <button className={styles.signup} role="submit">Sing Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
