# Flex Magento SDK
Flexshopper Wrapper for Magento

## **Installation**

```
npm install flex-magento-sdk
```

## **Usage**

### 1. Setting up the Retry Client (You must do this before making any requests)
```
// Simple Setup
// If no custom delay is specified an exponential delay is added by default
FlexMagento.setupRetryClient({ retries: 3 })

// Custom Delay Setup
FlexMagento.setupRetryClient({ retries: 3, delay: (retryCount) => {
  		return retryCount * 1000;
	}
})
```

### 2. Getting a Page From Magento 
```
import * as React from 'react';
import * as FlexMagento from 'flex-magento-sdk';

const [html, setHtml] = React.useState('');

FlexMagento.getPageFromMagento(FlexMagento.AVAILABLE_PAGES.PRIVACY_POLICY, 'en').then((res: any) => {
	setHtml(res.data.content);
});
```

*This package utlizies `axios-retry` for transient error handling*

https://github.com/softonic/axios-retry
