import { FC } from 'react'

interface Props {
  slug: String
}

const Icon: FC<Props> = ({ slug }) => {
  switch (slug) {
    case 'alphabets':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16,10V5V4c0-1.654-1.346-3-3-3h-3v2h3c0.551,0,1,0.448,1,1h-2.5C9.57,4,8,5.57,8,7.5 S9.57,11,11.5,11H15C15.552,11,16,10.553,16,10z M10,7.5C10,6.673,10.673,6,11.5,6H14v3h-2.5C10.673,9,10,8.327,10,7.5z"></path>{' '}
          <path d="M6,15H4v-5H2v12c0,0.553,0.448,1,1,1h3c2.206,0,4-1.794,4-4S8.206,15,6,15z M6,21H4v-4h2 c1.103,0,2,0.897,2,2S7.103,21,6,21z"></path>{' '}
          <path d="M20.867,20.499C20.688,20.809,20.356,21,20,21h-2c-0.551,0-1-0.448-1-1v-3c0-0.552,0.449-1,1-1h2 c0.356,0,0.688,0.191,0.867,0.5l1.73-1.002C22.062,14.574,21.067,14,20,14h-2c-1.654,0-3,1.346-3,3v3c0,1.654,1.346,3,3,3h2 c1.067,0,2.063-0.574,2.598-1.499L20.867,20.499z"></path>
        </svg>
      )
    case 'numbers':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 13H3.2L5 10.9V10H2v1h1.8L2 13.1v.9h3v-1zm2-8h14v2H7V5zM5 16H2v1h2v.5H3v1h1v.5H2v1h3v-4zm2 1h14v2H7v-2zM3 8h1V4H2v1h1v3zm4 3h14v2H7v-2z"></path>
        </svg>
      )
    case 'animals':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
        >
          <line x1="9" y1="9" x2="10" y2="9"></line>{' '}
          <line x1="14" y1="9" x2="15" y2="9"></line>{' '}
          <line x1="7" y1="1" x2="7" y2="4"></line>{' '}
          <line x1="17" y1="1" x2="17" y2="4"></line>{' '}
          <polyline points="18.97516,13.26392 18,4 6,4 5.02484,13.26392 "></polyline>{' '}
          <path d="M6,4H1c0,2.20911,1.79083,4,4,4 h0.57898"></path>{' '}
          <path d="M18,4h5c0,2.20911-1.79083,4-4,4h-0.57898 "></path>{' '}
          <circle cx="9" cy="18" r="1"></circle>{' '}
          <circle cx="15" cy="18" r="1"></circle>{' '}
          <path d="M18,13H6 c-1.10457,0-2,0.89543-2,2v3c0,2.76142,2.23858,5,5,5h6c2.76142,0,5-2.23858,5-5v-3C20,13.89543,19.10457,13,18,13z"></path>
        </svg>
      )
    case 'clothes':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <polyline points="22 16 23 16 23 13 15 9.8"></polyline>
          <path d="M15,4A3,3,0,0,0,9,4a2.913,2.913,0,0,0,2,2.8V9L1,13v3H2"></path>
          <rect x="5" y="15" width="14" height="8"></rect>
        </svg>
      )
    case 'colors':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M1,12c0-3.7,1.8-7,4.7-9 c1-0.7,2.7-0.9,3.3,0c1,1.2-0.8,3,0,4c2,2.4,6.1-2.3,11,0c3.5,1.8,3,6.3,2.6,8c-1.3,4.6-5.6,8-10.6,8C5.9,23,1,18.1,1,12z"></path>{' '}
          <circle cx="17" cy="12" r="2"></circle>{' '}
          <circle cx="5" cy="12" r="1"></circle>{' '}
          <circle cx="7.5" cy="17" r="1"></circle>{' '}
          <circle cx="13" cy="19" r="1"></circle>
        </svg>
      )
    case 'emotions':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="11"></circle>{' '}
          <path d="M18,13A6,6,0,0,1,6,13Z"></path>{' '}
          <path d="M18,9a2,2,0,0,0-4,0"></path>{' '}
          <path d="M10,9A2,2,0,0,0,6,9"></path>
        </svg>
      )
    case 'family':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="6.5" cy="3.5" r="2.5"></circle>
          <circle cx="17.5" cy="3.5" r="2.5"></circle>
          <circle cx="12" cy="15" r="2"></circle>
          <polyline points="9 23 9 20 15 20 15 23"></polyline>
          <line x1="5" y1="17" x2="9" y2="20"></line>
          <line x1="19" y1="17" x2="15" y2="20"></line>
          <path d="M1,20V14.5A5.5,5.5,0,0,1,6.5,9h0a5.476,5.476,0,0,1,3.163,1"></path>
          <path d="M23,20V14.5A5.5,5.5,0,0,0,17.5,9h0a5.476,5.476,0,0,0-3.163,1"></path>
        </svg>
      )
    case 'fruits':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M14,4a13.682,13.682,0,0,1,5-1c-3,3-3,7-1,11"></path>{' '}
          <path d="M6,14A9.717,9.717,0,0,1,9.434,6.8"></path>{' '}
          <path d="M2,4S5.062,1,8,1c3,0,6,3,6,3S11.062,7,8,7C5,7,2,4,2,4Z"></path>{' '}
          <circle cx="5.5" cy="18.5" r="4.5"></circle>{' '}
          <circle cx="18.5" cy="18.5" r="4.5"></circle>
        </svg>
      )
    case 'greetings':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M20.4,16.8 C22,15.2,23,13.2,23,11c0-5-4.9-9-11-9S1,6,1,11c0,5,4.9,9,11,9c1.1,0,2.1-0.1,3.1-0.4L21,22L20.4,16.8z"></path>{' '}
          <line x1="8" y1="9" x2="16" y2="9"></line>{' '}
          <line x1="8" y1="13" x2="13" y2="13"></line>
        </svg>
      )
    case 'nature':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <line x1="8" y1="19" x2="8" y2="11"></line>
          <path d="M10.523,7.15A4.971,4.971,0,0,0,11,5c0-2.209-1.343-4-3-4S5,2.791,5,5a4.971,4.971,0,0,0,.477,2.15A5.509,5.509,0,0,0,4,11c0,2.761,1.791,5,4,5s4-2.239,4-5A5.509,5.509,0,0,0,10.523,7.15Z"></path>
          <line x1="16" y1="19" x2="16" y2="11"></line>
          <path d="M13.919,15.252A3.414,3.414,0,0,0,16,16c2.209,0,4-2.239,4-5a5.509,5.509,0,0,0-1.477-3.85A4.971,4.971,0,0,0,19,5c0-2.209-1.343-4-3-4a2.82,2.82,0,0,0-2.367,1.568"></path>
          <path d="M2.907,16.472A18.631,18.631,0,0,0,1,17.767V23H23V17.767a18.631,18.631,0,0,0-1.907-1.295"></path>
        </svg>
      )
    case 'profession':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M19,9.5c0,4.694-3,9.5-7,9.5S5,14.194,5,9.5"></path>
          <path d="M3,22.5l4.329-.721A2,2,0,0,0,9,19.806V19"></path>
          <path d="M21,22.5l-4.329-.721A2,2,0,0,1,15,19.806V19"></path>
          <path d="M12,1C8.134,1,4,2,5,9.5c0,.336.02.673.05,1.008A4.982,4.982,0,0,1,10,6h2a3.975,3.975,0,0,0,3.056-1.447,4.992,4.992,0,0,0,4,4.357C19.756,1.964,15.759,1,12,1Z"></path>
        </svg>
      )
    case 'pronouns':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M4,7L4,7 C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C6,6.105,5.105,7,4,7z"></path>{' '}
          <path d="M6,21H3v-4 l-2,0v-5c0-1.105,0.895-2,2-2h1"></path>{' '}
          <path d="M20,7L20,7 c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2h0c-1.105,0-2,0.895-2,2v0C18,6.105,18.895,7,20,7z"></path>{' '}
          <path d="M18,21h3v-4 l2,0v-5c0-1.105-0.895-2-2-2h-1"></path>{' '}
          <path d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"></path>{' '}
          <path d="M15,23H9v-6H7v-5 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"></path>
        </svg>
      )
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#8c98ad" d="M6,24H0v-6h6V24z"></path>{' '}
          <path fill="#8c98ad" d="M15,15H9V9h6V15z"></path>{' '}
          <path fill="#8c98ad" d="M6,15H0V9h6V15z"></path>{' '}
          <path fill="#8c98ad" d="M15,6H9V0h6V6z"></path>{' '}
          <path fill="#8c98ad" d="M6,6H0V0h6V6z"></path>{' '}
          <path fill="#8c98ad" d="M24,6h-6V0h6V6z"></path>{' '}
          <rect x="19" y="19" width="4" height="4"></rect>{' '}
          <rect x="19" y="10" width="4" height="4"></rect>{' '}
          <rect x="10" y="19" width="4" height="4"></rect>
        </svg>
      )
  }
}

export default Icon
