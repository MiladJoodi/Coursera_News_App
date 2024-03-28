"use client"
import Map from 'react-map-gl';


const Mapuni = () => {
  return (
    <div className='flex justify-center px-1 w-full rounded-lg'>
      <Map
      mapboxAccessToken="pk.eyJ1IjoicGF0dWdoIiwiYSI6ImNsdWJhcnZidzA0Y2oybXBrNmg5bWhobTgifQ.t9UnsZPddFQZUyFztC43wg"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: "100%", height: 300}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
    </div>
  );
}

export default Mapuni;