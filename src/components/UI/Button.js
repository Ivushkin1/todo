import styles from './Button.module.css';
function Button({ onClick, child, title, disable = true, disabled = false }) {
  return (
    <button
      className={`${styles.button}  ${!disable ? styles.disable : ''}`}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {child}
    </button>
  );
}
export default Button;
