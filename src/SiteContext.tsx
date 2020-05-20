import * as React from 'react';

export interface SiteContextProps {
  direction: string;
}

const SiteContext = React.createContext<SiteContextProps>({
  direction: 'ltr',
});

export default SiteContext;
