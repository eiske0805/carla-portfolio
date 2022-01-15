import React, { memo, useContext } from "react"
import { Box } from "@chakra-ui/react"

import { GlobalStateContext } from "../../context/globalContextProvider"

const color = {
  ca: "cPurple2",
  en: "cGreen4",
  ja: "cBlue3",
}

const SuitscaseSvg = memo(() => {
  const state = useContext(GlobalStateContext)
  return (
    <Box as="svg" viewBox="0 0 1000 1000" fill={color[state.selectedLanguage]}>
      <path d="M185.713,299.313c-22.339,5.411 -40.963,25.114 -54.79,52.525c-27.585,54.689 -37.904,140.289 -40.97,162.561c-20.808,151.169 -2.137,255.655 83.083,339.182c9.452,9.264 26.954,17.696 51.057,24.155c49.248,13.197 128.536,20.176 215.175,22.126c128.748,2.897 273.843,-5.128 359.321,-19.004c22.818,-3.704 41.532,-7.866 54.823,-12.292c11.071,-3.687 18.937,-7.926 23.477,-11.932c17.315,-15.278 31.297,-47.84 40.242,-90.705c19.14,-91.725 18.648,-232.522 3.829,-330.002c-6.634,-43.642 -16.415,-78.855 -28.062,-98.276c-7.111,-11.859 -15.523,-18.801 -23.778,-21.482c-83.489,-27.109 -561.185,-46.463 -683.407,-16.857l-0,0.001Zm7.321,30.223c119.194,-28.873 585.062,-10.227 666.482,16.211c1.237,0.401 2.158,1.622 3.283,2.969c2.565,3.072 4.919,7.206 7.212,12.177c8.418,18.244 15.121,46.269 20.205,79.708c14.323,94.222 14.974,230.316 -3.527,318.975c-7.189,34.45 -16.459,61.461 -30.375,73.74c-2.407,2.124 -6.857,3.79 -12.726,5.745c-12.113,4.034 -29.189,7.726 -49.983,11.101c-84.124,13.657 -226.927,21.462 -353.637,18.61c-71.951,-1.62 -138.685,-6.651 -186.33,-16.125c-28.247,-5.617 -49.326,-11.955 -58.834,-21.275c-78.429,-76.87 -93.193,-173.611 -74.043,-312.733c2.484,-18.051 9.709,-80.169 28.178,-130.108c5.755,-15.562 12.568,-29.911 20.856,-41.001c6.694,-8.958 14.146,-15.791 23.239,-17.994l0,-0Z" />
      <path d="M151.629,793.011c14.701,-5.861 30.259,-10.123 44.503,-10.828c11.533,-0.571 22.156,0.981 29.718,7.405c10.939,9.292 14.085,27.102 9.261,56.23c-1.402,8.466 4.333,16.478 12.799,17.88c8.466,1.403 16.478,-4.333 17.88,-12.799c7.39,-44.616 -3.052,-70.779 -19.807,-85.012c-10.788,-9.164 -24.74,-13.894 -40.471,-14.754c-20.19,-1.103 -43.605,4.302 -65.399,12.992c-7.972,3.178 -11.863,12.23 -8.685,20.201c3.178,7.972 12.23,11.863 20.201,8.685Z" />
      <path d="M139.546,405.09c4.235,0.651 34.971,5.299 54.949,6.587c11.075,0.714 20.657,0.41 26.002,-0.926c11.042,-2.761 20.211,-10.875 26.782,-22.683c11.203,-20.131 14.829,-52.099 14.829,-67.634c0,-8.582 -6.967,-15.549 -15.549,-15.549c-8.581,0 -15.549,6.967 -15.549,15.549c0,10.513 -1.826,30.614 -7.942,46.148c-1.633,4.146 -3.537,7.946 -5.986,10.863c-1.206,1.437 -2.452,2.718 -4.127,3.137c-3.382,0.845 -9.454,0.513 -16.46,0.062c-20.691,-1.334 -47.848,-5.728 -53.366,-6.457c-5.799,-0.766 -9.049,0.961 -9.43,1.132c-3.62,1.627 -5.623,4.003 -6.879,6.049c-1.003,1.633 -7.373,18.375 9.058,23.125c1.221,0.353 2.451,0.549 3.668,0.597Zm14.117,-23.292c-0.963,-1.974 -3.308,-5.491 -9.149,-7.179c4.022,1.162 7.215,3.811 9.149,7.179Z" />
      <path d="M828.396,381.542l2.691,-50.475c0.603,-2.059 0.782,-4.277 0.456,-6.538c-1.263,-8.763 -7.163,-11.256 -9.292,-12.17c-5.024,-2.157 -10.993,-2.545 -16.853,3.012c-0.588,0.558 -3.68,3.27 -4.838,9.391c-1.258,6.648 -5.219,42.079 -3.585,59.18c0.854,8.934 4.116,14.922 6.725,17.531c6.056,6.056 16.266,11.001 28.512,14.047c23.482,5.84 54.843,5.582 66.179,3.404c8.428,-1.619 13.955,-9.775 12.336,-18.203c-1.619,-8.427 -9.775,-13.955 -18.203,-12.336c-7.776,1.494 -27.315,1.547 -44.574,-1.353c-7.58,-1.274 -14.841,-2.67 -19.554,-5.49Zm-17.293,-40.093c2.262,0.785 4.739,1.053 7.269,0.688c0.916,-0.132 1.803,-0.342 2.652,-0.626c-3.438,1.305 -6.754,1.155 -9.921,-0.062Zm-4.67,-2.575c-2.974,-2.378 -5.084,-5.847 -5.669,-9.909c0.804,5.582 3.619,8.418 5.669,9.909Z" />
      <path d="M899.601,759.6c-4.285,-1.85 -11.361,-3.066 -19.637,-3.167c-14.653,-0.179 -33.989,2.461 -41.403,4.109c-23.995,5.332 -35.442,13.1 -41.51,22.54c-4.092,6.367 -6.108,13.925 -6.541,23.476c-0.443,9.755 0.853,22.387 0.853,39.206c-0,8.582 6.967,15.549 15.549,15.549c8.581,0 15.548,-6.967 15.548,-15.549c0,-13.801 -0.905,-24.738 -0.955,-33.559c-0.03,-5.151 -0.297,-9.192 1.706,-12.308c1.297,-2.019 3.684,-3.2 6.997,-4.571c3.976,-1.645 8.941,-3.059 15.099,-4.427c5.291,-1.176 17.88,-2.914 29.05,-3.302c5.363,-0.187 10.317,-0.57 12.916,0.552c7.878,3.402 17.036,-0.232 20.438,-8.111c3.402,-7.878 -0.232,-17.036 -8.11,-20.438Z" />
      <ellipse cx="317.128" cy="948.107" rx="51.208" ry="48.816" />
      <ellipse cx="733.747" cy="930.458" rx="51.208" ry="48.816" />
      <path d="M344.277,73.62c32.975,-22.072 99.928,-24.16 138.946,-19.182c7.553,0.964 16.354,3.349 20.294,4.485c11.211,34.229 54.488,183.467 54.488,207.078c-0,9.423 7.65,17.073 17.073,17.073c9.423,0 17.073,-7.65 17.073,-17.073c0,-26.277 -49.912,-200.542 -58.073,-223.278c-1.269,-3.537 -3.729,-7.347 -8.159,-10.644c-3.974,-2.958 -10.909,-6.083 -20.365,-8.338c-23.691,-5.649 -67.514,-7.865 -108.109,-2.184c-28.353,3.968 -55.068,11.933 -73.157,24.354c-5.047,3.466 -9.51,8.993 -12.605,16.827c-4.404,11.148 -6.263,28.798 -5.611,49.798c1.943,62.683 24.362,158.129 33.577,178.456c3.891,8.582 14.018,12.391 22.6,8.501c8.582,-3.891 12.391,-14.018 8.5,-22.6c-8.536,-18.83 -28.747,-107.349 -30.547,-165.416c-0.357,-11.507 -0.01,-21.728 1.501,-29.744c0.593,-3.146 2.202,-7.203 2.574,-8.113Z" />
      <path d="M252.752,453.817c90.007,-11.475 276.341,-7.36 404.699,-7.36c14.123,0 146.947,-4.833 147.879,20.158c0.377,10.099 -520.418,21.431 -542.044,21.399c-30.898,-0.046 -33.677,-31.247 -10.534,-34.197Z" />
      <path d="M269.168,556.765c90.008,-11.475 276.342,-7.359 404.699,-7.359c14.123,-0 146.947,-4.834 147.88,20.157c0.377,10.099 -520.418,21.431 -542.045,21.399c-30.897,-0.046 -33.676,-31.247 -10.534,-34.197Z" />
      <path d="M270.182,676.342c90.007,-11.475 276.341,-7.359 404.699,-7.359c14.123,0 146.947,-4.834 147.879,20.157c0.377,10.099 -520.418,21.432 -542.044,21.4c-30.898,-0.046 -33.677,-31.247 -10.534,-34.198Z" />
    </Box>
  )
})

export default SuitscaseSvg
