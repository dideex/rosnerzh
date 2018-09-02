import React from 'react'

const Svg = props => {
  const {disabled, id} = props
  if (!id) return null
  const entities = {
    mType: (
      <svg
        className="towelDryer"
        disabled={disabled}
        version="1.1"
        x="0"
        y="0"
        viewBox="0 0 604 706"
      >
        <path
          d="M514.9,408.7H156.1c-59.6,0-61.7-108.3-0.4-108.3h358.8c114.5,0,120.5-190.8,0-190.8H108.3l-6.3-2H65.5V82.3
        c34.6-18.1,28.6-80.8-21-80.8C-3.9,1.5-10.9,61.2,21,80.9v71.6h78.3l9.3-2.3h406c61.3,0,59.6,108,0,108H155.7
        c-120.5,0-114.1,192,0.4,192h358.8c61.3,0,59.7,105.6,0,105.6h-406l-9.3-2.3H21.4v72C-10.4,645.3-3.5,705,44.9,705
        c49.6,0,55.7-62.7,21-80.8v-25.6h36.5l6.3-2h406.3C629.4,596.5,635.4,408.7,514.9,408.7z M514.9,581.5h-405c0,0-4.3-1.9-4.3-5.5
        s4-5.5,4-5.5h405.3c81.2,0,85.4-136.3,0-136.3H156.1c-97,0-92.4-159.5-0.4-159.5h358.8v-0.2c81.2,0,85.5-139,0-139H109.3
        c0,0-4-1.9-4-5.5s4.3-5.5,4.3-5.5h405c92,0,97,159.8,0,159.8H155.7c-85.5,0-80.8,140.3,0.4,140.3h358.8
        C606.9,424.7,611.9,581.5,514.9,581.5z"
        />
      </svg>
    ),
    ladder: (
      <svg
        className="ladder"
        disabled={disabled}
        version="1.1"
        x="0"
        y="0"
        viewBox="0 0 604 706"
      >
        <path
          className="rail"
          d="M119.1,199.3l9.3-2.3h356.2l9.3,2.3h33.7v-45h-36.5l-6.3,2H128.1l-6.3-2H85.4v45H119.1z M129.4,171.3h354.2
      c0,0,4.3,1.9,4.3,5.5s-4,5.5-4,5.5H129.1c0,0-4-1.9-4-5.5S129.4,171.3,129.4,171.3z"
        />
        <path
          className="rail"
          d="M484.8,390H128.1l-6.3-2H85.4v45h33.7l9.3-2.3h356.2l9.3,2.3h33.7v-45h-36.5L484.8,390z M483.8,416H129.1c0,0-4-1.9-4-5.5
      s4.3-5.5,4.3-5.5h354.2c0,0,4.3,1.9,4.3,5.5S483.8,416,483.8,416z"
        />
        <path
          d="M572.1,626.6V576v-21V451.2V377v-75.9v-74.3V151v-25V79.4C603.9,59.7,597,0,548.6,0c-49.6,0-55.7,62.7-21,80.8V106v45
      v105.1v45v105.1v45V555v45v25.2c-34.6,18.1-28.6,80.8,21,80.8C597,706,603.9,646.3,572.1,626.6z"
        />
        <path
          className="rail"
          d="M484.8,271.3H128.1l-6.3-2H85.4v45h33.7l9.3-2.3h356.2l9.3,2.3h33.7v-45h-36.5L484.8,271.3z M483.8,297.3H129.1
      c0,0-4-1.9-4-5.5s4.3-5.5,4.3-5.5h354.2c0,0,4.3,1.9,4.3,5.5S483.8,297.3,483.8,297.3z"
        />
        <path
          className="rail"
          d="M493.8,506.7l-9.3,2.3H128.4l-9.3-2.3H85.4v45h36.5l6.3-2h356.7l6.3,2h36.5v-45H493.8z M483.6,534.7H129.4
      c0,0-4.3-1.9-4.3-5.5s4-5.5,4-5.5h354.7c0,0,4,1.9,4,5.5S483.6,534.7,483.6,534.7z"
        />
        <path
          d="M85.4,451.2v-45V301.1v-45V151v-45V80.8C120.1,62.7,114,0,64.4,0C16,0,9,59.7,40.9,79.4V126v25v75.8v74.3V377v74.3V555v21
      v50.5C9,646.3,16,706,64.4,706c49.6,0,55.7-62.7,21-80.8V600v-45V451.2z"
        />
      </svg>
    ),
    ladderGrouped: (
      <svg
        className="ladder"
        disabled={disabled}
        version="1.1"
        x="0"
        y="0"
        viewBox="0 0 604 706"
      >
        <path
          d="M85.4,451.2v-45V301.1v-45V151v-45V80.8C120.1,62.7,114,0,64.4,0C16,0,9,59.7,40.9,79.4V126v25v75.8v74.3V377v74.3V555v21
        v50.5C9,646.3,16,706,64.4,706c49.6,0,55.7-62.7,21-80.8V600v-45V451.2z"
        />
        <path
          d="M572.1,626.6V576v-21V451.2V377v-75.9v-74.3V151v-25V79.4C603.9,59.7,597,0,548.6,0c-49.6,0-55.7,62.7-21,80.8V106v45
        v105.1v45v105.1v45V555v45v25.2c-34.6,18.1-28.6,80.8,21,80.8C597,706,603.9,646.3,572.1,626.6z"
        />
        <path
          className="rail"
          d="M119.1,223.6l9.3-2.3h356.2l9.3,2.3h33.7v-45h-36.5l-6.3,2H128.1l-6.3-2H85.4v45H119.1z M129.4,195.6h354.2
        c0,0,4.3,1.9,4.3,5.5s-4,5.5-4,5.5H129.1c0,0-4-1.9-4-5.5S129.4,195.6,129.4,195.6z"
        />
        <path
          className="rail"
          d="M484.8,254.3H128.1l-6.3-2H85.4v45h33.7l9.3-2.3h356.2l9.3,2.3h33.7v-45h-36.5L484.8,254.3z M483.8,280.3H129.1
        c0,0-4-1.9-4-5.5s4.3-5.5,4.3-5.5h354.2c0,0,4.3,1.9,4.3,5.5S483.8,280.3,483.8,280.3z"
        />
        <path
          className="rail"
          d="M119.1,151l9.3-2.3h356.2l9.3,2.3h33.7v-45h-36.5l-6.3,2H128.1l-6.3-2H85.4v45H119.1z M129.4,123h354.2
        c0,0,4.3,1.9,4.3,5.5s-4,5.5-4,5.5H129.1c0,0-4-1.9-4-5.5S129.4,123,129.4,123z"
        />
        <path
          className="rail"
          d="M119.1,516.2l9.3-2.3h356.2l9.3,2.3h33.7v-45h-36.5l-6.3,2H128.1l-6.3-2H85.4v45H119.1z M129.4,488.2h354.2
        c0,0,4.3,1.9,4.3,5.5s-4,5.5-4,5.5H129.1c0,0-4-1.9-4-5.5S129.4,488.2,129.4,488.2z"
        />
        <path
          className="rail"
          d="M484.8,546.9H128.1l-6.3-2H85.4v45h33.7l9.3-2.3h356.2l9.3,2.3h33.7v-45h-36.5L484.8,546.9z M483.8,572.9H129.1
        c0,0-4-1.9-4-5.5s4.3-5.5,4.3-5.5h354.2c0,0,4.3,1.9,4.3,5.5S483.8,572.9,483.8,572.9z"
        />
        <path
          className="rail"
          d="M119.1,443.6l9.3-2.3h356.2l9.3,2.3h33.7v-45h-36.5l-6.3,2H128.1l-6.3-2H85.4v45H119.1z M129.4,415.6h354.2
        c0,0,4.3,1.9,4.3,5.5s-4,5.5-4,5.5H129.1c0,0-4-1.9-4-5.5S129.4,415.6,129.4,415.6z"
        />
      </svg>
    ),
    ladderNoRack: (
      <svg
        className="ladder"
        disabled={disabled}
        version="1.1"
        x="0"
        y="0"
        viewBox="0 0 604 706"
      >
        <path
          d="M455.7,401.6l-5.3,2.1H152l-5.3-2.1h-30.5v46.8h28.2l7.8-2.4h298l7.8,2.4h28.2v-46.8H455.7z M449.6,430.8H152.8
          c0,0-3.4-2-3.4-5.7c0-3.7,3.6-5.7,3.6-5.7h296.3c0,0,3.6,2,3.6,5.7C452.9,428.8,449.6,430.8,449.6,430.8z"
        />
        <path
          d="M443.3,554.6l-4.7,1.9H171.2l-4.7-1.9h-27.4v43.1h25.3l7-2.2h267l6.9,2.2l0,0h25.3v-43.1H443.3z M437.8,581.4H171.9
          c0,0-3.1-1.8-3.1-5.3s3.2-5.3,3.2-5.3h265.5c0,0,3.2,1.8,3.2,5.3S437.8,581.4,437.8,581.4z"
        />
        <path
          d="M164.4,654h-30.5l-16-112L92.5,364.3l-2.4-16.6l-2-13.7l-1-6.7l-1.1-7.6l-1.6-11.5l-10.6-74.4c-31.9-19.7-25.4-79.5,23-79.5
          c49.6,0,56.4,62.8,21.7,80.9l6.2,56.5l1.6,14.3l1.5,13.7l1.6,14.3l1.5,13.7l1.8,16.6l4.1,37.3l5.1,46.8l3.3,29.7l4.8,44.4l3.5,32.1
          l4.7,43.1L164.4,654z"
        />
        <path
          d="M531.2,233.9l-8.7,60.9l-2.1,14.5l-0.4,3l-1.6,11.3l-2,13.7l-2.4,16.6l-26.9,188.2l-14.5,101.5h-30.9l6.2-56.3l4.7-43.1
          l3.5-31.5l4.9-45l3.3-29.7l5.1-46.8l4.1-37.3l1.8-16.6l1.5-13.7l1.6-14.3l1.5-13.7l1.6-14.3l5-46c-34.7-18.1-27.9-80.9,21.7-80.9
          C556.6,154.5,563.1,214.2,531.2,233.9z"
        />
      </svg>
    ),
    ladderRack: (
      <svg
        className="ladder"
        disabled={disabled}
        version="1.1"
        x="0"
        y="0"
        viewBox="0 0 604 706"
      >
        <path
          d="M455.7,401.6l-5.3,2.1H152l-5.3-2.1h-30.5v46.8h28.2l7.8-2.4h298l7.8,2.4h28.2v-46.8H455.7z M449.6,430.8H152.8
        c0,0-3.4-2-3.4-5.7c0-3.7,3.6-5.7,3.6-5.7h296.3c0,0,3.6,2,3.6,5.7C452.9,428.8,449.6,430.8,449.6,430.8z"
        />
        <path
          d="M443.3,554.6l-4.7,1.9H171.2l-4.7-1.9h-27.4v43.1h25.3l7-2.2h267l6.9,2.2l0,0h25.3v-43.1H443.3z M437.8,581.4H171.9
        c0,0-3.1-1.8-3.1-5.3s3.2-5.3,3.2-5.3h265.5c0,0,3.2,1.8,3.2,5.3S437.8,581.4,437.8,581.4z"
        />
        <path
          d="M164.4,654h-30.5l-16-112L92.5,364.3l-2.4-16.6l-2-13.7l-1-6.7l-1.1-7.6l-1.6-11.5l-10.6-74.4c-31.9-19.7-25.4-79.5,23-79.5
        c49.6,0,56.4,62.8,21.7,80.9l6.2,56.5l1.6,14.3l1.5,13.7l1.6,14.3l1.5,13.7l1.8,16.6l4.1,37.3l5.1,46.8l3.3,29.7l4.8,44.4l3.5,32.1
        l4.7,43.1L164.4,654z"
        />
        <path
          d="M531.2,233.9l-8.7,60.9l-2.1,14.5l-0.4,3l-1.6,11.3l-2,13.7l-2.4,16.6l-26.9,188.2l-14.5,101.5h-30.9l6.2-56.3l4.7-43.1
        l3.5-31.5l4.9-45l3.3-29.7l5.1-46.8l4.1-37.3l1.8-16.6l1.5-13.7l1.6-14.3l1.5-13.7l1.6-14.3l5-46c-34.7-18.1-27.9-80.9,21.7-80.9
        C556.6,154.5,563.1,214.2,531.2,233.9z"
        />
        <polygon points="114.6,291.7 495,291.7 495,306 118.8,306 " />
        <polygon points="69.7,319.7 540,319.7 540,334 74.8,334 " />
        <polygon points="13.6,347.7 596.1,347.7 590.5,364.3 19.5,364.3 " />
        <polygon points="495,291.7 596.1,346.7 590.5,364.3 495,310 " />
        <polygon points="114.6,291.7 13.6,346.7 19.5,364.3 118.8,310 " />
      </svg>
    ),
    ladderGate: (
      <svg
        className="ladder"
        disabled={disabled}
        version="1.1"
        x="0"
        y="0"
        viewBox="0 0 604 706"
      >
        <path
          d="M119.1,199.3l9.3-2.3h312.2l9.3,2.3h33.7v-45h-36.5l-6.3,2H128.1l-6.3-2H85.4v45H119.1z M129.4,171.3h310.2
        c0,0,4.3,1.9,4.3,5.5s-4,5.5-4,5.5H129.1c0,0-4-1.9-4-5.5S129.4,171.3,129.4,171.3z"
        />
        <path
          d="M440.8,390H128.1l-6.3-2H85.4v45h33.7l9.3-2.3h312.2l9.3,2.3h33.7v-45h-36.5L440.8,390z M439.8,416H129.1c0,0-4-1.9-4-5.5
        s4.3-5.5,4.3-5.5h310.2c0,0,4.3,1.9,4.3,5.5S439.8,416,439.8,416z"
        />
        <path d="M528.1,576v-21V451.2V377v-75.9v-74.3V151v-25V80.8h-44.5V106v45v105.1v45v105.1v45V555v45v25.2h44.5V576z" />
        <path
          d="M440.8,271.3H128.1l-6.3-2H85.4v45h33.7l9.3-2.3h312.2l9.3,2.3h33.7v-45h-36.5L440.8,271.3z M439.8,297.3H129.1
        c0,0-4-1.9-4-5.5s4.3-5.5,4.3-5.5h310.2c0,0,4.3,1.9,4.3,5.5S439.8,297.3,439.8,297.3z"
        />
        <path
          d="M449.8,506.7l-9.3,2.3H128.4l-9.3-2.3H85.4v45h36.5l6.3-2h312.7l6.3,2h36.5v-45H449.8z M439.6,534.7H129.4
        c0,0-4.3-1.9-4.3-5.5s4-5.5,4-5.5h310.7c0,0,4,1.9,4,5.5S439.6,534.7,439.6,534.7z"
        />
        <path d="M40.9,625.2h44.5V600v-45V451.2v-45V301.1v-45V151v-45V80.8H40.9V126v25v75.8v74.3V377v74.3V555v21V625.2z" />
        <rect x="528.1" y="228.6" width="40.9" height="15" />
        <ellipse
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 3.3207 480.2168)"
          cx="581.3"
          cy="236.1"
          rx="22.9"
          ry="22.9"
        />
        <rect x="527.9" y="462" width="40.9" height="15" />
        <ellipse
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -161.7669 548.4603)"
          cx="581.2"
          cy="469.5"
          rx="22.9"
          ry="22.9"
        />
      </svg>
    ),
    fType: (
      <svg
        className="fType"
        disabled={disabled}
        version="1.1"
        x="0"
        y="0"
        viewBox="0 0 604 706"
      >
        <path
          d="M602.5,202.5c0-16.1-3.4-32.2-10.2-46.3c-13.1-27.2-38.9-47.3-78-47.3H108.1l-6.3-2H65.4V81.8
        C100.1,63.6,94,1,44.4,1C-4,1-11,60.6,20.9,80.4V152h62.8v53.7c0,22.5,18.2,40.7,40.7,40.7h279c14.4,0,26.1,11.7,26.1,26.1
        c0,14.4-11.7,26.1-26.1,26.1h-99.6c-0.7,0-1.3,0-2,0c-30.4,0-55,24.6-55,55s24.6,55,55,55c0.8,0,1.5,0,2.3,0h99.3
        c14.4,0,26.1,11.7,26.1,26.1c0,14.4-11.7,26.1-26.1,26.1h-279c-22.5,0-40.7,18.2-40.7,40.7V555h14.8v-53.7
        c0-14.3,11.6-25.9,25.9-25.9h276.9c0.7,0,1.4,0,2.1,0c22.6,0,40.9-18.3,40.9-40.9c0-22.6-18.3-40.9-40.9-40.9H301.8
        c-22.2,0-40.2-18-40.2-40.2c0-22.2,18-40.2,40.2-40.2h101.6c22.6,0,40.9-18.3,40.9-40.9c0-22.6-18.3-40.9-40.9-40.9
        c-0.7,0-1.4,0-2.1,0H124.3c-14.3,0-25.9-11.6-25.9-25.9V152h0.7l9.3-2.3h406c30.5,0,45.4,26.6,45.4,53.4v300.7
        c0,26.8-14.9,53.4-45.4,53.4h-406l-9.3-2.3H20.9v71.6C-11,646.3-4,706,44.4,706c49.6,0,55.7-62.7,21-80.8V600h36.5l6.3-2h406.3
        c39.1,0,64.9-20.1,78-47.3c6.8-14.1,10.2-30.2,10.2-46.3c0-0.4,0-0.9,0-1.3h0V203.8h0C602.5,203.4,602.5,203,602.5,202.5z
         M585.3,206.3v294.3c0,0.6,0,1.2,0,1.8c-0.1,14-3.2,28.1-9,40.4c-1.3,2.7-2.7,5.3-4.3,7.9c-11.7,19-31,32.3-57.6,32.3h-405
        c0,0-4.3-1.9-4.3-5.5s4-5.5,4-5.5h405.3c21.1,0,36.8-8.5,47.1-21.3c5.3-6.6,9.3-14.3,11.8-22.5c1.5-4.7,2.5-9.6,3-14.5l0.2-239.2
        l0-10l0.1-18.3l0.1-38.8l0-7.8c-0.1-2.1-0.2-4.2-0.5-6.2c-0.6-5-1.6-9.8-3-14.5c-2.5-8.3-6.5-16-11.8-22.5
        c-10.3-12.8-26-21.3-47.1-21.3H109.1c0,0-4-1.9-4-5.5s4.3-5.5,4.3-5.5h405c26.6,0,45.9,13.3,57.6,32.3c1.6,2.5,3,5.1,4.3,7.9
        c5.9,12.3,8.9,26.4,9,40.4C585.3,205.1,585.3,205.7,585.3,206.3z"
        />
      </svg>
    ),
    pType: (
      <svg
        className="fType"
        disabled={disabled}
        version="1.1"
        x="0"
        y="0"
        viewBox="0 0 604 706"
      >
        <path
          d="M602.3,278.5c0-16.1-3.4-32.2-10.2-46.3c-13.1-27.2-38.9-47.3-78-47.3H107.9l-6.3-2H65.2v-25.2
        C99.9,139.6,93.8,77,44.2,77c-48.4,0-55.4,59.7-23.5,79.4V228h78.3l9.3-2.3h406c30.5,0,45.4,26.6,45.4,53.4v120.7
        c0,26.8-14.9,53.4-45.4,53.4h-406l-9.3-2.3H20.7v71.6C-11.2,542.3-4.2,602,44.2,602c49.6,0,55.7-62.7,21-80.8V496h36.5l6.3-2h406.3
        c39.1,0,64.9-20.1,78-47.3c6.8-14.1,10.2-30.2,10.2-46.3c0-0.4,0-0.9,0-1.3h0V279.8h0C602.3,279.4,602.3,279,602.3,278.5z
         M585.1,282.3v114.3c0,0.6,0,1.2,0,1.8c-0.1,14-3.2,28.1-9,40.4c-1.3,2.7-2.7,5.3-4.3,7.9c-11.7,19-31,32.3-57.6,32.3h-405
        c0,0-4.3-1.9-4.3-5.5s4-5.5,4-5.5h405.3c21.1,0,36.8-8.5,47.1-21.3c5.3-6.6,9.3-14.3,11.8-22.5c1.5-4.7,2.5-9.6,3-14.5l0.2-60.2
        l0-10l0.1-18.3l0.1-37.8l0-7.8c-0.1-2.1-0.2-4.2-0.5-6.2c-0.6-5-1.6-9.8-3-14.5c-2.5-8.3-6.5-16-11.8-22.5
        c-10.3-12.8-26-21.3-47.1-21.3H108.9c0,0-4-1.9-4-5.5s4.3-5.5,4.3-5.5h405c26.6,0,45.9,13.3,57.6,32.3c1.6,2.5,3,5.1,4.3,7.9
        c5.9,12.3,8.9,26.4,9,40.4C585.1,281.1,585.1,281.7,585.1,282.3z"
        />
      </svg>
    ),
    arrowRight: (
      <svg className="arrowRight" disabled={disabled} viewBox="0 0 320 512">
        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
      </svg>
    ),
    vk: (
      <svg className="vkontakte" disabled={disabled} viewBox="0 0 30 30">
        <path d="M16,24c1,0,1-1.441,1-2c0-1,1-2,2-2s2.715,1.715,4,3c1,1,1,1,2,1s3,0,3,0  s2-0.076,2-2c0-0.625-0.685-1.685-3-4c-2-2-3.026-0.967,0-5c1.843-2.456,3.184-4.681,2.954-5.323C29.734,7.064,24.608,6.088,24,7  c-2,3-2.367,3.735-3,5c-1,2-1.099,3-2,3c-0.909,0-1-1.941-1-3c0-3.306,0.479-5.644-1-6c0,0-2,0-3,0c-1.61,0-3,1-3,1  s-1.241,0.968-1,1c0.298,0.04,2-0.414,2,1c0,1,0,2,0,2s0.009,4-1,4c-1,0-3-4-5-7C5.215,6.823,5,7,4,7C2.928,7,2.001,7.042,1,7.042  C0,7.042-0.128,7.679,0,8c2,5,3.437,8.14,7.237,12.096C10.722,23.725,13.05,23.918,15,24C15.5,24.021,15,24,16,24z" />
      </svg>
    ),
    fb: (
      <svg className="facebook" disabled={disabled} viewBox="0 0 512 512">
        <path d="M277.41,400.519V272.058h42.82l10.705-53.525H277.41v-21.41  c0-21.41,10.726-32.115,32.115-32.115h21.41v-53.525c-10.705,0-23.98,0-42.82,0c-39.341,0-64.23,30.841-64.23,74.935v32.115h-42.82  v53.525h42.82v128.46L277.41,400.519L277.41,400.519z" />
      </svg>
    ),
    instagram: (
      <svg className="instagram" disabled={disabled} viewBox="0 0 420 419.997">
        <path
          d="M388.818,146.28a24.3,24.3,0,1,1-24.295-24.295A24.3,24.3,0,0,1,388.818,146.28ZM466,256l-0.005.306-1.38,88.105a121.58,121.58,0,0,1-120.2,120.2L256,466l-0.306-.006-88.105-1.376a121.586,121.586,0,0,1-120.206-120.2L46,256l0.006-.306,1.376-88.108a121.59,121.59,0,0,1,120.206-120.2L256,46l0.306,0.006,88.105,1.376a121.584,121.584,0,0,1,120.2,120.2Zm-39.112,0-1.374-87.8A82.654,82.654,0,0,0,343.8,86.485L256,85.114l-87.8,1.371A82.658,82.658,0,0,0,86.484,168.2L85.113,256l1.371,87.8A82.655,82.655,0,0,0,168.2,425.515l87.8,1.371,87.8-1.371A82.651,82.651,0,0,0,425.514,343.8Zm-63.048,0A107.841,107.841,0,1,1,256,148.159,107.962,107.962,0,0,1,363.84,256Zm-39.107,0A68.734,68.734,0,1,0,256,324.734,68.812,68.812,0,0,0,324.732,256Z"
          transform="translate(-46 -46.001)"
        />
      </svg>
    ),
    arrow: (
      <svg className="arrow" disabled={disabled} viewBox="0 0 32 32">
        <path d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
      </svg>
    ),
    loading: (
      <svg disabled={disabled} viewBox="0 0 34 34">
        <circle className="background" r="16.5" cx="17" cy="17" />
        <circle className="stroke" r="14.5" cx="17" cy="17" />
      </svg>
    ),
    tint: (
      <svg className="tint" disabled={disabled} viewBox="0 0 352 512">
        <path d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
      </svg>
    ),
    bolt: (
      <svg className="bolt" disabled={disabled} viewBox="0 0 320 512">
        <path d="M295.973 160H180.572L215.19 30.184C219.25 14.956 207.756 0 192 0H56C43.971 0 33.8 8.905 32.211 20.828l-31.996 240C-1.704 275.217 9.504 288 24.004 288h118.701L96.646 482.466C93.05 497.649 104.659 512 119.992 512c8.35 0 16.376-4.374 20.778-11.978l175.973-303.997c9.244-15.967-2.288-36.025-20.77-36.025z" />
      </svg>
    ),
    phone: (
      <svg className="phone" disabled={disabled} viewBox="0 0 512 512">
        <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
      </svg>
    ),
    marker: (
      <svg className="marker" disabled={disabled} viewBox="0 0 512 512">
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
      </svg>
    ),
    letter: (
      <svg className="letter" disabled={disabled} viewBox="0 0 512 512">
        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
      </svg>
    ),
    clock: (
      <svg className="clock" disabled={disabled} viewBox="0 0 512 512">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
      </svg>
    ),
    volna: (
      <svg className="volna" disabled={disabled} viewBox="0 0 240 90">
        <circle cx="45.3" cy="45" r="11" />
        <circle cx="194.7" cy="45.8" r="11" />
        <path d="M194.7,45.8C148,12.5,98,84.3,45.3,45" />
      </svg>
    ),
    zigzag: (
      <svg className="zigzag" disabled={disabled} viewBox="0 0 240 90">
        <circle cx="45.3" cy="68" r="11" />
        <circle cx="194.7" cy="21.3" r="11" />
        <path d="M194.7,21.3H85.9c-36.3,0-36.3,23.4,0,23.4h68.2c36.3,0,36.3,23.4,0,23.4H45.3" />
      </svg>
    ),
    duga: (
      <svg className="duga" disabled={disabled} viewBox="0 0 240 90">
        <circle cx="45.3" cy="45.4" r="11" />
        <circle cx="194.7" cy="46.2" r="11" />
        <path d="M194.7,46.2C144.5,74,92.3,74.2,45.3,45.4" />
      </svg>
    ),
    priamaia: (
      <svg className="priamaia" disabled={disabled} viewBox="0 0 240 90">
        <circle cx="45.3" cy="45.4" r="11" />
        <circle cx="194.7" cy="46.2" r="11" />
        <line x1="194.7" y1="46.2" x2="45.3" y2="45.4" />
      </svg>
    ),
    skoba: (
      <svg className="skoba" disabled={disabled} viewBox="0 0 240 90">
        <circle cx="45.3" cy="45.4" r="11" />
        <circle cx="194.7" cy="46.2" r="11" />
        <polyline points="194.7,46.2 194.7,12.8 45.3,12.8 45.3,45.4 	" />
      </svg>
    ),
    neo1: (
      <svg className="neo1" disabled={disabled} viewBox="0 0 240 90">
        <circle cx="45.3" cy="45.4" r="11" />
        <circle cx="194.7" cy="46.2" r="11" />
        <polyline points="24.5,12.8 45.3,12.8 45.3,45.4 45.3,12.8 194.7,12.8 194.7,46.2 194.7,12.8 215.5,12.8 	" />
      </svg>
    ),
    neo2: (
      <svg className="neo2" disabled={disabled} viewBox="0 0 240 90">
        <circle cx="45.3" cy="68" r="11" />
        <circle cx="194.7" cy="21.3" r="11" />
        <line x1="181.1" y1="68" x2="45.3" y2="68" />
        <line x1="58.9" y1="44.7" x2="181.1" y2="44.7" />
        <line x1="194.7" y1="21.3" x2="58.9" y2="21.3" />
        <line x1="172.5" y1="45" x2="172.5" y2="68" />
        <line x1="67.8" y1="45" x2="67.8" y2="21.3" />
      </svg>
    ),
    trapecia: (
      <svg className="trapecia" disabled={disabled} viewBox="0 0 240 90">
        <circle cx="45.3" cy="45.4" r="11" />
        <circle cx="194.7" cy="46.2" r="11" />
        <polyline points="194.7,46.2 181.1,12.8 58.9,12.8 45.3,45.4 	" />
      </svg>
    ),
    avrora: (
      <svg className="avrora" disabled={disabled} viewBox="0 0 240 90">
        <circle cx="45.3" cy="20.4" r="11" />
        <circle cx="194.7" cy="20.4" r="11" />
        <path d="M45.3,20.4c-133.8,66.6,289.2,67.1,149.4,0" />
      </svg>
    ),
  }
  return entities[id] || null
}

export default Svg
