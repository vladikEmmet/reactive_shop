import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.cuboid}>
          <div
            className={[
              styles["cuboid__face"],
              styles["cuboid__face--bottom"],
            ].join(" ")}
          ></div>
          <div
            className={[
              styles["cuboid__face"],
              styles["cuboid__face--front"],
            ].join(" ")}
          ></div>
          <div
            className={[
              styles["cuboid__face"],
              styles["cuboid__face--back"],
            ].join(" ")}
          ></div>
        </div>
      </div>
      <div className={styles["contacts-container"]}>
        <div className={styles.contact}>
          <a href="#">
            <svg
              id="svg2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 240 240"
              width="2500"
              height="120"
            >
              <style>
                {
                  ".st0{fill:url(#path2995-1-0_1_)}.st1{fill:#c8daea}.st2{fill:#a9c9dd}.st3{fill:url(#path2991_1_)"
                }
              </style>
              <linearGradient
                id="path2995-1-0_1_"
                gradientUnits="userSpaceOnUse"
                x1="-683.305"
                y1="534.845"
                x2="-693.305"
                y2="511.512"
                gradientTransform="matrix(6 0 0 -6 4255 3247)"
              >
                <stop offset="0" stop-color="#37aee2" />
                <stop offset="1" stop-color="#1e96c8" />
              </linearGradient>
              <path
                id="path2995-1-0"
                class="st0"
                d="M240 120c0 66.3-53.7 120-120 120S0 186.3 0 120 53.7 0 120 0s120 53.7 120 120z"
              />
              <path
                id="path2993"
                class="st1"
                d="M98 175c-3.9 0-3.2-1.5-4.6-5.2L82 132.2 152.8 88l8.3 2.2-6.9 18.8L98 175z"
              />
              <path
                id="path2989"
                class="st2"
                d="M98 175c3 0 4.3-1.4 6-3 2.6-2.5 36-35 36-35l-20.5-5-19 12-2.5 30v1z"
              />
              <linearGradient
                id="path2991_1_"
                gradientUnits="userSpaceOnUse"
                x1="128.991"
                y1="118.245"
                x2="153.991"
                y2="78.245"
                gradientTransform="matrix(1 0 0 -1 0 242)"
              >
                <stop offset="0" stop-color="#eff7fc" />
                <stop offset="1" stop-color="#fff" />
              </linearGradient>
              <path
                id="path2991"
                class="st3"
                d="M100 144.4l48.4 35.7c5.5 3 9.5 1.5 10.9-5.1L179 82.2c2-8.1-3.1-11.7-8.4-9.3L55 117.5c-7.9 3.2-7.8 7.6-1.4 9.5l29.7 9.3L152 93c3.2-2 6.2-.9 3.8 1.3L100 144.4z"
              />
            </svg>
          </a>
        </div>
        <div className={styles.contact}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2500"
              height="120"
              viewBox="0 0 2499.899999999999 2500"
            >
              <defs>
                <radialGradient
                  id="a"
                  cx="332.14"
                  cy="2511.81"
                  r="3263.54"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".09" stop-color="#fa8f21" />
                  <stop offset=".78" stop-color="#d82d7e" />
                </radialGradient>
                <radialGradient
                  id="b"
                  cx="1516.14"
                  cy="2623.81"
                  r="2572.12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0" />
                  <stop offset="1" stop-color="#8c3aaa" />
                </radialGradient>
              </defs>
              <path
                d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
                fill="url(#a)"
              />
              <path
                d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
                fill="url(#b)"
              />
            </svg>
          </a>
        </div>
        <div className={styles.contact}>
          <a href="mailto:shopconfirm@yandex.ru">
            <svg
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              xmlns="http://www.w3.org/2000/svg"
              width="2500"
              height="100"
              viewBox="7.086 7.087 1277.149 924.008"
            >
              <path
                fill="none"
                d="M1138.734 931.095h.283M1139.017 931.095h-.283"
              />
              <path
                d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z"
                fill="#e75a4d"
              />
              <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                x1="1959.712"
                y1="737.107"
                x2="26066.213"
                y2="737.107"
                gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
              >
                <stop offset="0" stop-color="#f8f6ef" />
                <stop offset="1" stop-color="#e7e4d6" />
              </linearGradient>
              <path
                fill="url(#a)"
                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
              />
              <path
                fill="#e7e4d7"
                d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z"
              />
              <path
                fill="#b8b7ae"
                d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z"
              />
              <path
                fill="#b7b6ad"
                d="M1138.734 245.877l.283 685.218-495.184-344.324z"
              />
              <path
                d="M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z"
                fill="#b2392f"
              />
              <linearGradient
                id="b"
                gradientUnits="userSpaceOnUse"
                x1="1959.712"
                y1="737.107"
                x2="26066.213"
                y2="737.107"
                gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
              >
                <stop offset="0" stop-color="#f8f6ef" />
                <stop offset="1" stop-color="#e7e4d6" />
              </linearGradient>
              <path
                fill="url(#b)"
                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
              />
              <linearGradient
                id="c"
                gradientUnits="userSpaceOnUse"
                x1="1959.712"
                y1="737.107"
                x2="26066.213"
                y2="737.107"
                gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
              >
                <stop offset="0" stop-color="#f8f6ef" />
                <stop offset="1" stop-color="#e7e4d6" />
              </linearGradient>
              <path
                fill="url(#c)"
                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
              />
              <linearGradient
                id="d"
                gradientUnits="userSpaceOnUse"
                x1="1959.712"
                y1="737.107"
                x2="26066.213"
                y2="737.107"
                gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
              >
                <stop offset="0" stop-color="#f8f6ef" />
                <stop offset="1" stop-color="#e7e4d6" />
              </linearGradient>
              <path
                fill="url(#d)"
                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
              />
              <linearGradient
                id="e"
                gradientUnits="userSpaceOnUse"
                x1="1959.712"
                y1="737.107"
                x2="26066.213"
                y2="737.107"
                gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
              >
                <stop offset="0" stop-color="#f8f6ef" />
                <stop offset="1" stop-color="#e7e4d6" />
              </linearGradient>
              <path
                fill="url(#e)"
                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
              />
              <linearGradient
                id="f"
                gradientUnits="userSpaceOnUse"
                x1="1959.712"
                y1="737.107"
                x2="26066.213"
                y2="737.107"
                gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
              >
                <stop offset="0" stop-color="#f8f6ef" />
                <stop offset="1" stop-color="#e7e4d6" />
              </linearGradient>
              <path
                fill="url(#f)"
                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
              />
              <linearGradient
                id="g"
                gradientUnits="userSpaceOnUse"
                x1="1959.712"
                y1="737.107"
                x2="26066.213"
                y2="737.107"
                gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
              >
                <stop offset="0" stop-color="#f8f6ef" />
                <stop offset="1" stop-color="#e7e4d6" />
              </linearGradient>
              <path
                fill="url(#g)"
                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
              />
              <linearGradient
                id="h"
                gradientUnits="userSpaceOnUse"
                x1="1959.712"
                y1="737.107"
                x2="26066.213"
                y2="737.107"
                gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
              >
                <stop offset="0" stop-color="#f8f6ef" />
                <stop offset="1" stop-color="#e7e4d6" />
              </linearGradient>
              <path
                fill="url(#h)"
                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
              />
              <path
                fill="#f7f5ed"
                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className={styles["floor-thickness"]}></div>
    </div>
  );
};

export default Contacts;
