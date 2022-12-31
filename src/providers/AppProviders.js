import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ErrorProvider } from 'hooks/useError.js';
import { AuthProvider } from 'hooks/useAuth.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SuccessActionProvider } from 'hooks/useSuccessAction.js';

const queryClient = new QueryClient();

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ErrorProvider>
            <SuccessActionProvider>
              <AuthProvider>
                <GlobalStyle />
                {children}
              </AuthProvider>
            </SuccessActionProvider>
          </ErrorProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
