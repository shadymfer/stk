import styles from './AboutGrid.module.css';

/**
 * @param {*} props to be used in the component
 * @returns component jsx
 */

const AboutGrid = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default AboutGrid;