// import styles from "../../../../commonComponents/MaterialCard/styles";
import styles from "./styles.module.scss";

const LoginForm = ({ isFormValid, formValue, onChange, onSubmit }) => {
    return (
        <div className={styles.wrapper}>
        <form onSubmit ={onSubmit}>
            <input 
            placeholder="email"
            type="email" 
            value={formValue.email} 
            name="email" 
            onChange={onChange} 
            />
            <div>
            <input 
            placeholder="password"
            type="password" 
            value={formValue.password} 
            name="password" 
            onChange={onChange} 
            />
            </div>
            <button className={styles.login} disabled={!isFormValid} role="submit">Login</button>
        </form>
        </div>
    );
};

export default LoginForm;