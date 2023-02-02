import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import BandcampIcon from './BandcampIcon';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navigation = () => {
  const iconColor = grey['A400'];
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '48px',
          backgroundColor: 'transparent',
          padding: '16px',
          color: '#fff',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'right', alignItems: 'center' }}>
          <ul className='navigation'>
            <li className='navigation-item'>
              <a href='/'>Home</a>
            </li>
            <li className='navigation-item'>
              <a href='/portfolio'>Portfolio</a>
            </li>
            <li className='navigation-item'>
              <a href='/music'>Music</a>
            </li>
            <li>|</li>
          </ul>
        </Box>
        <Box sx={{ display: { lg: 'none', sm: 'block', xs: 'block' } }}>
          <ul className='social-navigation'>
            <li>
              <a
                href='http://www.instagram.com/chvck.leone/'
                target='new'
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.75em',
                }}
              >
                <InstagramIcon
                  fontSize='small'
                  sx={{ color: iconColor, paddingRight: '8px' }}
                />
                <span className='sr-only'>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.youtube.com/channel/UCT4tYnr6SjSunE3EWC5y5QA'
                target='new'
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.75em',
                }}
              >
                <YouTubeIcon
                  fontSize='small'
                  sx={{ color: iconColor, paddingRight: '8px' }}
                />
                <span className='sr-only'>YouTube</span>
              </a>
            </li>
            <li>
              <a
                href='http://www.twitter.com/chuckleone/'
                target='new'
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.75em',
                }}
              >
                <TwitterIcon
                  fontSize='small'
                  sx={{ color: iconColor, paddingRight: '8px' }}
                />
                <span className='sr-only'>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/chuckleone'
                target='new'
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.75em',
                }}
              >
                <GitHubIcon
                  fontSize='small'
                  sx={{ color: iconColor, paddingRight: '8px' }}
                />
                <span className='sr-only'>Github</span>
              </a>
            </li>
            <li>
              <a
                href='https://chuckleone.bandcamp.com/'
                target='new'
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.75em',
                }}
              >
                <BandcampIcon
                  fontSize='20px'
                  sx={{ color: iconColor, paddingRight: '8px' }}
                />
                <span className='sr-only'>Bandcamp</span>
              </a>
            </li>
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
