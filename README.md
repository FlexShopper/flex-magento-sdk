# Flex Magento SDK
Flexshopper Wrapper for Magento

This package utlizies `axios-retry` for transient error handling. By default all requests will retry 3 times before failing.

## **Installation**

```
npm install flex-magento-sdk
```

## **Usage**
```
import * as React from 'react';
import * as FlexMagento from 'flex-magento-sdk';

const [html, setHtml] = React.useState('');

FlexMagento.getPageFromMagento('privacy-policy', 'en').then((res: any) => {
	setHtml(res.data.content);
});
```

