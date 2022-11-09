# Flex Magento SDK

Flexshopper Wrapper for Magento

## **Installation**

```
npm install flex-magento-sdk
```

## **Usage**

### Setting up the Retry Client (You must do this before making any requests)

```
// Fixed Delay Example:
FlexMagento.setupClient({ url: process.env.MAGENTO_URL, retries: 3, retryDelay: () => {
  		return 5000;
}


// Incremental Delay Example:
FlexMagento.setupClient({ url: process.env.MAGENTO_URL, retries: 3, retryDelay: (retryCount) => {
  		return retryCount * 1000;
}


// Exponential Delay Example:
function exponentialDelay(retryNumber = 0) {
        const delay = Math.pow(2, retryNumber) * 100;
        const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
        return delay + randomSum;
}

FlexMagento.setupClient({ url: process.env.MAGENTO_URL, retries: 3, retryDelay: exponentialDelay });
```

### Getting a Page From Magento

```
import * as React from 'react';
import * as FlexMagento from 'flex-magento-sdk';

const [html, setHtml] = React.useState('');

FlexMagento.getPageFromMagento(pageId).then((res: any) => {
        setHtml(res.data.content);
});
```

_This package utlizies `axios-retry` for transient error handling_

https://github.com/softonic/axios-retry
