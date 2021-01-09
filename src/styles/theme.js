import { rgba } from 'polished';


export const theme = {
  global: {
    colors: {
      primary:    '#007bff',
      secondary:  '#343a40',
      success:    '#28a745',
      info:       '#17a2b8',
      warning:    '#ffc107',
      danger:     '#dc3545',
      light:      '#f8f9fa',
      dark:       '#343a40',
    },
    edgeSize: {
      small: '14px',
    },
    elevation: {
      light: {
        medium: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      },
    },
    font: {
      size: '14px',
      height: '20px',
      family: '\'Roboto\', \'sans-serif\'',
    },
  },
  space: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '3rem',
  },
  button: {
    border: {
      width: '1px',
      radius: '4px',
    },
    padding: {
      vertical: '8px',
      horizontal: '16px',
    },
    extend: props => `
      text-transform: uppercase;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: normal;
 
     ${!props.primary && `
       border-color: ${rgba (props.colorValue, 0.5)};
       color: ${props.colorValue};
       :hover {
          box-shadow: none;
          background-color: ${rgba (props.colorValue, 0.08)};
        }
      `}
    `,
  },
};
