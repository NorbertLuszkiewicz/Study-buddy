import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ErrorProvider } from 'hooks/useError.js';
import { AuthProvider } from 'hooks/useAuth.js';
import { SuccessActionProvider } from 'hooks/useSuccessAction.js';
import { ReactQueryDevtools } from 'react-query/devtools/index.js';

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
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
