import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MapIcon from '@mui/icons-material/Map';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { styled } from '@mui/system'
import HanabiIcon from '../images/hanabi.png'

const CustomBottomNavigation = styled(BottomNavigation)({
    backgroundColor: '#098FF0', // フッターの背景色
    color: 'white', // フッターの文字色
    borderRadius: '0',
    width: '393px',
    height: '63px'
  });

  const CustomBottomNavigationAction = styled(BottomNavigationAction)({
    color: 'white', // アイコンとラベルの色
  });

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <CustomBottomNavigation onChange={handleNavigation} showLabels  >
      <CustomBottomNavigationAction label="再撮影" value="/photo" icon={<CameraAltIcon />} />
      <CustomBottomNavigationAction label="花火大会" value="/hanabi"  icon={<img src={HanabiIcon} alt="Hanabi" style={{ width: 24, height: 24 }} />} /> 
      <CustomBottomNavigationAction label="マップ" value="/map" icon={<MapIcon />} />
      <CustomBottomNavigationAction label="QR読取" value="/qr" icon={<QrCode2Icon />} />
    </CustomBottomNavigation>
  );
};

export default Footer;