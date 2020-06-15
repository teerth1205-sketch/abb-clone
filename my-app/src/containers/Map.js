// import React from "react"
// import {
//     GoogleMap, 
//     useLoadScript, 
//     Marker, 
//     infoWindow 
// } from "@react-google-maps/api";

//     const libraries = ["places"]
 
//     const mapContainerStyle = {
//         width: "100vw",
//         height: "100vh",
//     }
    
//     const center = {
//         lat: 40, 
//         lng: 60,
//     }

// export default function Map() {
//     const {isLoaded, loadError} = useLoadScript({
//         googleMapsApiKey: "AIzaSyD7-5oS0tqUlOmEuA4OTpk87U0Z01uPEWI",
//         libraries,
//     })
   
    
//     if (loadError) return "there was an error loading maps";
//     if (!isLoaded) return "loading maps"
    
//     return (
//     <div>
//         <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>
//         </GoogleMap>
//     </div>
//     )
// }

import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default class Map extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyD7-5oS0tqUlOmEuA4OTpk87U0Z01uPEWI"
      >
        <GoogleMap
          mapContainerStyle={ containerStyle }
          center={ center }
          zoom={ 10 }
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}


// import React from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//   width: '500px',
//   height: '500px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function Map() {
//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyD7-5oS0tqUlOmEuA4OTpk87U0Z01uPEWI"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
      
//       </GoogleMap>
//     </LoadScript>
//   )
// }

// export default React.memo(Map)