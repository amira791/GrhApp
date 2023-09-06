import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, TabIndicator } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';

export default function NavTab({ tabs }) {
  const selected = { color: 'teal.700', bg: 'teal.100' };

  return (
    <Tabs variant='unstyled'>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index} _selected={selected}>
            <AttachmentIcon mr="10px" />
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabIndicator bg="teal.400" borderRadius="1px" />
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index}>
            {tab.component}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
