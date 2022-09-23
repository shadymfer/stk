import styles from './BaseTemplate.module.css';

/**
 * @param {*} props to be used in the component
 * @returns component jsx
 */

const BaseTemplate = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;