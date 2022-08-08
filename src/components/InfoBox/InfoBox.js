import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

const InfoBox = ({background, title, cases, total}) => {
    return (
        <Card className={`infoBox bg-${background}`}>
            <CardContent>
                <Typography className='infoBox__title' color='intextSecondary'>
                    {title}
                </Typography>
                <h2 className='infoBox__cases'>{cases} <span style={{fontSize: '16px', fontWeight: 'normal'}}> Last 24 hrs.</span></h2>
                <Typography className='infoBox__total'>
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    );
};

export default InfoBox;