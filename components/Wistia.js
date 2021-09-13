import styles from "./Wistia.module.css";

const Wistia = ({ image, videoId }) => {
  return (
    <div>
      <div className={`${styles["lazy-wistia"]} lazy-wistia`} data-id={videoId}>
        <img src={image} className={styles.image} />
        <div
          className={` ${styles["w-bpb-wrapper"]} w-bpb-wrapper w-css-reset w-css-reset-tree`}
        >
          <button
            className={`w-big-play-button w-css-reset-button-important w-vulcan-v2-button ${styles["w-vulcan-v2-button"]}`}
            aria-label="Play Video: StartCHURCH Video"
          >
            <div className={`${styles["btn-1"]}`}></div>
            <div className={`${styles["btn-2"]}`}></div>

            <svg
              x="0px"
              y="0px"
              viewBox="0 0 125 80"
              enableBackground="new 0 0 125 80"
              focusable="false"
              alt=""
              className={`${styles.svg}`}
            >
              <rect
                fillRule="evenodd"
                clipRule="evenodd"
                fill="none"
                width="125"
                height="80"
              ></rect>
              <polygon
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#FFFFFF"
                points="53,22 53,58 79,40"
              ></polygon>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`wistia_responsive_padding ${styles.wistia_responsive_padding} hidden holder-${videoId}`}
      >
        <div
          className={`wistia_responsive_wrapper ${styles.wistia_responsive_wrapper}`}
        >
          <div
            className={`${styles["wistia_embed"]} wistia_embed wistia_async_${videoId} videoFoam=true`}
          >
            <div className={`wistia_swatch ${styles.wistia_swatch} `}>
              <img
                src="https://s3.amazonaws.com/media.startchurch.com/Media/features/temp_image.jpg"
                data-src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
                className={`${styles.img}`}
                alt="startright video"
                aria-hidden="true"
                // onLoad={() => (this.parentNode.style.opacity = 1)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wistia;
