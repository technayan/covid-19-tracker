import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from './util';
import './WorldMap.css'

const WorldMap = ({countries, casesType, center, zoom}) => {
    return (
        <div className='map'>
            <LeafletMap center={center} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    );
};

export default WorldMap;