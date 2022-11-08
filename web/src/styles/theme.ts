export interface ThemeProps {
  font: string;
  colors: {
    white: string;
    purple: {
      500: string;
    };
    red: {
      500: string;
      400: string;
    };
    green: {
      500: string;
    };
    gray: {
      400: string;
    }
  };
  fontSize: {
    sm: string;
    md: string;
    lg: string;
  };
  headingSize: {
    sm: string;
    md: string;
    lg: string;
  };
  shadow: string;
}

export const defaultTheme: ThemeProps = {
  
  font: 'Inter, sans-serif',

  colors: {
    white: '#fff',
    purple: {
      500: '#a855f7',
    },

    red: {
      500: '#ef4444',
      400: '#f87171',
    },

    green: {
      500: '#22c55e',
    },

    gray: {
      400: '#9ca3af',
    }
  },

  fontSize: {
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
  },

  headingSize: {
    sm: '2.4rem',
    md: '2.8rem',
    lg: '3.2rem',
  },

  shadow: '2px 4px 10px rgba(0, 0, 0, 0.2)',

}