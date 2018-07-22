import React from 'react'

const Loading = () => (
  <div
    className="fixed w-100 tc bg-white"
    style={{ top: '50%', transform: 'translateY(-50%)' }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="blue"
    >
      <path d="M0 12 V20 H4 V12z">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 28 0; 0 0; 0 0"
          dur="1.5s"
          begin="0"
          repeatCount="indefinite"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          calcMode="spline"
        />
      </path>
      <path opacity="0.5" d="M0 12 V20 H4 V12z">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 28 0; 0 0; 0 0"
          dur="1.5s"
          begin="0.1s"
          repeatCount="indefinite"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          calcMode="spline"
        />
      </path>
      <path opacity="0.25" d="M0 12 V20 H4 V12z">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 28 0; 0 0; 0 0"
          dur="1.5s"
          begin="0.2s"
          repeatCount="indefinite"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          calcMode="spline"
        />
      </path>
    </svg>
  </div>
)

export default Loading
