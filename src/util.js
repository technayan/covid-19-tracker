import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
    cases: {
        hex: '#cc1034',
        multiplier: 50,
    },
    recovered: {
        hex: '#7dd71d',
        multiplier: 1200,
    },
    deaths: {
        hex: '#fb4443',
        multiplier: 2000,
    }
}

export const sortData = (data) => {
    const sortedData = [...data];

    return sortedData.sort((a, b) => (a.cases > b.cases) ? -1 : 1 );
}

export const showDataOnMap = (data, casesType='cases') => {
    return data.map(country => (
        <Circle
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        radius={
            Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }
        >
            <Popup>
                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                        <div><h3>{country.country}</h3></div>
                        <div style={{width: '30px', borderRadius: '3px', height: '20px', backgroundSize:'cover', backgroundImage: `url(${country.countryInfo.flag})`}}></div>
                    </div>
                    
                    <div>Cases: {country.cases}</div>
                    <div>Recovered: {country.recovered}</div>
                    <div>Deaths: {country.deaths}</div>
                </div>
            </Popup>

        </Circle>
    ))
}

