
import { Text ,Tabs, TabList, Tab, TabPanels, TabPanel, TabIndicator } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';

export default function NavTab({ tabs }) {
  const selected = { color: 'teal.700', bg: '#E3FAFC' };

  return (
    <Tabs size="md" variant='enclosed'>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index} _selected={selected}>
            <AttachmentIcon mr="10px" boxSize="6"/>
            <Text fontSize="18px"> {tab.label} </Text>
          </Tab>
        ))}
      </TabList>
      <TabIndicator bg="teal.400"  />
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
