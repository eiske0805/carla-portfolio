import React, { memo, useContext } from "react"
import { Box } from "@chakra-ui/react"

import { GlobalStateContext } from "../../context/globalContextProvider"

const color = {
  ca: "cPurple2",
  en: "cGreen4",
  ja: "cBlue3",
}
const ComputerSvg = memo(() => {
  const state = useContext(GlobalStateContext)

  return (
    <Box
      as="svg"
      viewBox="0 0 1000 1000"
      fill={color[state.selectedLanguage]}
      fillRule="evenodd"
    >
      <path d="M154.252,67.132c-24.164,6.606 -44.733,30.549 -59.689,64.015c-29.595,66.224 -40.639,169.905 -43.928,196.874c-22.34,183.172 -29.75,297.45 61.739,398.661c10.356,11.456 30.032,21.787 57.501,29.498c55.298,15.523 145.172,22.936 243.55,24.046c145.99,1.648 310.86,-10.326 407.432,-28.364c25.864,-4.831 47.007,-10.153 61.919,-15.696c12.625,-4.693 21.459,-10.027 26.45,-14.998c18.552,-18.475 33.17,-56.937 42.139,-107.148c19.267,-107.876 16.279,-272.344 -1.335,-386.279c-7.856,-50.82 -18.903,-91.867 -31.676,-114.592c-7.856,-13.974 -17.186,-22.187 -26.096,-25.453c-36.25,-13.285 -140.91,-25.46 -262.006,-32.446c-180.229,-10.398 -397.021,-9.711 -476,11.882Zm9.487,34.702c77.057,-21.068 288.597,-20.813 464.44,-10.668c116.285,6.709 216.89,17.551 251.699,30.309c1.26,0.461 2.106,1.873 3.268,3.375c2.856,3.691 5.502,8.631 8.097,14.572c9.402,21.524 17.154,54.487 23.234,93.815c17.075,110.449 20.151,269.883 1.473,374.457c-7.296,40.845 -17.019,72.954 -32.11,87.983c-2.493,2.483 -7.291,4.423 -13.598,6.768c-13.476,5.009 -32.616,9.687 -55.99,14.053c-94.908,17.727 -256.947,29.375 -400.421,27.755c-81.388,-0.919 -156.767,-6.072 -210.252,-16.984c-31.213,-6.369 -54.451,-13.577 -64.517,-24.712c-84.8,-93.81 -73.422,-200.402 -52.716,-370.181c2.686,-22.026 10.509,-97.813 30.476,-158.748c6.254,-19.088 13.657,-36.676 22.663,-50.279c7.05,-10.647 14.68,-18.897 24.254,-21.515Z" />
      <path d="M679.103,943.523c49.209,-32.233 27.502,-94.151 -22.42,-115.507c-78.602,-33.625 -210.786,-28.3 -245.082,-15.732c-21.39,7.838 -52.897,26.925 -65.063,47.098c-6.133,10.169 -8.257,20.785 -5.995,31.091c2.095,9.548 8.07,19.549 21.111,28.327c42.034,28.293 133.979,40.992 208.19,40.979c34.54,-0.006 65.17,-2.643 85.007,-7.139c10.905,-2.472 19.134,-5.765 24.252,-9.117Zm-20.715,-31.625c-3.675,2.407 -10.62,3.847 -19.613,5.394c-17.742,3.052 -42.04,4.678 -68.938,4.682c-66.534,0.012 -149.388,-9.17 -187.073,-34.536c-2.706,-1.821 -4.86,-3.087 -5.295,-5.068c-0.201,-0.918 0.483,-1.721 0.969,-2.632c1.11,-2.084 2.705,-4.094 4.549,-6.078c10.699,-11.517 28.869,-21.206 41.621,-25.879c30.405,-11.142 147.523,-14.817 217.206,14.993c21.997,9.41 38.257,34.922 16.574,49.124Z" />
      <path d="M487.249,773.741c-1.428,15.942 -4.6,29.418 -7.475,50.943c-3.348,25.066 63.859,15.608 63.764,7.06c-0.292,-26.12 -3.755,-36.902 -7.613,-57.947l-48.676,-0.056Z" />
      <path d="M487.268,757.278c-8.531,-0.01 -15.656,6.498 -16.417,14.995c-1.408,15.72 -4.56,29.006 -7.395,50.231c-1.859,13.914 4.699,23.822 17.232,29.671c10.349,4.829 26.818,6.007 41.344,4.354c14.389,-1.638 26.63,-6.437 31.076,-10.281c5.349,-4.626 6.944,-10.017 6.892,-14.688c-0.305,-27.37 -3.838,-38.68 -7.882,-60.732c-1.432,-7.81 -8.234,-13.486 -16.175,-13.495l-48.675,-0.055Zm14.533,32.943l20.569,0.024c2.049,10.173 3.732,18.96 4.406,31.89c-3.824,0.857 -9.005,1.846 -13.362,2.098c-5.147,0.298 -12.843,-0.918 -16.732,-1.621c1.806,-12.79 3.671,-22.759 5.119,-32.391Z" />
      <path d="M187.494,139.685c115.757,-29.764 568.191,-10.424 647.265,16.831c58.112,20.029 80.62,438.769 9.316,505.552c-46.256,43.323 -621.196,72.824 -686.205,5.188c-78.469,-81.637 -70.107,-174.101 -50.947,-321.85c4.072,-31.401 21.373,-190.5 80.571,-205.721Zm84.655,515.427c-0,-0 371.926,-0.731 460.403,-0.731c18.256,0 21.509,1.492 11.055,19.038c-1.944,3.264 -445.336,10.687 -471.982,-4.221c-7.297,-4.083 0.524,-10.081 0.524,-14.086Zm-126.821,-66.567c0,0 371.926,-0.73 460.404,-0.73c18.255,-0 21.508,1.492 11.054,19.038c-1.944,3.264 -445.336,10.687 -471.982,-4.222c-7.296,-4.082 0.524,-10.081 0.524,-14.086Zm70.598,-70.829c0,0 240.672,-0.73 297.926,-0.73c11.813,-0 13.918,1.492 7.154,19.038c-1.259,3.264 -288.177,10.687 -305.419,-4.222c-4.722,-4.082 0.339,-10.081 0.339,-14.086Zm99.915,-71.708c-0,0 185.53,-0.73 229.666,-0.73c9.106,0 10.729,1.492 5.514,19.038c-0.97,3.264 -222.15,10.687 -235.442,-4.221c-3.64,-4.083 0.262,-10.082 0.262,-14.087Zm76.31,-63.715c0,0 269.743,-0.73 333.913,-0.73c13.24,0 15.599,1.492 8.017,19.038c-1.41,3.264 -322.985,10.687 -342.31,-4.221c-5.292,-4.083 0.38,-10.082 0.38,-14.087Zm-77.234,-67.328c0,0 232.462,-0.73 287.763,-0.73c11.41,-0 13.443,1.492 6.909,19.038c-1.215,3.264 -278.345,10.687 -294.999,-4.222c-4.561,-4.082 0.327,-10.081 0.327,-14.086Zm-71.9,-67.672c-0,0 208.953,-0.73 258.662,-0.73c10.256,-0 12.083,1.492 6.21,19.038c-1.092,3.264 -250.197,10.687 -265.167,-4.222c-4.099,-4.082 0.295,-10.081 0.295,-14.086Zm-64.392,-72.367c0,0 371.926,-0.73 460.404,-0.73c18.255,-0 21.508,1.492 11.054,19.038c-1.944,3.264 -445.336,10.687 -471.982,-4.221c-7.296,-4.083 0.524,-10.082 0.524,-14.087Z" />
    </Box>
  )
})

export default ComputerSvg