import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.mapouter}>
      <div className={styles.gmapCanvas}>
        <iframe
          width="100%"
          height="450vh"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=4710%20ave%20n%20brooklyn%20ny&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="Google Map of 4710 Ave N Brooklyn NY"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
